

import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../Responsive';


const Container=styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Warper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
    ${mobile({padding:'10px 0'})}
`
const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    
`
const Center=styled.div`
    flex:1;
    text-align: center;
`
const Right=styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ flex: 3, justifyContent: "center" })}
    
`
const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    ${mobile({display:'none'})}
`
const SearchContainer=styled.div`
    display: flex;
    align-items: center;
    border:.5px solid lightgray;
    padding: 4px;
    margin-left: 25px;
    border-radius: 5px;
    height: 30px;
  ${mobile({ marginLeft:'10px'})}
`
const Input=styled.input`
    border: none;
    outline:none;
    ${mobile({width:"50px"})}
`
const Logo=styled.h1`
    font-weight: bold;
    ${mobile({fontSize:'24px'})}
`
const MenuItem=styled.span`
    font-size:16px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 700;
    margin-right:1rem;
    ${mobile({fontSize:'12px',marginLeft: "0px"})}

`


const Navbar = () => {
  return (
    <>
    <Container>
        
        <Warper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{fontSize:'16px',color:'gray'}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>MARAH.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
            </Right>
        </Warper>
    </Container>
    </>
  )
}
export default Navbar;