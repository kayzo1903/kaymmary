'use client'
import React, { useState } from 'react';
import Successfullmsg from './Successfullmsg';

const Contactsform = () => {
    const [clientInfo, setClientInfo] = useState({ name: "", email: "", message: "" });
    const [success, setSuccessfull] = useState(false);
    const [respMsg, setrespMsg] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setClientInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { name, email, message } = clientInfo
        
        
        try {
            await fetch('/api/nodemailer  ',{
                method : 'POST' ,
                body : JSON.stringify({name , email , message}),
                headers :{
                    "Content-Type" : "application/json" ,
                }
            })
           
        } catch (error) {
             console.log(error);          
        }
    };
    // Hide the success message after 3000 milliseconds (3 seconds)

    return (
        <div className='w-96'>
            {
                loading ?
                    <div className='w-96 h-40 space-y-4 relative flex justify-center items-center'>
                        <h3>Loading.....</h3>
                    </div> :
                    <div className='w-96 space-y-4 relative'>
                        {respMsg && <Successfullmsg message={success} name={clientInfo.name} />}
                        <form className='w-full flex flex-col gap-2 px-2 py-2' onSubmit={handleSubmit}>
                            <input
                                required
                                onChange={handleChange}
                                value={clientInfo.name}
                                type="text"
                                className='w-full text-sm py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-[1px] border-gray-900 dark:border-gray-100 bg-transparent placeholder:text-xs text-gray-900 dark:text-gray-50'
                                name='name'
                                id='username'
                                placeholder='Full name'
                            />
                            <input
                                required
                                onChange={handleChange}
                                value={clientInfo.email}
                                type='email'
                                className='text-sm py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-[1px] border-gray-900 dark:border-gray-100 bg-transparent placeholder:text-xs text-gray-900 dark:text-gray-50'
                                name='email'
                                id='useremail'
                                placeholder='Your@email.com'
                            />
                            <textarea
                                required
                                onChange={handleChange}
                                value={clientInfo.message}
                                className='text-sm py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-[1px] border-gray-900 dark:border-gray-100 bg-transparent placeholder:text-xs text-gray-900 dark:text-gray-50'
                                name="message"
                                id="usermessage"
                                cols={10}
                                rows={3}
                                placeholder='message'
                            ></textarea>
                            <button type='submit' className='text-center px-4 mx-auto py-2 text-gray-900 hover:dark:text-gray-100 text-sm bg-green-300 border-2 border-green-300 hover:bg-transparent w-full rounded-2xl capitalize'>
                                send message
                            </button>
                        </form>
                    </div>}
        </div>
    );
}

export default Contactsform;
