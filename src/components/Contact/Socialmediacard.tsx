import Image from 'next/image'
import React from 'react'

interface SocialmediaProps{
    image : string ,
    link : string ,
    name : string
}

const Socialmediacard:React.FC<SocialmediaProps> = ({ image , link , name }) => {
  return (
    <a href={link} target='_blank' className=' overflow-hidden rounded flex gap-2 items-center mw-full h-12 bg-green-100 dark:bg-gray-900'>
    <div className='h-12 w-12 relative'>
        <Image alt={name} src={image}
            fill={true} style={{ objectFit: "cover" }}
            priority
        />
    </div>
    <div className='px-4'>
         <span className='text-xs text-gray-400'>{name}</span>
    </div>
</a>
  )
}

export default Socialmediacard