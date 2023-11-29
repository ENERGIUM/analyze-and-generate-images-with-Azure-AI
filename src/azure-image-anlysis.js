
import React, { useState } from 'react';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
// Azure Vision API
const AnalyzeImage = ({ imageUrl, onAnalysisResult }) => {
  const [result, setResult] = useState(null);

  const handleAnalysis = async () => {
    try {
      const endpoint = process.env.REACT_APP_AZURE_ENDPOINT?? '';  //verifica que la variable no sea nula
      const subscriptionKey = process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY?? '';
      console.log(endpoint);
      const url = `${endpoint}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&language=en&features=caption`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
        params: {
          'visualFeatures': 'Categories,Description,Color',
          'language': 'en',
        },
        body: JSON.stringify({ url: imageUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);

      // Pass the result back to the parent component
      onAnalysisResult(data);
    } catch (error) {
      console.error('Error calling Azure Vision API:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleAnalysis}>Analyze Image</button>
      <h3>Selected Image:</h3>
      {imageUrl && <img src={imageUrl} alt="Selected" style={{ maxWidth: '25%' }} />}
      <h3>Analysis Result:</h3>
      {result && (
        <div>
          <h4>Image Description:</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AnalyzeImage;