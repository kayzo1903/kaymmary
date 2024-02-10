import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoReload } from "react-icons/io5";

interface messageProp {
    message: boolean ,
    name : string
}

const Successfullmsg = ({ message , name} : messageProp) => {
    return (
        <div className='w-96 flex justify-center items-center h-64 flex-col bg-green-100 dark:bg-gray-900 gap-4'>
            <div className='space-y-4'>
                {
                    message ?
                        <h6 className='text sm capitalize text-center'>Thanks {name} , Your message was <br /> successfull sent</h6> :
                        <h6 className='text sm capitalize text-center'> oops! sory {name} <br />something went wrong</h6>
                }
            </div>
            <div className='space-y-4'>
                {
                    message ? <button className='text-2xl'>
                        <IoMdCheckmarkCircleOutline />
                    </button> :
                        <button className='text-2xl'>
                            <IoReload />
                        </button>
                }
            </div>
        </div>
    )
}

export default Successfullmsg