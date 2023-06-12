import Logo from "../../assets/logotipo.svg"
import carrinho from "../../assets/carrinho.svg"
import { StyledCarrinho, LogoHeader, StyledHeader } from "./styles"
import { ModalSection } from "../ModalSection"
import { useState } from "react"



export const Header = ({setSearch,cart,setCart,deleteToCart}) => {
    const [isOpen,setIsOpen] = useState(false)
    
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return(  
        <StyledHeader>
            <LogoHeader src={Logo} alt=" Icone Burguer Kenzie" />

               <StyledCarrinho onClick={() => setIsOpen(true)}> <img src={carrinho} alt="carrinho de compras" /></StyledCarrinho>
                {isOpen ? <ModalSection  cart={cart} setCart={setCart} setIsOpen={setIsOpen} deleteToCart={deleteToCart} >teste</ModalSection> :null} 
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