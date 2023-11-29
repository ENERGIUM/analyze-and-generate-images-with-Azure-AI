import React, { useState } from 'react';
import AnalyzeImage from './azure-image-anlysis';
import generateImage from './azure-image-generation';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalysisResult = (result) => {
    setAnalysisResult(result);
  };

//generate function for view results of Analiysis Image
const DisplayResults = ({ result }) => {
  return (
    <div>
      <h3>Analysis Result:</h3>
      {result && (
        <pre>
          Caption Result: {result.captionResult} <br />
          Model Version: {result.modelVersion} <br />
          Metadata: {JSON.stringify(result.metadata, null, 2)}
        </pre>
      )}
    </div>
  );
};

const [inputText, setInputText] = useState('');
  const [imageResult, setImageResult] = useState(null);

  const handleGenerateImage = async () => {
    try {
      const result = await generateImage(inputText);
      setImageResult(result);
      // Aquí puedes manejar la respuesta de la llamada a la API
      console.log('Image Result:', result);
    } catch (error) {
      // Manejar errores
    }
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
      <AnalyzeImage imageUrl={imageUrl} onAnalysisResult={handleAnalysisResult} />
      
      
      {/* <DisplayResults result={analysisResult} /> */}

      <div>
      <h1>OpenAI Image Generation Example</h1>
      
      {/* Entrada de texto */}
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Ingrese el texto para generar la imagen"
      />

      {/* Botón para generar la imagen */}
      <button onClick={handleGenerateImage}>Generar Imagen</button>

      {/* Mostrar la imagen generada (ajustar según la respuesta de la API) */}
      {imageResult && (
        <div>
          <h2>Imagen Generada:</h2>
          <img src={imageResult.url} alt="Generated" />
        </div>
      )}

      {/* Otro contenido de tu aplicación */}
    </div>
    </div>
  );
}

export default App;

