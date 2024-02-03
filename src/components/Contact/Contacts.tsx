import React from 'react'

const Contacts = () => {
    return (
        <section className='w-full h-fit px-4 py-8 space-y-4' id='contacts'>
            <h6 className='text-gray-600 w-full text-center capitalize my-8'>lets talk</h6>
            <div className='max-w-sm space-y-4'>
                <form className='max-w-sm flex flex-col gap-2 px-2 py-2'>
                    <input type="text" className='text-sm py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-[1px] border-gray-900 dark:border-gray-100 bg-transparent placeholder:text-xs text-gray-900 dark:text-gray-50' name='username' id='username' placeholder='Full name' />
                    <input type='email' className='text-sm py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-[1px] border-gray-900 dark:border-gray-100 bg-transparent placeholder:text-xs text-gray-900 dark:text-gray-50' name='useremail' id='useremail' placeholder='Your@email.com' />
                    <textarea className='text-sm py-1 px-2 placeholder:dark:text-white placeholder:text-gray-950 focus:outline-none border-b-[1px] border-gray-900 dark:border-gray-100 bg-transparent placeholder:text-xs text-gray-900 dark:text-gray-50' name="usermessage" id="usermessage" cols={10} rows={3} placeholder='message'></textarea>
                </form>
                <button className='text-center px-4 mx-auto py-2 text-gray-900 hover:dark:text-gray-100 text-sm bg-green-300 border-2 border-green-300 hover:bg-transparent w-full rounded-2xl capitalize'>
                    send message
                </button>
            </div>
        </section>
    )
}

export default Contacts