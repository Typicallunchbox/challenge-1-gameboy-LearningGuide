import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log(`
  *** Gameboy Model created by https://sketchfab.com/thegraphicsgeek and lisenced under CC Attribution ***
`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className="frame">
			<h1 className="frame__title">samgpu</h1>
			<nav className="frame__links">
				<a href="https://www.youtube.com/channel/UCiIkx7QcBoH5qhSECUGb3hw">YouTube</a>
				<a href="https://github.com/samgpu">GitHub</a>
			</nav>
		</header>
		<main className="content">
      <App />
		</main>
		<script src="themePicker.js" type="module"></script>
  </React.StrictMode>,
)
