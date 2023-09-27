import React, { useEffect } from 'react'
import Web from '../assets/web portal.png'
import AOS from 'aos'

const Notification = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <div className='container mx-auto px-3 py-8 md:py-24 my-8 md:my-24'>
            <div className='flex flex-col sm:flex-row justify-center items-center md:px-32'>
                <div className='w-full sm:w-1/2 md:w-1/2' data-aos='fade-right' data-aos-duration='2500'>
                    <div className='flex items-center gap-[15px]'>
                        <div className='bg-[#0360D9] w-[48px] h-[48px] flex justify-center p-[12px] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14 21H9.99999M18 8C18 6.4087 17.3678 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88257 2.63214 7.75735 3.75736C6.63213 4.88258 5.99999 6.4087 5.99999 8C5.99999 11.0902 5.22046 13.206 4.34965 14.6054C3.61512 15.7859 3.24785 16.3761 3.26131 16.5408C3.27622 16.7231 3.31485 16.7926 3.46176 16.9016C3.59445 17 4.19258 17 5.38884 17H18.6111C19.8074 17 20.4055 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></div>
                        <h1 className='font-poppins text-2xl md:text-[28px] font-extrabold'>Clever Notifications</h1>
                    </div>
                    <p className='font-poppins text-[#000] text-[20px] text-center md:text-justify mt-4 sm:mt-8 text-lg sm:text-base leading-[24px] sm:leading-[28px] font-medium opacity-50'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                </div>
                <img src={Web} className='' alt="" data-aos='fade-left' data-aos-duration='2500' />
            </div>
            <div className='flex flex-col-reverse sm:flex-row px-3 justify-center items-center mt-8 sm:mt-32 md:px-32'>
                <img src={Web} className='' alt="" data-aos='fade-right' data-aos-duration='2500' />
                <div className='w-full md:w-1/2' data-aos='fade-left' data-aos-duration='2500'>
                    <div className='flex items-center gap-[15px]'>
                        <div className='bg-[#0360D9] w-[48px] h-[48px] flex justify-center p-[12px] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></div>
                        <h1 className='font-poppins text-2xl md:text-[28px] font-extrabold'>Fully Customizable</h1>
                    </div>
                    <p className='font-poppins text-[#000] text-[20px] mt-4 text-center md:text-justify sm:mt-8 text-lg sm:text-base leading-[24px] sm:leading-[28px] font-medium opacity-50'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                </div>
            </div>
        </div>
    )
}

export default Notification
