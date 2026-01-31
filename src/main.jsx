import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import App from './App.jsx'

import ReactGA from "react-ga4";

// Initialisation Google Analytics
// Remplacez "G-XXXXXXXXXX" par votre véritable ID de mesure
ReactGA.initialize("G-XXXXXXXXXX");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
