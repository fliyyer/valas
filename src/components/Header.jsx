import React, { useEffect } from 'react'
import Btnps from '../assets/btn ps.png'
import Mockup from '../assets/header.png'
import AOS from 'aos'
const Header = () => {
    useEffect(() => {
        AOS.init()
    })

    return (
        <><div className='container mx-auto' id='home'>
            <div className='flex flex-col-reverse  py-32 items-center justify-center md:flex-row' >
                <div className='w-full md:w-1/2 text-center md:text-left' data-aos="fade-right" data-aos-duration='1500'>
                    <h1 className='text-[24px] md:text-[40px] font-bold text-[#0A4BDB]'>
                        Lorem ipsum dolor <span className='text-[#14C3F2]'>sit amet</span>, consectetur adipiscing elit.
                    </h1>
                    <p className='text-base text-[#0A4BDB] leading-[24px] md:leading-[20px] md:w-[453px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <img className='mt-6 md:mt-12 mx-auto md:mx-0' src={Btnps} alt="Ps" />
                </div>
                <div className='mr-10 md:mr-0' data-aos="fade-left" data-aos-duration='1500'>
                    <img src={Mockup} alt="Mockup" />
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
