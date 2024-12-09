'use client';

import React from 'react'
import Slider from './slider';

const SatisfiedClient = () => {
  return (
    <div className='container mx-auto md:p-0 p-4 mt-12'>
        <section className='flex flex-col gap-3'>
        <h4 className='text-3xl md:text-4xl taviraj-medium'>Our Satisfied Clients</h4>
        <p className='text-lg md:text-xl'>At RPC Limo, our success is measured by the satisfaction of our clients. We take immense pride in building lasting relationships and delivering exceptional service that exceeds expectations. Here&apos;s what some of our satisfied clients have to say about their experiences</p>
        </section>

        <section>
            <Slider />
        </section>
    </div>
  )
}

export default SatisfiedClient