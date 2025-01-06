import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Sathru from './Sathru.jsx'
//  import Apps from './Apps.jsx'
import Apps from './Apps.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />  */}
    {/* <Sathru/>  */}
    <Apps/>
  </StrictMode>,
)
