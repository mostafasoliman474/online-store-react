

import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components';

const Container=styled.div`
    padding:10px 20px;
`
const Warper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
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
    
`
const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
`
const SearchContainer=styled.div`
    display: flex;
    align-items: center;
    border:.5px solid lightgray;
    padding: 4px;
    margin-left: 25px;
    border-radius: 5px;
`
const Input=styled.input`
    border: none;
    outline:none;

`
const Logo=styled.h1`
    font-weight: bold;
`
const MenuItem=styled.span`
    font-size:16px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 700;
    margin-right:1rem;

`


const Navbar = () => {
  return (
    <>
    <Container>
        
        <Warper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
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