import React, { useEffect } from 'react'
import CardTesti from '../../components/CardTesti'
import Testi1 from '../../assets/testi1.png'
import Testi2 from '../../assets/testi2.png'
import Testi3 from '../../assets/testi3.png'
import Testi4 from '../../assets/mockup CTA.png'
import Btn from '../../assets/btn ps.png'
import AOS from 'aos'

const Testi = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <div className='container py-[83px] px-2 md:max-w-7xl mx-auto' data-aos='fade-up' data-aos-duration='2500' id='testi'>
            <div className='flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-14'>
                <CardTesti Img={Testi1} Nama='Ary Hermawan' data-aos='fade-up' data-aos-duration='2500' />
                <CardTesti Img={Testi2} Nama='Sri Rakhelna' data-aos='fade-up' data-aos-duration='2500' />
                <CardTesti Img={Testi3} Nama='Indah Puji Astuti' data-aos='fade-up' data-aos-duration='2500' />
            </div>
            <div className='bg-bluess max-w-7xl mt-[91px] pb-3 md:pb-0 pt-3 mx-auto flex flex-col-reverse md:flex-row rounded-[26px] px-4 md:px-20 items-center'>
                <div className="md:w-1/2 md:ml-10">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left text-white'>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.</h1>
                    <p className='text-base leading-5 mt-3 md:mt-[15px] text-center md:text-left text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <div className='ml-24 md:ml-0'>
                        <button className='px-4 md:px-6 py-2 mt-[48px] bg-white text-[#077BFF] rounded-md'>Request Demo</button>
                    </div>
                    <img src={Btn} className='mt-5 md:mt-16' alt="" />
                </div>
                <img src={Testi4} alt="" className="w-full md:w-1/2" />
            </div>
        </div>
    )
}

export default Testi
