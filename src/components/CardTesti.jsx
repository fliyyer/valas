import React from 'react'

const CardTesti = (props) => {
    return (
        <div className='w-[389px] flex-row h-[264px] p-[21px] rounded-[15px] border border-[#505050]'>
            <h1 className='text-[#505050] text-sm'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.t amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..</h1>
            <div className='mt-7 flex items-center gap-3'>
                <img src={props.Img} alt="" />
                <div className='text-lg text-[#505050]'>
                    <h1 className='font-bold'>{props.Nama}</h1>
                    <h1 className='font-medium'>Traveler</h1>
                </div>
            </div>
        </div>
    )
}

export default CardTesti
