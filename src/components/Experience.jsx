import React from 'react'
import Foto1 from '../assets/foto1.png'
import Foto2 from '../assets/foto2.png'
import Foto3 from '../assets/foto3.png'
import Foto4 from '../assets/foto4.png'

const Experience = () => {
    return (
        <div className='container max-w-7xl py-14 mx-auto'>
            <div className='flex justify-center items-center gap-20'>
                <div className='w-1/2'>
                    <p className='text-[#008AFF] text-lg font-semibold uppercase'>Why Choose Bestkit?</p>
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
                    <div className='font-poppins flex gap-[41px]'>
                        <div className=''>
                            <div className='w-[45px] flex justify-center items-center text-2xl text-[#fff] font-semibold h-[45px] rounded-full bg-[#008AFF]'>2</div>
                            <div className='h-[120px] mx-auto mt-[10px] w-[4px] bg-[#008AFF]'></div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-[#222D39]'>Increase Your Company Growth</h1>
                            <p className='text-lg text-[#8492A7] font-medium mt-5 leading-[28px]'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build.</p>
                        </div>
                    </div>
                    <div className='font-poppins flex gap-[41px]'>
                        <div className=''>
                            <div className='w-[45px] flex justify-center items-center text-2xl text-[#fff] font-semibold h-[45px] rounded-full bg-[#008AFF]'>3</div>
                            <div className='h-[120px] mx-auto mt-[10px] w-[4px] bg-[#008AFF]'></div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-[#222D39]'>24/7 Strong Customer Support</h1>
                            <p className='text-lg text-[#8492A7] font-medium mt-5 leading-[28px]'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build.</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex items-baseline gap-5'>
                        <img src={Foto1} className='h-[257px] rounded-md w-[385px]' alt="Foto" />
                        <img src={Foto2} className='h-[386px] rounded-md w-[500px]' alt="Foto" />
                    </div>
                    <div className='flex items-start ml-20 mt-[5px] gap-5'>
                        <img src={Foto3} className='h-[220px] rounded-md w-[220px]' alt="Foto" />
                        <img src={Foto4} className='h-[300px] rounded-md w-[280px]' alt="Foto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
