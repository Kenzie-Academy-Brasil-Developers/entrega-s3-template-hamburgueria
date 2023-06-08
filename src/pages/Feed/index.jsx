import { Api } from "../../Services/api"
import {useState,useEffect} from "react"
import { Header } from "../../Components/Header"
import { ProductsList } from "./styles"
import { CardSection } from "../../Components/CardSection"

export const Feed = () => {
    const [products,setProduct] = useState([])
    const [isLoading, setIsLoading] = useState (true)
    const [search,setSearch] = useState("")
 
    const filteredProducts = products.filter(
    product => product.name.toUpperCase().includes(search.toUpperCase())
      )


    useEffect(() => {
      const getProducts = async () =>{
        try {
          const response = await Api.get("/products")
          setProduct(response.data)
          
        } catch (error) {
          console.error(error)
        }finally{
          setIsLoading(false)
        }
      }
      getProducts()
    }, [])
  
    return (
      <>
       <Header setSearch={setSearch} />
       <ProductsList>
         {
          isLoading?
          <div> Carregando......</div>:
          filteredProducts.map((product)=> <CardSection key={product.id} {...product}/>)
         }
         </ProductsList>
      </>
    )
  }
