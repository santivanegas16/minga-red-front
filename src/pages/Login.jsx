import { Link as Anchor } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl.js';
import bg_login from '../../public/img/Bg_form.png';
import Logo_register from '../../public/img/Logo_register.svg';
import google from '../../public/img/google.png';

export default function Login() {

    const loginForm = async () => {
        const data = {
            email: email.current.value,
            password: password.current.value
        }

        try {
            const response = await axios.post(apiUrl + 'auth/signin', data).then(res => res.data);
            if (response.success) {
                alert("user signed in!");
                localStorage.setItem('token', response.response.token);
                localStorage.setItem('user', JSON.stringify(response.response.user));
                setTimeout(() => window.location.replace('/'), 1000);
            } else {
                alert("error!");
            }
        } catch (error) {
            console.log(error);
            alert("error!");
        }
    }

    const email = useRef();
    const password = useRef();

    return (
        <main className='w-full min-h-screen flex justify-center bg-white pb-[30px]'>
            <img className='hidden lg:block min-h-[640px] max-h-screen w-1/2 object-cover' src={bg_login} alt="Login" />
            <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center pt-[90px]'>
                <img className='w-[154px] h-[48px]' src={Logo_register} alt="Logo" />
                <div className='flex justify-center w-[448px] h-[48px] font-poppins font-semibold text-[32px] leading-[38.4px] tracking-[5%]'>
                    <h1 className='mr-[5px]'> Welcome </h1>
                    <h1 className='text-[#FF5722]'> back </h1>
                    <h1> ! </h1>
                </div>
                <p className='w-[384px] h-[36px] font-poppins font-semibold text-[12px] leading-[18px] tracking-[5%] text-center'> Discover manga, manhua and manhwa, track your progress, have fun, read manga. </p>
                <form className='flex flex-col justify-center items-center w-[80%] gap-[25px] mt-[30px]'>

                    <div className='relative w-[80%] md:w-[50%]'>
                        <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-[#F97316] bg-white" htmlFor="email">Email</label>
                        <input ref={email}
                            className='relative border lg:border-2 border-[#1F1F1F]/30 hover:border-[#F97316] rounded-[10px] w-full px-4 py-2'
                            type="email" placeholder="your-email@domain.com" id="email" />
                        <span className="absolute right-[1ch] top-2 text-[#F97316]">@</span>
                    </div>

                    <div className='relative w-[80%] md:w-[50%]'>
                        <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-[#F97316] bg-white" htmlFor="photo">Password</label>
                        <input ref={password}
                            className='relative border lg:border-2 border-[#1F1F1F]/30 hover:border-[#F97316] rounded-[10px] w-full px-4 py-2'
                            type="password" placeholder="********" id="photo" />
                    </div>

                    <button onClick={loginForm} className='w-[80%] md:w-[50%] text-white font-bold rounded-[10px] py-2 bg-gradient-to-r from-[#F97316] to-[#F4B333] hover:from-[#F4B333] hover:to-[#F97316] shadow-[2px_4px_5px_2px_rgba(249,115,22,0.7)] hover:shadow-none' type='button'>
                        <span>Sign In</span>
                    </button>

                    <button className="w-[80%] md:w-[50%] border lg:border-2 border-[#1F1F1F]/30 hover:border-[#F97316] hover:bg-neutral-200 rounded-[10px] py-2 flex justify-center items-center gap-1">
                        <img className="h-4 md:h-6" src={google} alt="G Google" />
                        <span className="opacity-50">Sign in with Google</span>
                    </button>

                </form>
                <div className='m-5 flex justify-between w-[305px] h-[21px] font-poppins font-bold text-[14px] leading-[21px] tracking-[5%]'>
                    <p>you don't have an account yet?</p>
                    <Anchor to='/register' className='text-[#F97316] cursor-pointer'>Sign Up</Anchor>
                </div>
                <div className='flex justify-between w-[176px] h-[21px] font-poppins font-bold text-[14px] leading-[16.8px] tracking-[5%]'>
                    <p>Go back to</p>
                    <Anchor to='/home' className='text-[#F97316] cursor-pointer'> home page </Anchor>
                </div>
            </div>
        </main>
    )
}