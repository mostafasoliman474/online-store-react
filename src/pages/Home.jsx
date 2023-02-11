import React from 'react'
import { Announcment } from '../Components/Announcment';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import { Categories } from '../Components/Categories';
import { Products } from '../Components/Products';
import { NewsLetter } from '../Components/NewsLetter';
import { Footer } from '../Components/Footer';






const Home = () => {
  return (
    <>
    
    <Announcment/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <NewsLetter/>
    <Footer/>
    </>
    
  )
}
export default Home;
