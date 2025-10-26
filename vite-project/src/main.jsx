import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx'
import PropsFC,{Profile} from './PropsFC.jsx'
import Props_CC from './Props_CC.jsx'
import UseState_FC from './UseState_FC.jsx'
import OnClick_FC from './onClick_FC.jsx'
import OnChange_FC from './OnChange_FC.jsx'
import OnMouse_FC from './OnMouse_FC.jsx'
import HideShowToggle from './HideShowToggle.jsx'
import ConditionalRendering from './ConditionalRendering.jsx'
import ListAndKeys from './ListandKeys.jsx'
import TableList from './TableList.jsx'
import UseEffectTitle from './UseEffectTitle.jsx'
import UseEffectTimer from './UseEffectTimer.jsx'
import UseRef_FocusInput from './UseRef_FocusInput.jsx'
















createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     {/* <PropsFC name="ZARISH" age={23} />
     <Profile/>
      */}
      
    {/* <Props_CC name="Zarish" course="Advanced React_Programming" /> */}

{/* <UseState_FC/> */}
{/* <OnClick_FC/> */}
{/* <OnChange_FC/> */}
{/* <OnMouse_FC/> */}
{/* <HideShowToggle/> */}
{/* <ConditionalRendering/> */}
{/* <ListAndKeys/> */}
{/* <TableList/> */}
{/* <UseEffectTitle/> */}
{/* <UseEffectTimer/> */}
<UseRef_FocusInput/>



  </StrictMode>
)
