import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log(`
  *** Gameboy Model created by https://sketchfab.com/a.stark and lisenced under CC Attribution ***
`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
