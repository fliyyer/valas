import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Content from '../components/Content'
import Price from '../components/Price'
import Experience from '../components/Experience'
import Slider from '../components/Slider'
import FAQ from '../components/Faq'

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <AboutUs />
            <Content />
            <Price />
            <Experience />
            <Slider />
            <FAQ />
        </div>
    )
}

export default Homepage
