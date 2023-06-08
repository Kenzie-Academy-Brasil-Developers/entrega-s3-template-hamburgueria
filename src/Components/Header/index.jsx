import Logo from "../../assets/logotipo.svg"
import carrinho from "../../assets/carrinho.svg"
import { StyledHeader } from "./styles"


export const Header = ({setSearch}) => {
    
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return(  
        <StyledHeader>
            <img src={Logo} alt=" Icone Burguer Kenzie" />

                <img src={carrinho} alt="carrinho de compras" />
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