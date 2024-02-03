import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='w-full py-4'>
            <div className='h-[0.8px] w-full bg-slate-500'>
            </div>
            <div className='py-4'>
                <p className='w-full text-center text-gray-900 dark:text-gray-100 text-sm'>
                    ©{year} KayInc all right reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer