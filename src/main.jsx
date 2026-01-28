import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/main.scss'
import { DeviceProvider } from './components/Context/AppContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <DeviceProvider>
        <App />
      </DeviceProvider>
    </BrowserRouter>
  </StrictMode>,
)
