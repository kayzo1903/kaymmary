import React from 'react'
import figma from '../../../public/figma.png'
import reactjs from '../../../public/reactjs.png'
import nodejs from '../../../public/nodejs.png'

import Image from 'next/image'
const Service = () => {
    return (
        <section className='w-full h-fit px-4 pb-8' id='service'>
            <h6 className='text-gray-600 w-full text-center capitalize'>service</h6>
            <div className='w-full flex flex-wrap items-center gap-4 justify-center'>
                <div className='space-y-4 max-w-sm'>
                    <div className='flex gap-2 items-center w-52'>
                        <div className='w-28 h-16 overflow-hidden relative'>
                            <Image alt='figma' src={figma} fill={true} priority
                                style={{ objectFit: 'cover' }} />
                        </div>
                            <p className='text-xs text-gray-400'>Design cool applications by figma</p>
                    </div>
                    <div className='flex gap-2 items-center w-52'>
                        <div className='w-28 h-16 relative overflow-hidden'>
                            <Image alt='figma' src={reactjs} fill={true} priority
                                style={{ objectFit: 'cover' }} />
                        </div>
                            <p className='text-xs text-gray-400'>Design cool front-end by latest technology</p>
                    </div>
                    <div className='flex gap-2 items-center w-52'>
                        <div className='w-28 h-16 relative overflow-hidden'>
                            <Image alt='figma' src={nodejs} fill={true} priority
                                style={{ objectFit: 'cover' }} />
                        </div>
                            <p className='text-xs text-gray-400'>Design cool Back-end by latest technology</p>
                    </div>
                </div>
                <div className='space-y-2 max-w-md'>
                    <h3 className='text-xl'>My Awesome service</h3>
                    <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
                    Vero enim, nam id maiores consequuntur minus atque </p>
                    <div className='flex flex-nowrap gap-4'>
                        <div>
                           <h3>15+</h3>
                           <p className='text-sm text-gray-500'>Projects</p>
                        </div>
                        <div>
                           <h3>3+</h3>
                           <p className='text-sm text-gray-500'>Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service