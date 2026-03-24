import { useEffect } from 'react'

import './App.css'

function App() {
  useEffect(() => {
    // Ensure full viewport on mobile
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
    }
    
    // Prevent zoom on double tap
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }, { passive: false })
  }, [])

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      position: "fixed",
      top: 0,
      left: 0
    }}>
      <iframe
        src="/ar.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          margin: 0,
          padding: 0,
          display: "block"
        }}
        allow="camera"
        title="AR View"
      />
    </div>
  );
}

export default App;
