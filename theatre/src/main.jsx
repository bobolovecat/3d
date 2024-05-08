import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import App from './App2.jsx'
import './App.css'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'

// studio.extend(extension)
// studio.initialize()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);