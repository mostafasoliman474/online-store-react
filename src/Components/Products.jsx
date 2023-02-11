import styled from "styled-components";
import { PopularProduct } from "../Data";
import { mobile } from "../Responsive";
import { Product } from "./Product";
const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({flexDirection:'column',alignItems:'center',justifyContent:'spaceBetween'})}
`
export const Products = () => {
  return (
    <Container>
        {PopularProduct.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}
