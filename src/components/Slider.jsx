import React, { useState, useEffect } from 'react';
import Hp from '../assets/mockup ip.png';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import AOS from 'aos'

const Slider = () => {
    const images = [Hp, Hp, Hp, Hp, Hp]; // Ganti dengan gambar yang sesuai
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = window.innerWidth <= 768;
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const visibleImages = isMobile ? [images[currentIndex]] : images.slice(currentIndex, currentIndex + 3);
    useEffect(() => {
        AOS.init()
    })
    return (
        <><div className='container mx-auto flex justify-center pt-6 px-14 md:px-0 items-center' data-aos='fade-up' data-aos-duration='3500'>
            <button onClick={prevSlide}>
                <BsFillArrowLeftCircleFill className='w-[35px] text-[#0A4BDB] h-[35px]' />
            </button>
            {visibleImages.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index}`} />
            ))}
            <button onClick={nextSlide}>
                <BsFillArrowRightCircleFill className='w-[35px] h-[35px] text-[#0A4BDB]' />
            </button>
        </div><div className='text-center pb-6 mt-6 px-3 space-y-3' data-aos='fade-up' data-aos-duration='3500'>
                <h1 className='text-2xl font-bold text-[#505050]'>Visual Tour</h1>
                <div className='text-2xl text-[#2E4DFF] font-bold'>consectetur</div>
                <p className='text-sm text-[#505050] leading-5 mx-auto md:w-[450px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div></>
    );
};

export default Slider;
