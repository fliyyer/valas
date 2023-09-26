import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Content from '../components/Content'
import Price from '../components/Price'
import Experience from '../components/Experience'
import Slider from '../components/Slider'
import FAQ from '../components/Faq'
import Testi from '../components/Testi'

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <div className='bg-[#E8F0FD]'>
                <Header />
            </div>
            <AboutUs />
            <Content />
            <Price />
            <Experience />
            <Slider />
            <FAQ />
            <Testi />
        </div>
    )
}

export default Homepage
