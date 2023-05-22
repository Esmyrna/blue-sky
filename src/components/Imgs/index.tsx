import { Container, Img, Li, Summer, Ul } from "./style"
import Sol from '../../assets/sol.png'
import Nuvem from '../../assets/nuvem.webp'

const Imgs = () => {
  return (
     <Container>
        <Summer>
        <Img  src={Sol} width={'250px'}  height={'250px'}/>
        </Summer>
     

        <Ul>
            <Li> <Img src={Nuvem} width={'250px'} height={'110px'} /></Li>
            <Li> <Img src={Nuvem} width={'250px'} height={'110px'} /></Li>       
        </Ul>
     </Container>
  )
}

export default Imgs