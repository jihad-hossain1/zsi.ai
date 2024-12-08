"use client";

import { logoutUser } from "@/lib/slices/authSlices";
import { AppDispatch, RootState } from "@/lib/store";
// import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
   
    const handleLogout = () => {
        dispatch(logoutUser());
    }
    return (
        <div>
            {auth?.token ? (
                <button onClick={handleLogout} className='border p-2 hover:bg-gray-50 bg-white hover:text-gray-700 duration-500 transition-all ease-in-out rounded'>
                    Logout
                </button>
            ) : (
                <a
                    href={"/login"}
                    className='border p-2 hover:bg-gray-50 bg-white hover:text-gray-700 duration-500 transition-all ease-in-out rounded'
                >
                    Account Login
                </a>
            )}
        </div>
    );
};

export default Auth;
