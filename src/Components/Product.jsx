
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../Responsive";
const Container=styled.div`
    flex: 1;
    min-width: 280px;
    flex-wrap: wrap;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e7ebfa;
    margin: 10px;
    border-radius: 10px;
    ${mobile({width:'300px'})}
    
`
const Image=styled.img`
    height: 60%;
    z-index: 2;
    ${mobile({width: '50%',height: '200px'})}
`
const Info=styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 3;
    background-color: rgba(0,0,0,0);
    opacity: 0;
    transition: .5s ease-out;
    &:hover{
        background-color: rgba(0,0,0,.5);
        opacity: 1;
        border-radius: 10px;
    }
`
const Circule=styled.div`
width: 60%;
height: 60%;
border-radius: 50%;
z-index: 0;
position :absolute ;
background-color:white ;
`
const Icon=styled.div`
padding: .7rem;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
&:hover{
    background-color: #eff7ff;
    transform: scale(1.1);
}
    
`
export const Product = ({item}) => {
  return (
    <Container>
        <Circule></Circule>
        <Image src={item.src} key={item.id}/>
        <Info>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>

    </Container>
  )
}
