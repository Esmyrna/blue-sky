import { useState } from "react"
import GlobalStyle from "../../global/GlobalStyle"
 
import * as C from "./style"


const Buildings = () => {
    const [color, setColor] = useState(false)

    const handleWindowColor = () => {
        setColor(current => !current)
    }

 
    return (
        <>
            <GlobalStyle />
            <C.AllContainer>
                <C.Building>
                    <C.Container>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                    </C.Container>
                    <C.Container>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }> 
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                    </C.Container>
                    <C.Container>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                    </C.Container>
                    <C.Container>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px' } background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                    </C.Container>
                    <C.Container>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        <C.Window width={'50px'} height={'50px'} background={color ? '#FFFF00' : "#000" }>
                            
                        </C.Window>
                        
                    </C.Container>
                    
                    
                </C.Building>

                <C.OtherBuildings>
                    <C.OtherContainer>
                        <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                        </C.Window>
                        <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                        </C.Window>
                        <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                        </C.Window>
                        <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                        </C.Window>
                    </C.OtherContainer>



                    <C.OtherContainer>
                        <C.OtherContainer>
                            <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                            </C.Window>
                            <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                            </C.Window>
                            <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                            </C.Window>
                            <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                            </C.Window>
                        </C.OtherContainer>
                    </C.OtherContainer>
                    <C.OtherContainer>
                        <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                        </C.Window>
                        <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                        </C.Window>
                        <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                        </C.Window>
                        <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                        </C.Window>
                    </C.OtherContainer>
                    <C.OtherContainer>
                        <C.OtherContainer>
                            <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>
                                    
                            </C.Window>
                            <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                            </C.Window>
                            <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                            </C.Window>
                            <C.Window width={'30px'} height={'30px'} background={color ? '#FFFF00' : "#000" }>

                            </C.Window>
                            
                        </C.OtherContainer>
                    </C.OtherContainer>
                 
                </C.OtherBuildings>
                  <C.Btn onClick={handleWindowColor}  >Ligar Luzes</C.Btn>
                  <C.Btn>Ligar Luzes</C.Btn>
                  
            </C.AllContainer>

        </>
    )
}

export default Buildings