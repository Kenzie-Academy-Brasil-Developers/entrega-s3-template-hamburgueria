import Logo from "../../assets/logotipo.svg"
import carrinho from "../../assets/carrinho.svg"
import { StyledHeader } from "./styles"
import { ModalSection } from "../ModalSection"
import { useState } from "react"



export const Header = ({setSearch,cart,deleteToCart}) => {
    const [isOpen,setIsOpen] = useState(false)
    
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return(  
        <StyledHeader>
            <img src={Logo} alt=" Icone Burguer Kenzie" />

               <button onClick={() => setIsOpen(true)}> <img src={carrinho} alt="carrinho de compras" /></button>
                {isOpen ? <ModalSection  cart={cart} setIsOpen={setIsOpen} deleteToCart={deleteToCart} >teste</ModalSection> :null} 
             <form onSubmit={handleSubmit}>
                <input
                 type="text"
                  placeholder="Digitar Pesquisa"
                  onChange={(event)=>setSearch(event.target.value)} 
                  />
                    <button type="submit">Enviar</button>
             </form>

        </StyledHeader>
    )
}