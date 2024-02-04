import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Providers from 'react'
import { StrictMode } from 'react'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
