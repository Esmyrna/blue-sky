import GlobalStyle from "./global/GlobalStyle"
import { Outlet } from "react-router-dom";
 

function App() {
  return (
    <>
    <GlobalStyle />
    <Outlet />
    </>
  )
}

export default App
