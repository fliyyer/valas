import React, { useEffect } from 'react';
import CardPrice from './CardPrice';
import Klien1 from '../assets/klien1.png';
import Klien2 from '../assets/klien2.png';
import Klien3 from '../assets/klien3.png';
import Klien4 from '../assets/klien4.png';
import Klien5 from '../assets/klien5.png';
import AOS from 'aos'
const Price = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <><div className='mx-auto container px-4 md:px-0 pb-20' data-aos='fade-up' data-aos-duration='2000' id='price'>
            <h1 className='text-center text-[#004387] text-2xl md:text-3xl font-bold'>PRICE</h1>
            <div className='flex flex-col md:flex-row justify-center md:justify-center mt-8 gap-[27px]'>
                <CardPrice title='Pro' price='500K/Month' color='bg-[#19C3F4]' data-aos='fade-up' data-aos-duration='2000' />
                <CardPrice title='Business' price='1000K/Month' color='bg-[#0A4BDB]' data-aos='fade-up' data-aos-duration='2000' />
                <CardPrice title='Enterprise' price='1500K/Month' color='bg-[#0D418C]' data-aos='fade-up' data-aos-duration='2000' />
            </div>
        </div><div className='flex flex-col items-center md:h-[193px] bg-[#F6FBFF] mb-12 gap-4 mt-6 md:flex-row md:justify-center md:gap-[90px] md:mt-[109px]' >
                <img src={Klien1} alt="Klient" data-aos='fade-up' data-aos-duration='2000' />
                <img src={Klien2} alt="Klient" data-aos='fade-up' data-aos-duration='2000' />
                <img src={Klien3} alt="Klient" data-aos='fade-up' data-aos-duration='2000' />
                <img src={Klien4} alt="Klient" data-aos='fade-up' data-aos-duration='2000' />
                <img src={Klien5} alt="Klient" data-aos='fade-up' data-aos-duration='2000' />
            </div></>
    );
};

export default Price;
