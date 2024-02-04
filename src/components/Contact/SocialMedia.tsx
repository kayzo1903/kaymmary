import React from 'react'
import facebook from '../../../public/socialmedia/facebook-color-svgrepo-com.svg'
import whatsapp from '../../../public/socialmedia/whatsapp-whats-app-svgrepo-com.svg'
import linkedin from '../../../public/socialmedia/linkedin-color-svgrepo-com.svg'
import twitter from '../../../public/socialmedia/twitter-1-svgrepo-com.svg'
import Socialmediacard from './Socialmediacard'

const SocialMedia = () => {
    return (
        <div className='space-y-4 w-80'>
            <Socialmediacard
                image={facebook}
                link='https://www.facebook.com/profile.php?id=100092691587509'
                name='facebook/kaymmari' />
            <Socialmediacard
                image={twitter}
                link='https://twitter.com/kayzo_mmary'
                name='twitter/kaymmari' />
            <Socialmediacard
                image={whatsapp}
                link='https://wa.me/255653274741'
                name='whatsapp/kaymmari' />
        </div>
    )
}

export default SocialMedia