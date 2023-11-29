import React, { useState } from 'react';
import AnalyzeImage from './azure-image-anlysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalysisResult = (result) => {
    setAnalysisResult(result);
  };

  return (
    <div className="App">
      <h1>Computer Vision Analysis</h1>
      
      {/* Set the image URL */}
      <input
        type="text"
        placeholder="Enter Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      
      {/* Render AnalyzeImage component */}
      <AnalyzeImage imageUrl={imageUrl} onAnalysisResult={handleAnalysisResult} />

      {/* {analysisResult && (
        <div>
          <h2>Analysis Result:</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}

export default App;

