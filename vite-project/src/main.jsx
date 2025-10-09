import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx'
import FirstFile,{Profile,Setting} from './Firstfile.jsx'
import ClassComponent from './ClassComponent.jsx'
import JSX from './JSX.jsx'
import UseState_FC from './UseState_FC.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <FirstFile  name ='My Self  Sherry Sugar_Khalifa' age={23}/>
  <Profile/>
  <Setting/> */}
  {/* <ClassComponent name='  ZARISH  '/> */}
{/* <JSX/> */}
<UseState_FC/>
  
 
  

  </StrictMode>
)
