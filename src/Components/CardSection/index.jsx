import { Card, ImgProduct, SubTitleProduct } from "./styles"

export const CardSection = ({name,img,price,category,id}) => {
    return(
        <Card>
            <ImgProduct>
                <img src={img} alt="imagem do produto" />
            </ImgProduct>
            <SubTitleProduct>
                <h1>{name}</h1>
                <p> {category}</p> 
                <span> {`R$ ${price.toFixed(2)}`}</span>     
                <button type="button" id={id}>adicionar</button>
            </SubTitleProduct>
        </Card>
    )

    
}