import { Cart } from "./Cart";
import { HeaderModal, ModalBox, ModalContainer } from "./styles";

export const ModalSection = ({ children, setIsOpen, cart,deleteToCart }) => {
console.log(cart)

  return (
    <ModalContainer>
      <ModalBox>
        <HeaderModal>
          <h1>carrinho de compras</h1>
          <button onClick={() => setIsOpen(false)}>X</button>
        </HeaderModal>
        {cart.map((item,index) => (
          <Cart key={index} item={item} deleteToCart={deleteToCart} index={index}  />
          ))}
        {/* {children} */}
        
      </ModalBox>
    </ModalContainer>
  );
};

