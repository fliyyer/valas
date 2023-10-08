import React, { useEffect, useContext } from 'react'
import Google from '../../assets/google.png'
import Air from '../../assets/airbnb.png'
import Cm from '../../assets/cm.png'
import Shopify from '../../assets/shopify.png'
import Amazon from '../../assets/amazon.png'
import CardAbout from '../../components/CardAbout'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import AOS from 'aos'
import { LanguageContext } from '../../utils/LanguageContext';

const AboutUs = () => {
    useEffect(() => {
        AOS.init()
    })

    const { t } = useContext(LanguageContext);
    return (
        <div className='my-16' id='about'>
            <h1 className='text-[#004387] text-2xl text-center font-bold ' data-aos='fade-up' data-aos-duration='1500'>READ MORE ABOUT US</h1>
            <div className='flex flex-col items-center space-y-12 md:space-y-0 gap-4 mt-16 md:flex-row md:justify-center md:gap-[74px] md:mt-[59px]' data-aos='fade-up' data-aos-duration='1500'>
                <img src={Google} alt="Google" />
                <img src={Air} alt="Airbnb" />
                <img src={Cm} alt="Creative Market" />
                <img src={Shopify} alt="Shopify" />
                <img src={Amazon} alt="Amazon" />
            </div>
            <div className='flex flex-wrap justify-center items-center gap-14 mt-32' data-aos='fade-up' data-aos-duration='1500'>
                <CardAbout img={Card1} title={t('titleBi')} desc={t('titleBiDescription')} />
                <CardAbout img={Card2} title={t('titleSi')} desc={t('titleSiDescription')} />
                <CardAbout img={Card3} title={t('titlePse')} desc='Our calendar lets you know what is happening with customer and projects so you' />
            </div>
        </div>
    )
}

export default AboutUs
