import React from 'react'

const Contacts = () => {
    return (
        <section className='w-full h-fit px-4 py-8 space-y-4'>
            <h6 className='text-gray-600 w-full text-base text-center capitalize'>lets talk</h6>
            <div className='max-w-sm space-y-4'>
                <form className='max-w-sm flex flex-col gap-2 bg-green-600 px-2 py-2'>
                    <input type="text" className='py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-2 border-white bg-transparent placeholder:text-xs text-gray-50' name='username' id='username' placeholder='Full name' />
                    <input type='email' className='py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-2 border-white bg-transparent placeholder:text-xs text-gray-50' name='useremail' id='useremail' placeholder='Your@email.com' />
                    <textarea className='py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-2 border-white bg-transparent placeholder:text-xs text-gray-50' name="usermessage" id="usermessage" cols={10} rows={3} placeholder='message'></textarea>
                </form>
                <button className='bg-green-600 w-full rounded py-2 border-2 border-green-600 hover:bg-transparent'>
                    send message
                </button>
            </div>
        </section>
    )
}

export default Contacts