import React from 'react'
import Contactsform from './contactsform'
import SocialMedia from './SocialMedia'

const Contacts = () => {
    return (
        <section className='w-full h-fit px-4 py-8 space-y-4' id='contacts'>
            <h6 className='text-gray-600 w-full text-center capitalize my-8'>lets talk</h6>
            <div className='flex gap-4 items-center justify-center flex-wrap'>
                <Contactsform />
                <SocialMedia />
            </div>
            
        </section>
    )
}

export default Contacts