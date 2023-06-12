import styled from "styled-components";

export const ModalContainer = styled.div`
    position:fixed;
  
    display:flex;
    align-itens:center;
    justify-content:center;

    inset:0;
    width:100%;
    height:100vh;
    background:rgba(0,0,0,0.3);

    /* overflow-x:auto; */
    /* overflow-x: hidden; */
`

export const ModalBox = styled.div`
    top: 10vh;
    position:fixed;
    display: flex;
    flex-direction:column;
    max-width:30vw;
    width:40vw;
    height: 60vh;
    padding:0rem;
    background:#ffffff;
    overflow-x: auto; 
 `


export const HeaderModal = styled.div`
    position: relative;
    top:0;
    gap:2rem;
    height: 8%;
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content:space-around;
    background-color:var(--Color-primary);
    color:white;

    >h1{
        font-size:1.8rem;
        font-weight:700
    }

    >button{
        border: 2px solid var(--Color-primary);
        background-color:var(--Color-primary) ;
        color: white;

    }

`
