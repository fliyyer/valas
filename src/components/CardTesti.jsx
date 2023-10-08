import React from 'react'

const CardTesti = ({ desc, Img, Nama, pos }) => {
    return (
        <div className=' flex-row p-[21px] rounded-[15px] border w-[389px] h-[264px] border-[#505050]'>
            <h1 className='text-[#505050] text-sm'>{desc}</h1>
            <div className='mt-12 flex items-center gap-3'>
                <img src={Img} alt="" />
                <div className='text-lg text-[#505050]'>
                    <h1 className='font-bold'>{Nama}</h1>
                    <h1 className='font-medium'>{pos}</h1>
                </div>
            </div>
        </div>
    )
}

export default CardTesti
