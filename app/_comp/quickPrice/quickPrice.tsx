import Airplan from '@/components/icon/airplan'
import SpeedSvg from '@/components/icon/speed'
import Link from 'next/link'
import React from 'react'


const QuickPrice = () => {
    const priceList = [
        {
            name: 'Hourly Rate',
            price: 60,
            icon: <SpeedSvg className="w-10 h-10" />,
            link: "hourly-rate"
        },
        {
            name: "LGA AIRPORT",
            price: 80,
            icon: <Airplan className="w-10 h-10" />,
            link: "lga-airport"
        },
        {
            name: "JFK AIRPORT",
            price: 90,
            icon: <Airplan className="w-10 h-10" />,
            link: "jfk-airport"
        },
        {
            name: "EWR AIRPORT",
            price: 100,
            icon: <Airplan className="w-10 h-10" />,
            link: "ewr-airport"
        }

    ]
  return (
    <div className='container mx-auto md:p-0 p-4'>
        <h4 className={`text-3xl font-semibold text-center taviraj-medium`}>Quick Price Check</h4>

        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-center mt-10 md:mt-12'>
            {priceList.map((item, index) => (
                <Link key={index} href={`/${item.link}`}>
                <div className="flex md:items-center flex-col md:flex-row w-full gap-4 bg-[#DA9100] p-4 md:p-6 text-white rounded-sm hover:bg-black trnsition-all duration-500 ease-in-out" >
                    <div className="">
                        {item.icon}
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5 ">
                       <h4 className='font-semibold text-2xl taviraj-medium'> {item.name}</h4>
                       <p className='text-xl taviraj-medium'>{`Start from $${item.price}.00`}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
        <div className='mt-12 flex flex-col gap-7 md:gap-10'>
            <h4 className='text-3xl md:text-5xl  text-center epilogue-medium uppercase'>RPC LIMO NATIONWIDE</h4>
            <h4 className='text-xl md:text-3xl  text-center mulish'>Headquarters in New York serving multiple cities.</h4>
            <div className='flex gap-3 items-center justify-center'>
                <a href='#' className='text-xl bg-[#da9100] p-3 text-white hover:bg-black duration-500 transition-all ease-in-out'>View Price & Book A Ride</a>
                <a href='tel:1-833-711-4606' className='text-xl bg-[#da9100] p-3 text-white hover:bg-black duration-500 transition-all ease-in-out'>Toll free: 1-833 711 4606</a>
            </div>
        </div>
    </div>
  )
}

export default QuickPrice