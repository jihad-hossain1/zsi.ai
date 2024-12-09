"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import f1 from "@/public/image/f1.png";
import f2 from "@/public/image/f2.png";

const Footer = () => {
    return (
        <main className='bg-[#DA9100]'>
            <div className='container mx-auto md:p-0 p-4'>
                <footer className='flex flex-col md:flex-row gap-10 justify-between p-10 md:p-20'>
                    <section className='flex flex-col gap-4'>
                        <Image
                            src={f1}
                            alt='logo'
                            height={100}
                            width={1000}
                            className='max-w-[300px] max-h-[100px]'
                        />
                        <p className='mulish text-lg max-w-[480px]'>
                            Spanning from the bustling energy of New York to
                            over 300 cities worldwide, RPC Limo is your trusted
                            partner in sophisticated travel logistics. We pledge
                            to provide a smooth transition from the outset of
                            your journey to its conclusion, ensuring every leg
                            of your trip is executed with precision and
                            elegance.
                        </p>

                        <a href="#" className="mulish text-lg px-10 py-3 bg-black text-white text-center w-fit">
                        Book Now Pay Later
                        </a>
                    </section>

                    <section className='grid md:grid-cols-2 gap-10'>
                        <div className='flex flex-col gap-4'>
                            <h4 className='taviraj-medium text-2xl'>
                                {serviceLink?.quickLink?.name}
                            </h4>
                            <div className='flex flex-col gap-3'>
                                {serviceLink?.quickLink?.list?.map(
                                    (item, index) => (
                                        <Link
                                            href={item?.link}
                                            key={index}
                                            className='mulish text-nowrap hover:text-white duration-300 transition-all ease-in-out'
                                        >
                                            {item?.title}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h4 className='taviraj-medium text-2xl'>
                                {serviceLink?.quickLink?.name}
                            </h4>
                            <div className='flex flex-col gap-3'>
                                {serviceLink?.ourService?.list?.map(
                                    (item, index) => (
                                        <Link
                                            href={item?.link}
                                            key={index}
                                            className='mulish text-nowrap hover:text-white duration-300 transition-all ease-in-out'
                                        >
                                            {item?.title}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>

                    <section className='max-w-[350px] flex flex-col gap-4'>
                        <Image
                            src={f2}
                            alt='logo'
                            height={100}
                            width={1000}
                            className='max-w-[200px] md:max-w-[250px] max-h-[150px] md:max-h-[200px]'
                        />

                        <h4>
                            If you are a rider or want to use our platform to
                            ride please download RPC LIMO app.
                        </h4>

                        <h4>
                            If you are a driver or want to drive with us please
                            download RPC DRIVER app.
                        </h4>
                    </section>
                </footer>

                <div className="p-4">
                    <h4 className='text-sm'>
                        Copyright © RPC Limo 2024 - Developed by ZSI
                    </h4>
                </div>
            </div>
        </main>
    );
};

const serviceLink = {
    quickLink: {
        name: "Quick Link",
        list: [
            {
                title: "Our Fleet",
                link: "#",
            },
            {
                title: "Our Gellery",
                link: "#",
            },
            {
                title: "Contact Us",
                link: "#",
            },
            {
                title: "Privacy Policy",
                link: "#",
            },
            {
                title: "Book A Ride",
                link: "#",
            },
        ],
    },
    ourService: {
        name: "Our Service",
        list: [
            {
                title: "Corporate Travel",
                link: "#",
            },
            {
                title: "Airport Transfer",
                link: "#",
            },
            {
                title: "Flight Booking",
                link: "#",
            },
            {
                title: "Wedding Service",
                link: "#",
            },
            {
                title: "Cruise Booking",
                link: "#",
            },
        ],
    },
};

export default Footer;
