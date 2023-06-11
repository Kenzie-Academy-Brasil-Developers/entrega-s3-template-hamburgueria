import styled from "styled-components";

    export const CartContainer = styled.div`
    margin-top:3rem;
    display:flex;
    height:10rem;
    
    `

    export const ImgCart = styled.div`  
    display: flex;
    align-items: flex-end;

    >img{
        background-color: #E0E0E0;
        height: 100%;
        margin-left:2rem;
    }

    `

    export const SubtitleCart = styled.div`
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        width: 100%;
        
        >h1{
            font-size:18px;
            font-weight:700;
            margin-left:2%;
        }
        
        >button{
            background-color:white ;
            border:2px solid white;
            width: 4rem;
            margin-right:5%;
            
        }
    `