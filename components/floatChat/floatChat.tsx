'use client';

import React, { useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import TrashSvg from '../icon/trash';
import ChatSvg from '../icon/chat';

const FloatChat = () => {
    const [showFloatChat, setShowFloatChat] = React.useState(false);
    const [formDataList, setFormDataList] = React.useState<any[]>([]);
    const [formData, setFormData] = React.useState({
        message: '',
        date: new Date()
    });
    const messagesEndRef = useRef<HTMLDivElement | null>(null);


    // Automatically scroll to the last message
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const existingData = localStorage.getItem('formData');
        const newMessage = formData.message.trim();

        if (newMessage) {
            const updatedData = existingData
                ? [...JSON.parse(existingData), formData]
                : [formData];

            localStorage.setItem('formData', JSON.stringify(updatedData));

            setFormDataList(updatedData);
            setFormData({ message: '', date: new Date() });
        }
    };

    useEffect(() => {
        const existingData = localStorage.getItem('formData');
        if (existingData) {
            setFormDataList(JSON.parse(existingData));
        }
    }, []);

    useEffect(() => {
        scrollToBottom(); // Scroll to bottom when messages are updated
    }, [formDataList]);

    const removeMessage = () => {
        const removeAll = localStorage.removeItem('formData');
        setFormDataList([]);
        return removeAll;
    }

    return (
        <div className="fixed bottom-4 right-4">
            {/* Button to toggle chat */}
            <button
                onClick={() => setShowFloatChat(!showFloatChat)}
                className={`${showFloatChat ? 'bg-red-600' : 'bg-gray-700'
                    } text-white px-4 py-3 rounded-full shadow-lg focus:outline-none transition-transform transform hover:scale-110`}
            >
                {showFloatChat ? <span>Close</span> : <span className='flex items-center gap-2'><ChatSvg className='h-6 w-6' /> Chat with us</span>}
            </button>
            {showFloatChat && formDataList?.length > 5 && <button className="ml-2 bg-gray-200 drop-shadow-md border text-white p-3 rounded-full shadow-lg focus:outline-none transition-transform transform hover:scale-110 text-xs" onClick={removeMessage}>
                <TrashSvg className='h-6 w-6' />
                </button>}
           
            {/* Chat window */}
            <Transition
                show={showFloatChat}
                enter="transition-all duration-300 transform ease-out"
                enterFrom="opacity-0 translate-y-4 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="transition-all duration-300 transform ease-in"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-4 scale-95"
            >
                <div className="absolute bottom-16 right-0 min-h-[300px] md:min-h-[400px] w-[300px] md:w-[400px] bg-gray-100 p-4 rounded-lg shadow-lg border drop-shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Hi, there!</h3>
                    <div className="text-sm text-gray-600">
                        <p>Welcome to the chat! How can we help you?</p>
                    </div>
                    <div className="overflow-y-auto max-h-[230px] mt-4 space-y-2">
                        {formDataList.map((data: { message: string; date: Date }, index: number) => (
                            <Transition
                                key={index}
                                show={true}
                                enter="transition-opacity duration-300 transform ease-out"
                                enterFrom="opacity-0 translate-y-2 scale-95"
                                enterTo="opacity-100 translate-y-0 scale-100"
                            >
                                <div className="">
                                    <p className="text-gray-700 pb-1 p-2 bg-gray-200/70 rounded-lg ">{data.message}</p>
                                    <div className='flex justify-end'>
                                    <span className="text-xs text-gray-500  px-1">{new Date(data?.date)?.toLocaleTimeString()}</span>
                                    </div>
                                </div>
                            </Transition>
                        ))}
                        <div ref={messagesEndRef}></div>
                    </div>
                    <form className="mt-4 lg:absolute lg:bottom-2" onSubmit={handleSubmit}>
                        <div className="flex items-center">
                            <textarea
                                onChange={handleChange}
                                name="message"
                                value={formData.message}
                                placeholder="Type your message..."
                                className="flex-1 w-full md:w-[280px] bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 mr-2 shadow-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:bg-gray-100 resize-none"
                                rows={1}
                            />

                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </Transition>
        </div>
    );
};

export default FloatChat;
