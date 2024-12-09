"use client";

import React from "react";
import Link from "next/link";
import TelephonSvg from "@/components/icon/telephon";
import Auth from "./auth";
import LineSvg from "@/components/icon/line";
import f1 from '@/public/image/f1.png'
import Image from "next/image";

const Header = () => {
    return (
        <main>
            <header className='bg-[#f7a60f] p-2 md:p-7 hidden md:flex justify-between'>
                <div></div>

                <nav className='flex gap-10'>
                    <div className='text-xl font-bold'>ZSI.AI</div>
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
                                    <a
                                        href={item.link}
                                        className='cursor-pointer hover:text-gray-50 duration-500 transition-all ease-in-out'
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex items-center gap-3'>
                    <a
                        href='tel:1-833-711-4606'
                        className='flex items-center gap-1'
                    >
                        {" "}
                        <TelephonSvg className='h-4 w-4' /> 1-833-711-4606
                    </a>
                    <div>
                        <Link
                            href={"#"}
                            className='border p-2 hover:bg-white hover:text-gray-700 duration-500 transition-all ease-in-out rounded'
                        >
                            Book Now
                        </Link>
                    </div>
                    <Auth />
                </div>
            </header>

            <ResponsiveHeader />
        </main>
    );
};

const ResponsiveHeader = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='block md:hidden relative'>
            <div className="p-4 flex justify-between">
                {!isOpen ? (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <LineSvg className='h-6 w-6' />
                    </button>
                ) : (
                    <div />
                )}
                <div>
                    <Image  src={f1} alt="f1" width={1000} height={300} className="w-40 h-10"/>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`${isOpen
                        ? "transform translate-x-0"
                        : "transform translate-x-full"
                    } fixed top-0 right-0 w-8/12 h-full bg-gray-100 shadow-lg transition-transform duration-300 ease-in-out md:hidden z-50`}
            >
                <div className=''>
                    <ul className='flex flex-col items-start px-4 py-8 space-y-4 relative'>
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
                                        <ul className=' right-0 top-full hidden group-hover:block  transition-all duration-300 ease-in-out'>
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
                                    <a
                                        href={item.link}
                                        className='cursor-pointer hover:text-gray-50 duration-500 transition-all ease-in-out'
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className='flex flex-col gap-3 px-4'>
                    <a
                        href='tel:1-833-711-4606'
                        className='flex items-center gap-1'
                    >
                        {" "}
                        <TelephonSvg className='h-4 w-4' /> 1-833-711-4606
                    </a>
                    <div>
                        <Link
                            href={"#"}
                            className='border p-2 hover:bg-white hover:text-gray-700 duration-500 transition-all ease-in-out rounded'
                        >
                            Book Now
                        </Link>
                    </div>
                    <Auth />
                </div>
                </div>
            </div>
        </div>
    );
};

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

export default Header;
