import React from 'react'
import ReactDom from 'react-dom'
import App from './App'


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrickMode>
        <App />
    </React.StrickMode>
)