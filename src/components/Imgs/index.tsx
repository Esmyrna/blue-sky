import { Container, Img, Li, Summer, Tree, Ul } from "./style"
import Sol from '../../assets/sol.png'
import Nuvem from '../../assets/nuvem.webp'
import Arvore from '../../assets/arvore.png'
import Time from "../Time"

const Imgs = () => {
  return (
   <>
    <Container>
        <Summer>
        <Img  src={Sol} width={'250px'}  height={'250px'}/>
        </Summer>
        <Ul>
            <Li> <Img src={Nuvem} width={'250px'} height={'110px'} /></Li>
            <Li> <Img src={Nuvem} width={'250px'} height={'110px'} /></Li>       
        </Ul>
        <Time />  
     </Container>
      <Tree>
      <Img src={Arvore} />

      </Tree>
   </>
    
  )
}

export default Imgs