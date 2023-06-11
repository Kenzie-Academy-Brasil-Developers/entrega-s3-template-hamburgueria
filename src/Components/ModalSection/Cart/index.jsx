// Código do componente Cart
import { Card, ImgProduct, SubTitleProduct } from "../../CardSection/styles";
import { CartContainer, ImgCart } from "./styles";

export const Cart = ({ item, deleteToCart,index }) => {
    // console.log(index)
  return (
    <CartContainer>
      <ImgCart>
        <img src={item.img} alt="imagem do produto" />
      </ImgCart>
      <SubTitleProduct>
        <h1>{item.name}</h1>
        <button onClick={() => deleteToCart(item.id)} type="button" >excluir</button>
        {console.log(index)}
      </SubTitleProduct>
    </CartContainer>
    
  );
}