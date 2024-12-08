"use client";

import React from "react";
import Link from "next/link";
import TelephonSvg from "@/components/icon/telephon";
import Auth from "./auth";

const Header = () => {
    const navlist = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/",
        },
        {
            name: "Service",
            link: "#",
            submenu: [
                { name: "Corporate Travel", link: "#" },
                { name: "Airport Transfer", link: "#" },
                { name: "Flight Booking", link: "#" },
                { name: "Wedding Service", link: "#" },
                { name: "Cruise Booking", link: "#" },
            ],
            sub: true,
        },
        {
            name: "Fleet",
            link: "#",
        },
        {
            name: "Get a Quote",
            link: "#",
        },
        {
            name: "Contact Us",
            link: "#",
        },
        {
            name: "Driver Login",
            link: "#",
        },
    ];

    return (
        <header className='bg-[#f7a60f] p-2 md:p-7 flex justify-between'>
            <div></div>

            <nav className='flex gap-10'>
                <div className="text-xl font-bold">
                    ZSI.AI
                </div>
                <ul className='flex gap-4 relative'>
                    {navlist.map((item, index) => (
                        <li key={index} className='relative group'>
                            {item.sub ? (
                                <>
                                    <Link
                                        href={item.link}
                                        className='cursor-pointer hover:text-gray-50 duration-500 transition-all ease-in-out'
                                    >
                                        {item.name} {item.sub && "▾"}
                                    </Link>
                                    <ul className='absolute left-0 top-full hidden group-hover:block bg-[#f7a60f] shadow-lg p-3 rounded-lg transition-all duration-300 ease-in-out'>
                                        {item.submenu.map(
                                            (submenu, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        href={submenu.link}
                                                        className='block px-4 py-2 hover:text-gray-50 text-nowrap'
                                                    >
                                                        {submenu.name}
                                                    </Link>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </>
                            ) : (
                                <a href={item.link} className='cursor-pointer hover:text-gray-50 duration-500 transition-all ease-in-out'>
                                    {item.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='flex items-center gap-3'>
                <a href="tel:1-833-711-4606" className="flex items-center gap-1"> <TelephonSvg className="h-4 w-4" /> 1-833-711-4606</a>
                <div>
                    <Link href={"#"} className='border p-2 hover:bg-white hover:text-gray-700 duration-500 transition-all ease-in-out rounded'>
                        Book Now
                    </Link>
                </div>
                <Auth />
            </div>
        </header>
    );
};

export default Header;
