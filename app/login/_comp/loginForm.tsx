'use client'

import React from 'react';
import { createLogin } from './server-action';
import { LoginSchema } from '@/helpers/schemas/schemas';
import Image from 'next/image';
import LoginImage from '@/public/image/login-bg.jpg'
import { useDispatch } from 'react-redux';
import { loggedUser } from '@/lib/slices/authSlices';
import EyeSvg from '@/components/icon/eye';
import EyeOn from '@/components/icon/eyeon';
import { useRouter } from 'next/navigation';


const LoginForm = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
    const [loading, setLoading] = React.useState<boolean>(false);
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [success, setSuccess] = React.useState({
        status: false,
        message: '',
    });

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    // Real-time validation function
    const validateField = (name: string, value: string) => {
        const parsedData = LoginSchema.safeParse({ ...formData, [name]: value });

        if (parsedData.success) {
            // Remove error 
            setErrors((prevErrors) => {
                const updatedErrors = { ...prevErrors };
                delete updatedErrors[name];
                return updatedErrors;
            });
        } else {
            // Update the error 
            const error = parsedData.error.errors.find((err) => err.path[0] === name);
            if (error) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: error.message,
                }));
            }
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const parsedData = LoginSchema.safeParse({ ...formData });

            if (!parsedData.success) {
                // Aggregate all errors 
                const aggregatedErrors = parsedData.error.errors.reduce((acc: { [key: string]: string }, curr) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {});
                setErrors(aggregatedErrors);
                return;
            }

            setLoading(true);
            const response = await createLogin({ ...formData });
            console.log("🚀 ~ handleSubmit ~ response:", response)
            setLoading(false);

            if (response?.isError == true) {
                setErrors({ serverError: response?.message })
                return;
            }

            if (response?.status_code == 200) {
                dispatch(loggedUser({ email: parsedData.data.email, token: response?.data?.token, user: response?.data?.user }));
                setSuccess({ status: true, message: 'Login successful' });
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        // Update form data
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validate the specific field in real time
        validateField(name, value);
    };

    React.useEffect(()=>{
        if(success.status){
            setTimeout(()=>{
                setSuccess({ status: false, message: '' })
                setFormData({ email: '', password: '' })
                router.push('/')
            }, 1000)
        }
    },[router, success.status])

    return (
        <main className='flex gap-10 md:flex-row flex-col'>
            <div className=''>
                <Image alt='login' className='object-cover min-h-svh ' src={LoginImage} width={1000} height={500} />
            </div>
            <section className='mt-[50px] md:mt-[100px] flex flex-col gap-10 p-5 md:p-10'>
                <h4 className="text-[#161003] font-bold text-2xl md:text-3xl">Sign In</h4>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:w-[400px]">

                    {errors.serverError && <p className="text-red-500">{errors.serverError}</p>}
                    {success.message && <p className="text-green-500">{success.message}</p>}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            className="border p-2 focus:outline-[#a5720d]"
                            type="email"
                            id="email"
                            placeholder='Email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        { errors.email && <p className="text-red-500">{errors.email}</p> }
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                className="border p-2 focus:outline-[#a5720d] md:w-[400px]"
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            
                            {showPassword ?
                                <EyeOn className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer h-4 w-4' onClick={toggleShowPassword} />
                                :
                                <EyeSvg className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer h-4 w-4' onClick={toggleShowPassword} />
                            }

                        </div>
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>

                    <div className="my-3 flex justify-between items-center">
                        <button disabled={loading} type="submit" className={`bg-[#da9100] text-white p-2 rounded`}>
                            {loading ? 'Loading...' : 'SUBMIT'}
                        </button>
                        <a href='#' className='text-blue-500'>Forget password</a>
                    </div>

                    <div>
                        <h4>Need an account? <a href="#" className='text-blue-500'>Sign Up</a>  |   <a className='text-blue-500' href="#">Privacy Policies</a></h4>
                    </div>
                </form>

            </section>
        </main>
    );
};

export default LoginForm;
