import React, { useState, useEffect, useContext } from 'react'
import Mockup from '../../assets/mockup ip.png'
import Mockup4 from '../../assets/mockup4.png'
import Mockup2 from '../../assets/mockup2.png'
import Mockup1 from '../../assets/mockup1.png'
import AOS from 'aos'
import { LanguageContext } from '../../utils/LanguageContext';

const Content = () => {
    const { t } = useContext(LanguageContext);
    const [activeStep, setActiveStep] = useState(1);
    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        AOS.init()
    },)

    return (
        <div className='container mx-auto' data-aos='fade-up' data-aos-duration='1500' id='services'>
            <h1 className='text-[#004387] text-2xl text-center font-bold'>{t('INTIP CARA MUDAH TRANSAKSI VALAST')}</h1>
            <div className='flex flex-col items-center gap-[144px] justify-center mt-8 md:flex-row md:justify-center'>
                <div className='image-transition'>
                    {activeStep === 1 ? (
                        <img src={Mockup1} alt='Mockup 1' className={activeStep === 1 ? 'active w-72' : ''} />
                    ) : activeStep === 2 ? (
                        <img src={Mockup2} alt='Mockup 2' className={activeStep === 2 ? 'active w-72' : ''} />
                    ) : activeStep === 3 ? (
                        <img src={Mockup} alt='Mockup 3' className={activeStep === 3 ? 'active ' : ''} />
                    ) : (
                        <img src={Mockup4} alt='Mockup 4' className={activeStep === 4 ? 'active w-72' : ''} />
                    )}
                </div>
                <div className='space-y-4'>
                    <div
                        className={`flex border-2 cursor-pointer w-[350px] mx-auto  md:w-[570px] border-[#0360D9] rounded-[15px] p-7 gap-4 ${activeStep === 1 ? 'border-[#0A4BDB]' : ''}`}
                        onClick={() => handleStepClick(1)}
                    >
                        <h1 className='text-2xl text-[#0A4BDB] font-bold'>1.</h1>
                        <div>
                            <p className={`text-base md:text-lg font-bold ${activeStep === 1 ? 'text-[#000]' : 'text-[#505050]'}`}>{t('Buat akun Valast')}</p>
                        </div>
                    </div>
                    <div
                        className={`flex border-2 cursor-pointer w-[350px] mx-auto  md:w-[570px] border-[#0360D9] rounded-[15px] p-7 gap-4 ${activeStep === 2 ? 'border-[#0A4BDB]' : ''}`}
                        onClick={() => handleStepClick(2)}
                    >
                        <h1 className='text-2xl text-[#0A4BDB] font-bold'>2.</h1>
                        <div>
                            <p className={`text-base md:text-lg font-bold ${activeStep === 2 ? 'text-[#000] text-[20px]' : 'text-[#505050]'}`}>{t('Masukkan nominal transaksi dan pilih Money Changer')}</p>
                        </div>
                    </div>
                    <div className={`flex border-2 cursor-pointer w-[350px] mx-auto  md:w-[570px] border-[#0360D9] rounded-[15px] p-7 gap-4 ${activeStep === 2 ? 'border-[#0A4BDB]' : ''}`}
                        onClick={() => handleStepClick(3)}>
                        <h1 className='text-2xl text-[#0A4BDB] font-bold'>3.</h1>
                        <div>
                            <p className={`text-base md:text-lg font-bold ${activeStep === 3 ? 'text-[#000] text-[20px]' : 'text-[#505050]'}`}>{t('Pilih ambil di Money Changer atau delivery')}</p>
                        </div>
                    </div>
                    <div className={`flex border-2 cursor-pointer w-[350px] mx-auto  md:w-[570px] border-[#0360D9] rounded-[15px] p-7 gap-4 ${activeStep === 2 ? 'border-[#0A4BDB]' : ''}`}
                        onClick={() => handleStepClick(4)}>
                        <h1 className='text-2xl text-[#0A4BDB] font-bold'>4.</h1>
                        <div>
                            <p className={`text-base md:text-lg font-bold ${activeStep === 4 ? 'text-[#000] text-[20px]' : 'text-[#505050]'}`}>{t('Lakukan pembayaran, dan transaksi selesai')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Content
