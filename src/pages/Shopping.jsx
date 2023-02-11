import React from 'react'
import styled from 'styled-components';
import { Announcment } from '../Components/Announcment';
import { Footer } from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { NewsLetter } from '../Components/NewsLetter';
import { Products } from '../Components/Products';
const Container=styled.div`
    
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`
const Title=styled.h1`
    margin: 20px;
`
const Filter=styled.div`
    margin: 20px;
`
const Text=styled.span`
    font-size: 20px;
    font-weight: 700;
`
const Select=styled.select`
    font-size: 20px;
    font-weight: 400;
    border: .5px solid lightgray;
    padding: 5px 8px;
    margin: 0 10px;
`
const Option=styled.option`
    font-size: 20px;
`





const Shopping = () => {
  return (
    <Container>
        <Navbar/>
        <Announcment/>
        <Title>Dresses</Title>
        <FilterContainer>
            
            <Filter>
                <Text>Filter Products: </Text>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>Gray</Option>
                    <Option>Blue</Option>
                </Select>
                <Select>
                    <Option disable selected>Size</Option>
                    <Option>XS</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>Xl</Option>
                </Select>
            </Filter>
            <Filter>
                <Text>Sort Products: </Text>
                <Select>
                    <Option selected disabled>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (des)</Option>

                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
export default Shopping;