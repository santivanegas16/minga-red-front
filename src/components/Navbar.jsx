import Display from './Display';
import Menu from '/img/Menu.svg';
import LogoMobile from '/img/LogoMobile.png';
import logo from '/img/logo.png';
import { useState } from 'react';

export default function Navbar() {
    let options = [
        { to: '/', title: "Home" },
        { to: '/', title: "Comics" },
        { to: '/', title: "My Comics" },
        { to: '/', title: "Favorites" },
        { to: '/', title: "Logout" },
        { to: '/author-form', title: "New Author" },
        { to: '/manga-form', title: "New Manga" },
    ]
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
