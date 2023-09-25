import React from 'react'

const CardAbout = (props) => {
    return (
        <div className='font-poppins text-center w-[359px]'>
            <img src={props.img} className='w-[100px] mx-auto h-[100px]' alt="" />
            <h1 className='text-[#2A3342] text-2xl font-bold leading-[32px] mt-[20px]'>{props.title}</h1>
            <p className='text-[#556987] font-medium'>{props.desc}</p>
        </div>
    )
}

export default CardAbout
