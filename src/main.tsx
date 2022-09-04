import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'theme-ui'

import App from './App'
import { theme } from './theme'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
