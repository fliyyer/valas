import React from 'react';
import CardPrice from './CardPrice';
import Klien1 from '../assets/klien1.png';
import Klien2 from '../assets/klien2.png';
import Klien3 from '../assets/klien3.png';
import Klien4 from '../assets/klien4.png';
import Klien5 from '../assets/klien5.png';

const Price = () => {
    return (
        <div className='mx-auto container px-4 md:px-0 pb-20'>
            <h1 className='text-center text-[#004387] text-2xl md:text-3xl font-bold'>PRICE</h1>
            <div className='flex flex-col md:flex-row justify-center md:justify-center mt-8 gap-[27px]'>
                <CardPrice title='Pro' price='500K/Month' color='bg-[#19C3F4]' />
                <CardPrice title='Business' price='1000K/Month' color='bg-[#0A4BDB]' />
                <CardPrice title='Enterprise' price='1500K/Month' color='bg-[#0D418C]' />
            </div>
            <div className='flex flex-col items-center bg-[#F6FBFF] gap-4 mt-6 md:flex-row md:justify-center md:gap-[90px] md:mt-[141px]'>
                <img src={Klien1} alt="Klient" />
                <img src={Klien2} alt="Klient" />
                <img src={Klien3} alt="Klient" />
                <img src={Klien4} alt="Klient" />
                <img src={Klien5} alt="Klient" />
            </div>
        </div>
    );
};

export default Price;
