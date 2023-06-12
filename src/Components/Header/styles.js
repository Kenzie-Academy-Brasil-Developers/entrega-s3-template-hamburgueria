import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color:#F5F5F5;
    width:100%;
    height:15vh;
    margin-top:1rem;
    gap:2rem;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    position:absolute;
    top:0;
    left:0;
    right:0;

    @media(min-width: 1000px){
        justify-content: flex-end;
        height: 8vh;
        >form{
            margin-right: 5% ;
        }
        
    }
`

export const LogoHeader = styled.img`
    @media(min-width: 1040px){  
    margin-right: 55%;

}
`
export const StyledCarrinho = styled.button`
    border:none;    

`
