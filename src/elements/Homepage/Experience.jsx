import React, { useEffect, useContext } from 'react'
import expe from '../../assets/expe.png'
import Aos from 'aos'
import { LanguageContext } from '../../utils/LanguageContext'

const Experience = () => {
    const { t } = useContext(LanguageContext);

    useEffect(() => {
        Aos.init()
    })
    return (
        <div className='container max-w-5xl 2xl:max-w-7xl px-5 md:px-0 py-14 mx-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className='w-full md:w-1/2' data-aos='fade-right' data-aos-duration='2500'>
                    <p className='text-[#008AFF] text-sm md:text-lg font-semibold uppercase'>{t('MENGAPA HARUS TRANSAKSI MENGGUNAKAN VALAST?')}</p>
                    <h1 className='text-[36px] font-semibold leading-[54px] mb-[58px]'>{t('Kami Memberikan Pengalaman Liburan Lebih Nyaman')}</h1>
                    <div className='font-poppins flex gap-[41px]'>
                        <div className=''>
                            <div className='w-[45px] flex justify-center items-center text-2xl text-[#fff] font-semibold h-[45px] rounded-full bg-[#008AFF]'>1</div>
                            <div className='h-[120px] mx-auto mt-[10px] w-[4px] bg-[#008AFF]'></div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-[#222D39]'>{t('Transaksi Mudah Tanpa Batas')}</h1>
                            <p className='text-lg text-[#8492A7] font-medium mt-5 leading-[28px]'>{t('Valast memberikan kemudahan bertransaksi dari mana saja dan kapan saja tanpa batas waktu')}</p>
                        </div>
                    </div>
                    <div className='font-poppins flex mt-3 gap-[41px]'>
                        <div className=''>
                            <div className='w-[45px] flex justify-center items-center text-2xl text-[#fff] font-semibold h-[45px] rounded-full bg-[#008AFF]'>2</div>
                            <div className='h-[120px] mx-auto mt-[10px] w-[4px] bg-[#008AFF]'></div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-[#222D39]'>{t('Transaksi Cepat dan Aman')}</h1>
                            <p className='text-lg text-[#8492A7] font-medium mt-5 leading-[28px]'>{t('Uang masuk ke rekening hanya dalam hitungan menit')}</p>
                        </div>
                    </div>
                    <div className='font-poppins flex mt-3 gap-[41px]'>
                        <div className=''>
                            <div className='w-[45px] flex justify-center items-center text-2xl text-[#fff] font-semibold h-[45px] rounded-full bg-[#008AFF]'>3</div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-[#222D39]'>{t('Customer Service 24 Jam')}</h1>
                            <p className='text-lg text-[#8492A7] font-medium mt-5 leading-[28px]'>{t('Ada kendala saat transaksi? Customer Service kami tersedia 24 jam untuk melayani kamu!')}</p>
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
