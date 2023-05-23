 
import { Img } from "../../components/Imgs/style"
import GlobalStyle from "../../global/GlobalStyle"
import { AllPage, Moon, Night } from "./style"
import Lua from '../../assets/lua.png'
import { Building } from "../../components/Buildings/style"

 

const NightTheme = () => {
  return (
    <>
    <GlobalStyle/>
     <AllPage>
      <Night>
          <Moon src={Lua} />
          <Building />
      </Night>
     
    </AllPage>
    </>
   
  )
}

export default NightTheme