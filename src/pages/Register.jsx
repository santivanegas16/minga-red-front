import { useNavigate } from 'react-router';
import { useRef } from 'react';
import bg_register from '../../public/img/Bg_register.png';
import Icon_cam_register from '../../public/img/Icon_cam_register.svg';
import Icon_pass_register from '../../public/img/Icon_pass_register.svg';
import Forms from "../components/Form_login_register";
import axios from 'axios';

export default function Register() {

    const navigate = useNavigate();
    const signun = async () => {
        const newUser = {
            email: email.current.value,
            photo: photo.current.value,
            password: password.current.value,
        }
        try {
            console.log(newUser);
            setTimeout(() => navigate('/', 1000));
        } catch (error) {
            console.log(error);
        }
    }

    const email = useRef();
    const photo = useRef();
    const password = useRef();
    const notification = useRef();

    const datesInputs = [
        { name: "Email", refe: email, icon: { type: "str", src: "@" }, type: "email", placeholder: "your-email@domain.com" },
        { name: "Photo", refe: photo, icon: { type: "img", src: Icon_cam_register }, type: "url", placeholder: "URL" },
        { name: "Password", refe: password, icon: { type: "img", src: Icon_pass_register }, type: "password", placeholder: "********" }
    ]

    const inputNotifi = { refe: notification, text: "Send notification to my email" };

    const footerForm = [
        { first: "Already have an account?", second: "Log in", to: "/login" },
        { first: "Go back to", second: "home page", to: "/home" }
    ]

    const buttonData = { text: "Sign Up", action: signun };

    return (
        <main className='w-full min-h-screen flex justify-center bg-white pb-[30px]'>
            <Forms buttonData={buttonData} dataInpunts={datesInputs} notification={inputNotifi} page={"register"} footerForm={footerForm} />
            <img className='hidden lg:block min-h-[640px] max-h-screen w-1/2 object-cover' src={bg_register} alt="Register" />
        </main>
    )
}
