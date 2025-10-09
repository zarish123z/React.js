import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx'
import FirstFile from './Firstfile.jsx'
import ClassComponent from './ClassComponent.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <FirstFile  name ='My Self  Sherry Sugar_Khalifa' age={23}/> */}
  <ClassComponent name='Zarish'/>
  

  </StrictMode>
)
