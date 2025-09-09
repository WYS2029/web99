import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // 导入HashRouter
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter> {/* 使用HashRouter，不需要basename */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)
