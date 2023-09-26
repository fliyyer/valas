import React from 'react'
import CardTesti from './CardTesti'
import Testi1 from '../assets/testi1.png'
import Testi2 from '../assets/testi2.png'
import Testi3 from '../assets/testi3.png'
import Testi4 from '../assets/testi4.png'
import Btn from '../assets/btn ps.png'

const Testi = () => {
    return (
        <div className='container py-[83px] px-2 mx-auto'>
            <div className='flex flex-col md:flex-row justify-center space-y-6 md:space-x-14'>
                <CardTesti Img={Testi1} Nama='Ary Hermawan' />
                <CardTesti Img={Testi2} Nama='Sri Rakhelna' />
                <CardTesti Img={Testi3} Nama='Indah Puji Astuti' />
            </div>
            <div className='bg-bluess max-w-7xl mt-[91px] py-3 mx-auto flex flex-col-reverse md:flex-row rounded-[26px] px-4 md:px-20 items-center'>
                <div className="md:w-1/2 md:ml-10">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left text-white'>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.</h1>
                    <p className='text-base leading-5 mt-3 md:mt-[15px] text-center md:text-left text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <button className='px-4 md:px-6 py-2 mt-[48px] bg-white text-[#077BFF] rounded-md'>Request Demo</button>
                    <img src={Btn} className='mt-5 md:mt-16' alt="" />
                </div>
                <img src={Testi4} alt="" className="w-full md:w-1/2" />
            </div>
        </div>
    )
}

export default Testi
