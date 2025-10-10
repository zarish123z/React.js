import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx'
import PropsFC,{Profile,Setting} from './PropsFC.jsx'
import ClassComponent from './Props_CC.jsx'
import JSX from './JSX.jsx'
import UseState_FC from './UseState_FC.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <PropsFC  name ='My Self  Sherry Sugar_Khalifa' age={23}/>
  <Profile/>
  <Setting/>
  {/* <Props_CC name='  ZARISH  '/> */}
{/* <JSX/> */}
{/* <UseState_FC/> */}
 



  
 


  </StrictMode>
)
