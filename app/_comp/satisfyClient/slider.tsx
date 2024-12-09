"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import client1 from '@/public/image/c1.jpg';
import client2 from '@/public/image/c2.jpg';
import Image from "next/image";
import RightArrowSvg from "@/components/icon/rightArrow";
import LeftArrow from "@/components/icon/leftArrow";
import StarFillSvg from "@/components/icon/starfill";

const _testimonials = [
    {
        id: 1,
        name: "Carolina Monntoya",
        rating: 5,
        image: client1,
        testimonial: "Impeccable service! From punctuality to the pristine condition of the vehicles, RPC Limo made our corporate event seamless and stylish. Highly recommended!"
    },
    {
        id: 2,
        name: "Peter Rose",
        rating: 5,
        image: client2,
        testimonial: "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and the professionalism of the chauffeurs were outstanding"
    },
]


const Slider: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);
    const carouselRef = useRef<HTMLDivElement>(null);

    const testimonials = _testimonials || [];

    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    // Update testimonials
    const updateTestimonialsPerPage = () => {
        if (window.innerWidth < 768) {
            setTestimonialsPerPage(1);
        } else if (window.innerWidth < 1024) {
            setTestimonialsPerPage(1);
        } else {
            setTestimonialsPerPage(1);
        }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        updateTestimonialsPerPage();
        window.addEventListener("resize", updateTestimonialsPerPage);
        return () => window.removeEventListener("resize", updateTestimonialsPerPage);
    }, []);

    // Handle next and previous page navigation
    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    // Animate the carousel 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (carouselRef.current) {
            gsap.to(carouselRef.current, {
                x: -currentPage * (100 / (totalPages)) + "%", // Shift the carousel
                duration: 0.8,
                ease: "power2.out",
            });
        }
    }, [currentPage, totalPages]);

    // Group testimonials
    const paginatedTestimonials = [];
    for (let i = 0; i < testimonials.length; i += testimonialsPerPage) {
        paginatedTestimonials.push(testimonials.slice(i, i + testimonialsPerPage));
    }

    return (
        <section className="py-10">
            <div className="mx-4 relative">

                <div className=" relative overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="flex transition-transform duration-500 ease-out gap-5 my-4 px-4"
                        style={{ width: `${totalPages * 100}%` }}
                    >
                        {paginatedTestimonials.map((page, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="flex gap-5 w-full "
                                style={{ width: `${100 / totalPages}%` }}
                            >
                                {page.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="p-6 max-w-[700px] mx-auto flex flex-col gap-5"
                                    >
                                        <p className="mulish mb-4 text-center md:text-xl p-4 md:p-10 bg-[#DA9100]">
                                            {testimonial?.testimonial}
                                        </p>
                                        <div className="flex items-center justify-center flex-col gap-5">
                                            <div className="">
                                                <Image
                                                    width={1000}
                                                    height={50}
                                                    src={testimonial?.image}
                                                    alt={testimonial?.name}
                                                    className="w-[150px] h-[150px] rounded-full"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-5">
                                            <div className="flex gap-1 items-center justify-center">
                                               {
                                                    Array(testimonial?.rating).fill(0).map((_, index) => (
                                                        <span key={index} className="text-yellow-500">
                                                            <StarFillSvg className="w-4 h-4" />
                                                        </span>
                                                    ))
                                                }
                                               </div>
                                                <p className="font-semibold epilogue text-2xl">
                                                    {testimonial?.name}
                                                </p>
                                               
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Show Next/Prev Buttons only if multiple pages */}
                {totalPages > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white border drop-shadow-md shadow-emerald-100 hover:bg-[#DA9100]  px-2 py-1 rounded"
                        >
                            <LeftArrow className={'w-5 md:w-10 h-5 md:h-10'} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border drop-shadow-md shadow-emerald-100 hover:bg-[#DA9100] px-2 py-1 rounded"
                        >
                            <RightArrowSvg className={'w-5 md:w-10 h-5 md:h-10'} />
                        </button>
                    </>
                )}

                {/* Indicators, shown only if more than 1 page */}
                {totalPages > 1 && (
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-5 h-5 rounded-full transition-colors duration-300 ease-in-out ${index === currentPage
                                        ? "bg-[#DA9100]"
                                        : "bg-[#D9D9D9]"
                                    }`}
                            ></button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Slider;