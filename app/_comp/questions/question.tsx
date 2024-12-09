"use client";

import { useState } from "react";

const Question = () => {
    const [isOpen, setIsOpen] = useState(null);

    const toggle = (idx: any) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
        <main className='container mx-auto md:p-0 p-4 mt-12'>
            <h4 className='text-3xl md:text-4xl tarviraj-medium'>
                Frequently Asked Questions for RPC Limo Service
            </h4>

            <div className='w-full rounded-lg bg-white p-3'>
                {dataArr.map((PerAccordion, idx) => (
                    <div
                        key={idx}
                        className='border-b border-gray-500/10 py-3 last-of-type:border-b-0'
                    >
                        <div
                            onClick={() => toggle(idx)}
                            className={`flex items-center ${
                                isOpen === idx
                                    ? "bg-[#DA9100] w-full p-3 montserrat"
                                    : "gap-5"
                            }`}
                        >
                            <span className='rounded-full p-2'>
                                <svg
                                    className='ml-8 size-3 shrink-0 fill-black'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <rect
                                        y='5'
                                        width='12'
                                        height='2'
                                        rx='1'
                                        className={`origin-center transform transition duration-200 ease-out ${
                                            isOpen === idx && "!rotate-180"
                                        }`}
                                    />
                                    <rect
                                        y='5'
                                        width='12'
                                        height='2'
                                        rx='1'
                                        className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                                            isOpen === idx && "!rotate-180"
                                        }`}
                                    />
                                </svg>
                            </span>
                            <h4
                                className={`text-xl ${
                                    isOpen === idx
                                        ? "bg-[#DA9100] w-full p-3  montserrat"
                                        : ""
                                }`}
                            >
                                {PerAccordion.title}
                            </h4>
                        </div>

                        <div
                            className={`grid overflow-hidden text-zinc-800 transition-all duration-300 ease-in-out ${
                                isOpen === idx
                                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className='overflow-hidden text-[18px] px-6 montserrat'>
                                {PerAccordion.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

const dataArr = [
    {
        title: "What types of vehicles are available in your fleet?",
        description:
            "Our fleet at RPC Limo includes a variety of luxury vehicles such as stretch limousines for grand entrances, spacious SUV limos for larger groups, and elegant sedans for a more intimate experience. Each vehicle is regularly inspected and maintained to ensure safety and comfort.",
    },
    {
        title: "Are your chauffeurs experienced?",
        description:
            "Yes, each RPC Limo chauffeur is a highly trained professional. They are licensed, undergo thorough background checks, and possess extensive knowledge of the New York area to ensure a smooth and efficient ride.",
    },
    {
        title: "What amenities can I expect in a RPC Limo?",
        description:
            "Our limousines offer an array of luxurious amenities including plush leather seating, advanced multimedia entertainment systems, climate control, privacy partitions, and complimentary refreshments. The available features may vary depending on the chosen vehicle.",
    },
    {
        title: "What is the minimum age requirement to rent a limo?",
        description:
            "The primary person renting the limo must be at least 21 years old. We require a valid ID for verification and compliance with our rental policies.",
    },
    {
        title: "What if I encounter a problem during my service?",
        description:
            "In the unlikely event of a problem, RPC Limo provides 24/7 customer support and roadside assistance to resolve any issues promptly and ensure your travel remains uninterrupted.",
    },
    {
        title: "Can I modify or cancel my reservation?",
        description:
            "Yes, we offer flexible reservation policies. You can modify or cancel your booking according to the terms outlined in your rental agreement, which are designed for your convenience.",
    },
    {
        title: "How does RPC Limo ensure passenger safety during the ride?",
        description:
            "Safety is our utmost concern. Apart from professional chauffeurs and well-maintained vehicles, we adhere to strict safety protocols and regularly update our practices to meet the highest standards of the limousine service industry.",
    },
];

export default Question;
