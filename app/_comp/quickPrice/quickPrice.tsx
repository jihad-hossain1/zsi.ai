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
    <div className='container mx-auto'>
        <h4 className={`text-3xl font-semibold text-center taviraj-medium`}>Quick Price Check</h4>

        <div className='flex flex-col gap-4 md:flex-row items-center justify-center mt-10 md:mt-12'>
            {priceList.map((item, index) => (
                <Link key={index} href={`/${item.link}`}>
                <div className="flex items-center gap-4 bg-[#DA9100] p-4 md:p-6 text-white rounded-sm hover:bg-black trnsition-all duration-500 ease-in-out" >
                    <div className="">
                        {item.icon}
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5">
                       <h4 className='font-semibold text-2xl'> {item.name}</h4>
                       <p className='text-xl'>{`Start from $${item.price}.00`}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default QuickPrice