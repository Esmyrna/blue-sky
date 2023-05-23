import Buildings from "../../components/Buildings"
import Imgs from "../../components/Imgs"
import GlobalStyle from "../../global/GlobalStyle"
import { AllHome } from "./style"

 
const Home = () => {
  return (
    <>
    <GlobalStyle />
     <AllHome>
          <Imgs />
              <Buildings/>
    </AllHome>
         

    </>
  )
}

export default Home