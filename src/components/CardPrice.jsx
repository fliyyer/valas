import React from 'react';

const CardPrice = (props) => {
    return (
        <div className={`w-full md:w-[386px] text-[#fff] h-[auto] md:h-[542px] items-center rounded-[26px] py-[46px] px-11 ${props.color}`}>
            <h1 className='text-center uppercase text-2xl md:text-3xl font-semibold'>{props.title}</h1>
            <h1 className='text-center text-2xl md:text-3xl'>{props.price}</h1>
            <ul className='list-disc mt-[24px] md:mt-[48px] space-y-5 leading-[20px]'>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
            </ul>
            <div className='flex justify-center mt-[24px] md:mt-[65px]'>
                <button className='bg-[#fff] px-[15px] text-base text-[#0A4BDB] rounded-[5px] py-2'>Buy Now</button>
            </div>
        </div>
    );
};

export default CardPrice;
