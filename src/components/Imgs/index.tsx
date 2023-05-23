import { Container, Img, Li, Summer, Ul } from "./style"
import Sol from '../../assets/sol.png'
import Nuvem from '../../assets/nuvem.webp'
import Arvore from '../../assets/arvore.png'
import Time from "../Time"
import { Tree } from "../Buildings/style"

const Imgs = () => {
  return (
   <>
    <Container>
        <Summer>
        <Img  src={Sol} width={'250px'}  height={'250px'}/>
       
      <Img src={Arvore} />

     
        </Summer>
        <Ul>
            <Li> <Img src={Nuvem} width={'250px'} height={'110px'} /></Li>
            <Li> <Img src={Nuvem} width={'250px'} height={'110px'} /></Li>       
        </Ul>
        <Time />  
     </Container>
     
   </>
    
  )
}

export default Imgs