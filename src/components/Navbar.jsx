import Display from './Display';
import Menu from '/img/Menu.svg';
import LogoMobile from '/img/LogoMobile.png';
import logo from '/img/logo.png';
import { useState } from "react";
import axios from 'axios';
import apiUrl from '../apiUrl.js';
import header from '../header.js';
import { useEffect } from "react";

export default function Navbar() {

    const signout = async () => {
        try {
            await axios.post(apiUrl + 'auth/signout', null, header())
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.replace('/')
        } catch (error) {
            console.log(error);
        }
    }

    const [options, setOptions] = useState([]);

    let user = JSON.parse(localStorage.getItem("user"));
    useEffect(
        () => {
            if (user) {
                if (user.role === 0) {
                    setOptions([
                        { to: '/', title: "Home" },
                        { to: '/author-form', title: "New Author" },
                        { to: '/cia-form', title: "New Company" },
                        { to: '/', title: "Sign Out", onClick: signout },
                    ]);
                } else if (user.role === 1 || user.role === 2) {
                    setOptions([
                        { to: '/', title: "Home" },
                        { to: '/manga-form', title: "New Manga" },
                        { to: '/chapter-form', title: "New Chapter" }, // falta agregar
                        { to: '/', title: "Sign Out", onClick: signout },
                    ]);
                } else if (user.role === 3) {
                    setOptions([
                        { to: '/', title: "Home" },
                        { to: '/', title: "Sign Out", onClick: signout },
                    ]);
                }
            }
            else {
                setOptions([
                    { to: '/', title: "Home" },
                    { to: '/register', title: "Register" },
                    { to: '/login', title: "Login" },
                ]);
            }
        }, [])

    const [show, setShow] = useState(false)
    return (
        <>
            {show && <Display options={options} show={show} setShow={setShow} />}
            <nav className="flex justify-between w-full absolute top-0">
                <img onClick={() => setShow(!show)} className=" cursor-pointer mt-[21px] ml-[21px] w-14 h-14 lg:mt-[34px] lg:ml-[91px] pl-1.5 rounded-lg hover:bg-white" src={Menu} alt='menu'></img>
                <img className="mt-6 mr-9 w-10 h-12 lg:hidden" src={LogoMobile} alt='logo'></img>
                <img className="mt-[46px] mr-[91px] w-[193px] h-[42px] hidden lg:block" src={logo} alt='logo'></img>
            </nav>
        </>
    )
}
