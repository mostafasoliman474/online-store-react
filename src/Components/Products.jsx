import styled from "styled-components";
import { PopularProduct } from "../Data";
import { Product } from "./Product";
const Container=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  padding:.5rem;
    
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
