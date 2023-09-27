import React from 'react'
import Logo from '../assets/logof.png'
import Btn from '../assets/btn ps.png'
import { BsCheck, BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='py-6 md:py-[43px] px-4 md:px-[113px]'>
            <img src={Logo} alt="Logo" className="mb-4" />
            <div className='text-[#fff] flex flex-col md:flex-row md:justify-between'>
                <div className='text-sm md:mt-[52px]'>
                    <h1 className='mb-[20px] md:mb-[50px]'>Connect with us:</h1>
                    <p className='mb-6 md:mb-10'>Download our app:</p>
                    <img src={Btn} alt="Download Button" />
                </div>
                <div className='mt-6 md:mt-0'>
                    <h1 className='text-lg font-semibold mb-[18px]'>Company</h1>
                    <ul className='space-y-[10px] text-sm'>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsCheck className='text-2xl' /> About Us</li>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsCheck className='text-2xl' /> Available Countries</li>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsCheck className='text-2xl' /> Blog</li>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsCheck className='text-2xl' /> FAQ</li>
                    </ul>
                </div>
                <div className='mt-6 md:mt-0'>
                    <h1 className='text-lg font-semibold mb-[18px]'>Join Us</h1>
                    <ul className='space-y-[10px] text-sm'>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsCheck className='text-2xl' /> Affiliate</li>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsCheck className='text-2xl' /> Careers </li>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsCheck className='text-2xl' /> Partnership</li>
                    </ul>
                </div>
                <div className='mt-6 md:mt-0'>
                    <h1 className='text-lg font-semibold mb-[18px]'>Help</h1>
                    <ul className='space-y-[10px] text-sm'>
                        <li className='font-semibold'>Contact us:</li>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsWhatsapp className='text-sm' />+62 854 - 323 - 4421</li>
                        <li className='flex items-center leading-5 gap-[13.5px]'><BsTelephone className='text-sm' />cs@valast.com</li>
                        <li className='font-semibold'>Operational hours:</li>
                        <li className='flex items-center leading-5 gap-[13.5px]'>Mon-Sun: 09.00 - 17.00 (GMT+7)</li>
                        <li className='font-semibold'>Address:</li>
                        <li className='flex items-center leading-5 gap-[13.5px]'><FaLocationDot className='text-sm' />Jl. Asia 23/23, Medan, Indonesia</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
