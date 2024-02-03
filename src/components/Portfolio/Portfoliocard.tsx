import React from 'react'
import { portfolioProps } from '@/data/data'
import Image from 'next/image'

interface portfoliocardprops {
    project: portfolioProps
}

const Portfoliocard: React.FC<portfoliocardprops> = ({ project }) => {
    const { image, path, name ,category } = project

    return (
        <a href={path} target='_blank'
            className='space-y-2 bg-gray-100 shadow-md dark:bg-gray-900 w-fit rounded-md overflow-hidden'>
            <div className='w-72 h-44 overflow-hidden relative'>
                <Image
                    alt={name}
                    src={image}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    priority />
            </div>
            <div className='px-2 pb-2'>
                <span className='px-4 py-1 text-sm text-gray-600'>{category}</span>
            </div>
        </a>
    )
}

export default Portfoliocard