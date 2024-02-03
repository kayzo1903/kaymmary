import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='w-full py-2'>
            <div className='h-[1px] w-full bg-slate-500'>
            </div>
            <div>
                <p className='w-full text-center text-gray-400 text-sm'>
                    ©{year} KayInc all right reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer