import { useEffect } from 'react'

import './App.css'

function App() {
  useEffect(() => {
    // Ensure full viewport on mobile - compatible with all devices
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover')
    }
    
    // Prevent all zoom interactions
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }, { passive: false })

    // Lock orientation if possible
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('portrait-primary').catch((err) => {
        console.log('Orientation locking not supported:', err)
      })
    }

    // Force full height on mobile to account for address bar
    const setFullHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    
    setFullHeight()
    window.addEventListener('resize', setFullHeight)
    window.addEventListener('orientationchange', setFullHeight)

    return () => {
      window.removeEventListener('resize', setFullHeight)
      window.removeEventListener('orientationchange', setFullHeight)
    }
  }, [])

  return (
    <div style={{
      width: "100vw",
      height: "100dvh", // Use dynamic viewport height
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
