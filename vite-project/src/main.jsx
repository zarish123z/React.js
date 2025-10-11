import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx'
import PropsFC,{Profile} from './PropsFC.jsx'
import Props_CC from './Props_CC.jsx'
import JSX from './JSX.jsx'
import UseState_FC from './UseState_FC.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     {/* <PropsFC name="ZARISH" age={23} />
     <Profile/>
      */}
      
    <Props_CC name="Zarish" course="Advanced React_Programming" />
  
  {/* <Props_CC name='  ZARISH  '/> */}
{/* <JSX/> */}
{/* <UseState_FC/> */}
 



  
 


  </StrictMode>
)
