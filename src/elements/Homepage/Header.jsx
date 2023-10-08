import React, { useEffect, useContext } from 'react'
import Gp from '../../assets/google-play.png'
import App from '../../assets/apps-store.png'
import Mockup from '../../assets/mockup jumbotron.png'
import AOS from 'aos'
import { LanguageContext } from '../../utils/LanguageContext'
const Header = () => {
    const { t } = useContext(LanguageContext);
    useEffect(() => {
        AOS.init()
    })

    return (
        <><div className='container mx-auto' id='home'>
            <div className='flex flex-col-reverse  py-32 items-center justify-center md:flex-row' >
                <div className='w-full md:w-1/2 text-center md:text-left' data-aos="fade-right" data-aos-duration='1500'>
                    <h1 className='text-[24px] md:text-[40px] font-bold text-[#0A4BDB]'>
                        {t('Tukar Uang Lebih')} <span className='text-[#14C3F2]'>{t('Praktis')},<br /> </span> {t('Hanya Dalam')} <span className='text-[#14C3F2]'>{t('Satu Genggaman')}</span>
                    </h1>
                    <p className='text-base text-[#0A4BDB] leading-[24px] md:leading-[20px] md:w-[453px]'>
                        {t('headerDescription')}
                    </p>
                    <div className='flex md:gap-2 mt-9 md:mt-12'>
                        <img src={Gp} className='w-44 mx-auto md:mx-0 cursor-pointer' alt="Google Play" />
                        <img src={App} className='w-44 mx-auto md:mx-0 cursor-pointer' alt="Play Store" />
                    </div>
                </div>
                <div className='mr-10 md:mr-0 ' data-aos="fade-left" data-aos-duration='1500'>
                    <img src={Mockup} alt="Mockup" className='w-[450px]' />
                </div>
            </div>
        </div><div>
                <div className='flex flex-col md:flex-row justify-center py-3 gap-4 bg-[#0360D9] items-center' data-aos="fade-up" data-aos-duration='1000'>
                    <div className='text-[#fff] text-center items-center '>
                        <h1 className='text-[32px] md:text-[48px] font-bold'>24/7</h1>
                        <p>Online Support</p>
                    </div>
                    <div className='h-[2px] w-[79px] bg-[#Fff]'></div>
                    <div className='text-[#fff] text-center items-center '>
                        <h1 className='text-[32px] md:text-[48px] font-bold'>100+</h1>
                        <p>Money Changers</p>
                    </div>
                    <div className='h-[2px] w-[79px] bg-[#Fff]'></div>
                    <div className='text-[#fff] text-center items-center '>
                        <h1 className='text-[32px] md:text-[48px] font-bold'>100+</h1>
                        <p>Money Changers</p>
                    </div>
                </div>
            </div></>
    );
};

export default Header;
