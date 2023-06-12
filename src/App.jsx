import { Header } from './Components/Header'
import { Feed } from "./pages/Feed"
import GlobalStyle from './Styles/GlobalStyle'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// pra amanha 
// ver como faz o modal 
// tirar duvida sobre o carrinho 


function App() {
  return(
    <>
      <ToastContainer/>
      <GlobalStyle/>
      <Feed/>
    </>
  )
  }
export default App
