import styled from "styled-components";

export interface StyleProps {
    width: string
    height: string
}
export const Building = styled.div`
    background-color: grey;
    width: 300px;
    height:600px;
    margin-top: 38%;
    padding: 120px;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;    
    z-index: 3;
`;

export const Window = styled.div<StyleProps>`
    background-color: #000;
    border: 2px solid #fff;
    width: ${({width}) => width};
    height: ${({height}) => height};
    margin: 0 .5rem;
    flex-wrap: wrap;

`;

export const Container = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: 2rem;
   
    

`;

export const OtherBuildings = styled.div`
    background:	#C0C0C0;
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
  

`

export const AllContainer = styled.div`
  
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    overflow-y: hidden;
`;


export const OtherContainer = styled.div`
    margin: .3rem 0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content:center;

`