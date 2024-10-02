import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>Let's get muscles with</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>training <span className='text-blue-400'>Consistency</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I will stay focused on my <span className='text-blue-400 font-medium'>goals</span> and will not falter on path to <span className='text-blue-400 font-medium'>greatness</span>!</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}