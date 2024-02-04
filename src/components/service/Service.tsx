import React from 'react'
import figma from '../../../public/serviceimage/figma.png'
import reactjs from '../../../public/serviceimage/reactjs.png'
import nodejs from '../../../public/serviceimage/nodejs.png'

import Socialmediacard from '../Contact/Socialmediacard'
import github from "../../../public/socialmedia/github-svgrepo-com.svg";
import linkedin from '../../../public/socialmedia/linkedin-color-svgrepo-com.svg'


const Service = () => {
    return (
        <section className='w-full h-fit px-4 pb-8' id='service'>
            <h6 className='text-gray-600 w-full text-center capitalize my-8'>service</h6>
            <div className='w-full flex flex-wrap items-center gap-4 justify-center'>
                <div className='space-y-2 w-96 sm:max-w-md'>
                    <h3 className='text-xl'>My Awesome service</h3>
                    <p className='text-gray-600 text-sm'>Experienced Full-Stack Developer<br />
                        Passionate about crafting seamless web experiences.<br/>
                        JavaScript | TypeScript | React | Express | MongoDB</p>
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
                <div className='w-96 space-y-4'>
                    <Socialmediacard image={github} link='https://github.com/kayzo1903' name='github/kaymmary'/>
                    <Socialmediacard image={linkedin} link='https://www.linkedin.com/in/kay-mmari-b03496100/' name='Linkedin/kaymmari'/>
                </div>
            </div>
        </section>
    )
}

export default Service