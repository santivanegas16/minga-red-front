import { Link as Anchor } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import bg_register from '../../public/img/Bg_register.png';
import Logo_register from '../../public/img/Logo_register.svg';
import Icon_cam_register from '../../public/img/Icon_cam_register.svg';
import Icon_pass_register from '../../public/img/Icon_pass_register.svg';
import google from '../../public/img/google.png';

export default function Register() {

    const navigate = useNavigate();
    const signin = () => {
        const newUser = {
            email: email.current.value,
            photo: photo.current.value,
            password: password.current.value,
            notification: notification.current.value
        }
        console.log(newUser);
        setTimeout(() => navigate('/'), 1000);
    }

    const email = useRef();
    const photo = useRef();
    const password = useRef();
    const notification = useRef();

    return (
        <main className='w-full min-h-screen flex justify-center bg-white pb-[30px]'>
            <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center pt-[90px]'>
                <img className='w-[154px] h-[48px]' src={Logo_register} alt="Logo" />
                <h1 className='w-[448px] h-[48px] font-poppins font-semibold text-[32px] leading-[48px] tracking-[5%] text-center'> Welcome! </h1>
                <p className='w-[384px] h-[36px] font-poppins font-semibold text-[12px] leading-[18px] tracking-[5%] text-center'> Discover manga, manhua and manhwa, track your progress, have fun, read manga. </p>
                <form className='flex flex-col justify-center items-center w-[80%] gap-[25px] mt-[30px]'>

                    <div className='z-0 relative w-[80%] md:w-[50%]'>
                        <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-[#F97316] bg-white" htmlFor="email">Email</label>
                        <input ref={email} required
                            className='relative border lg:border-2 border-[#1F1F1F]/30 hover:border-[#F97316] rounded-[10px] w-full px-4 py-2'
                            type="email" placeholder="your-email@domain.com" id="email" />
                        <span className="absolute right-[1ch] top-2 text-[#F97316]">@</span>
                    </div>

                    <div className='z-0 relative w-[80%] md:w-[50%]'>
                        <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-[#F97316] bg-white" htmlFor="photo">Photo</label>
                        <input ref={photo} required
                            className='relative border lg:border-2 border-[#1F1F1F]/30 hover:border-[#F97316] rounded-[10px] w-full px-4 py-2'
                            type="url" placeholder="URL" id="photo" />
                        <span className="w-4 h-4 absolute right-[1ch] top-2">
                            <img src={Icon_cam_register} alt="Camera" />
                        </span>
                    </div>

                    <div className='z-0 relative w-[80%] md:w-[50%]'>
                        <label className="absolute -top-2 left-[2ch] px-1 z-10 text-[12px] text-[#F97316] bg-white" htmlFor="passw">Password</label>
                        <input ref={password} required
                            className='relative border lg:border-2 border-[#1F1F1F]/30 hover:border-[#F97316] rounded-[10px] w-full px-4 py-2'
                            type="password" placeholder='********' id="passw" />
                        <span className="w-4 h-4 absolute right-[1ch] top-2">
                            <img src={Icon_pass_register} alt="Password" />
                        </span>
                    </div>

                    <div className="z-0 flex items-center mb-4 w-[80%] md:w-[50%]">
                        <input ref={notification}
                            id="check-send-email" type="checkbox"
                            className="w-4 h-4 rounded-lg text-[#F97316] border-[#1F1F1F]/30 hover:border-gray-500 focus:ring focus:ring-indigo-300" />
                        <label
                            htmlFor="check-send-email"
                            className="ml-2 text-sm text-slate-700 hover:text-slate-500">
                            Send notification to my email
                        </label>
                    </div>

                    <button onClick={signin} className='z-0 w-[80%] md:w-[50%] text-white font-bold rounded-[10px] py-2 bg-gradient-to-r from-[#F97316] to-[#F4B333] hover:from-[#F4B333] hover:to-[#F97316] shadow-[2px_4px_5px_2px_rgba(249,115,22,0.7)] hover:shadow-none' type='button'>
                        <span>Sign Up</span>
                    </button>

                    <button className="z-0 w-[80%] md:w-[50%] border lg:border-2 border-[#1F1F1F]/30 hover:border-[#F97316] hover:bg-neutral-200 rounded-[10px] py-2 flex justify-center items-center gap-1">
                        <img className="h-4 md:h-6" src={google} alt="G Google" />
                        <span className="opacity-50">Sign in with Google</span>
                    </button>

                </form>
                <div className='m-5 flex justify-between w-[252px] h-[21px] font-poppins font-bold text-[14px] leading-[21px] tracking-[5%]'>
                    <p>Already have an account?</p>
                    <Anchor to='/login' className='text-[#F97316] cursor-pointer'>Log in</Anchor>
                </div>
                <div className='flex justify-between w-[176px] h-[21px] font-poppins font-bold text-[14px] leading-[16.8px] tracking-[5%]'>
                    <p>Go back to</p>
                    <Anchor to='/home' className='text-[#F97316] cursor-pointer'> home page </Anchor>
                </div>
            </div>
            <img className='hidden lg:block min-h-[640px] max-h-screen w-1/2 object-cover' src={bg_register} alt="Register" />
        </main>
    )
}
