import { useRef } from "react";
import { useEffect } from "react";
import { Cart } from "./Cart";
import { HeaderModal, ModalBox, ModalContainer } from "./styles";

export const ModalSection = ({ children, setIsOpen, cart,deleteToCart }) => {
  const modalRef = useRef(null)

  useEffect(() =>{
    const handleOutClick =(e)=>{

      if(!modalRef.current?.contains(e.target)){
        setIsOpen(false)
      }
    }
      window.addEventListener("mousedown",handleOutClick)

    return () =>{
      window.removeEventListener("mousedown",handleOutClick)
    }
  },[])

  const escRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.key === "Escape"){
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown",handleKeyDown)

    return () => {
      window.removeEventListener("keydown",handleKeyDown)

    }

  },[])

  return (
    <ModalContainer role="dialog">
      <ModalBox ref={modalRef}>
        <HeaderModal>
          <h1>carrinho de compras</h1>
          <button ref={escRef} onClick={() => setIsOpen(false)}>X</button>
        </HeaderModal>
          {cart.map((item,index) => (
            <Cart key={index} item={item} deleteToCart={deleteToCart} index={index}  />
          ))}
        {/* {children} */}
        
      </ModalBox>
    </ModalContainer>
  );
};

