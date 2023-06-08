import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color:#F5F5F5;
    width:100%;
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

    @media(min-width: 800px){
       justify-content:center;
       
    
    }
`