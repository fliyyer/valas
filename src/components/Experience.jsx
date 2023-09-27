import React, { useEffect } from 'react'
import expe from '../assets/expe.png'
import Aos from 'aos'

const Experience = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div className='container max-w-7xl px-5 md:px-0 py-14 mx-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className='w-full md:w-1/2' data-aos='fade-right' data-aos-duration='2500'>
                    <p className='text-[#008AFF] text-sm md:text-lg font-semibold uppercase'>Why Choose Bestkit?</p>
                    <h1 className='text-[40px] font-semibold leading-[54px] mb-[58px]'>We Have Lots Of Experience For Boost Your Website Traffic</h1>
                    <div className='font-poppins flex gap-[41px]'>
                        <div className=''>
                            <div className='w-[45px] flex justify-center items-center text-2xl text-[#fff] font-semibold h-[45px] rounded-full bg-[#008AFF]'>1</div>
                            <div className='h-[120px] mx-auto mt-[10px] w-[4px] bg-[#008AFF]'></div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-[#222D39]'>Professional Team Members</h1>
                            <p className='text-lg text-[#8492A7] font-medium mt-5 leading-[28px]'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build.</p>
                        </div>
                    </div>
                    <div className='font-poppins flex mt-3 gap-[41px]'>
                        <div className=''>
                            <div className='w-[45px] flex justify-center items-center text-2xl text-[#fff] font-semibold h-[45px] rounded-full bg-[#008AFF]'>2</div>
                            <div className='h-[120px] mx-auto mt-[10px] w-[4px] bg-[#008AFF]'></div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-[#222D39]'>Increase Your Company Growth</h1>
                            <p className='text-lg text-[#8492A7] font-medium mt-5 leading-[28px]'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build.</p>
                        </div>
                    </div>
                    <div className='font-poppins flex mt-3 gap-[41px]'>
                        <div className=''>
                            <div className='w-[45px] flex justify-center items-center text-2xl text-[#fff] font-semibold h-[45px] rounded-full bg-[#008AFF]'>3</div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-[#222D39]'>24/7 Strong Customer Support</h1>
                            <p className='text-lg text-[#8492A7] font-medium mt-5 leading-[28px]'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2' data-aos='fade-left' data-aos-duration='2500'>
                    <img src={expe} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Experience
