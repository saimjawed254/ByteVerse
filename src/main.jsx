import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App.jsx'
import Register from './pages/register-page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/register' element={<Register/>}/>     
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
