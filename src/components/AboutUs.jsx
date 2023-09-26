import React from 'react'
import Google from '../assets/google.png'
import Air from '../assets/airbnb.png'
import Cm from '../assets/cm.png'
import Shopify from '../assets/shopify.png'
import Amazon from '../assets/amazon.png'
import CardAbout from './CardAbout'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'

const AboutUs = () => {
    return (
        <div className='my-16'>
            <h1 className='text-[#004387] text-2xl text-center font-bold'>READ MORE ABOUT US</h1>
            <div className='flex flex-col items-center space-y-12 gap-4 mt-16 md:flex-row md:justify-center md:gap-[74px] md:mt-[59px]'>
                <img src={Google} alt="Google" />
                <img src={Air} alt="Airbnb" />
                <img src={Cm} alt="Creative Market" />
                <img src={Shopify} alt="Shopify" />
                <img src={Amazon} alt="Amazon" />
            </div>
            <div className='flex flex-wrap justify-center gap-14 mt-32'>
                <CardAbout img={Card1} title='Measure your performance' desc='Stay connected with your team and make quick decisions wherever you are.' />
                <CardAbout img={Card2} title='Custom analytics' desc='Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.' />
                <CardAbout img={Card3} title='Team Management' desc='Our calendar lets you know what is happening with customer and projects so you' />
            </div>
        </div>
    )
}

export default AboutUs
