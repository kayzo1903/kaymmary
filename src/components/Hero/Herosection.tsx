import Image from 'next/image'
import React from 'react'
import kay from '../../../public/kay.jpg'
import Link from 'next/link'

const Herosection = () => {
    return (
        <section className='px-4 w-full !h-fit py-8 flex justify-center items-center'>
            <div className='max-w-sm gap-2 flex flex-col'>
                <div className='h-80 w-[240px] relative bg-white rounded-t-full mx-auto overflow-hidden'>
                    <Image alt='kayzommary'
                        src={kay}
                        fill={true}
                        style={{ objectFit: "cover" }}
                        priority />
                </div>
                <div className='max-w-80 mx-auto text-center space-y-4'>
                    <h3 className='text-sm sm:text-base font-mono'>hi am kay ✌😎</h3>
                    <h6 className='text-xl sm:text-2xl leading-relaxed text-gray-600 dark:text-gray-300'>Experienced Full-stack web developer</h6>
                    <p className='text-xs text-gray-400'>Transforming ideas into interactive digital solutions.</p>
                </div>
                <Link href={'#contacts'} className='text-center px-4 mx-auto py-2 text-gray-900 text-sm bg-green-300 border-2 border-green-300 hover:bg-transparent w-60 rounded-2xl capitalize'>
                    hire me
                </Link>
            </div>
        </section>
    )
}

export default Herosection