import React from 'react';
import CardPrice from './CardPrice';

const Price = () => {
    return (
        <div className='mx-auto container px-4 pb-20'>
            <h1 className='text-center text-[#004387] text-2xl md:text-3xl font-bold'>PRICE</h1>
            <div className='flex flex-col md:flex-row justify-center md:justify-center mt-8 gap-[27px]'>
                <CardPrice title='Pro' price='500K/Month' color='bg-[#19C3F4]' />
                <CardPrice title='Business' price='1000K/Month' color='bg-[#0A4BDB]' />
                <CardPrice title='Enterprise' price='1500K/Month' color='bg-[#0D418C]' />
            </div>
        </div>
    );
};

export default Price;
