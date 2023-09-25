import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Content from '../components/Content'
import Price from '../components/Price'

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <AboutUs />
            <Content />
            <Price />
        </div>
    )
}

export default Homepage
