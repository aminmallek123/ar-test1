import { useEffect } from 'react'

import './App.css'

function App() {
  return (
    <iframe
      src="/ar.html"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
        display: "block"
      }}
      allow="camera"
      title="AR View"
    />
  );
}

export default App;
