import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../elements/Homepage/Header'
import AboutUs from '../elements/Homepage/AboutUs'
import Content from '../elements/Homepage/Content'
import Price from '../elements/Homepage/Price'
import Experience from '../elements/Homepage/Experience'
import Slider from '../elements/Homepage/Slider'
import FAQ from '../elements/Homepage/Faq'
import Testi from '../elements/Homepage/Testi'
import Notification from '../elements/Homepage/Notification'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <div className='bg-[#E8F0FD]'>
                <Header />
            </div>
            <AboutUs />
            <Content />
            <div className='bg-[#E8F0FD]'>
                <Notification />
            </div>
            <Price />
            <Experience />
            <Slider />
            <FAQ />
            <Testi />
            <div className='bg-[#2E4865]'>
                <Footer />
            </div>
        </div>
    )
}

export default Homepage
