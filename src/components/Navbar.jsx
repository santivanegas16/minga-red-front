import imagenFondo from '/img/Background1.png';

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full h-screen lg:h-[646px] lg:-top-0.5 bg-cover bg-center relative " alt='fondo' style={{ backgroundImage: `url(${imagenFondo})` }}>
        <img className="mt-[21px] ml-[21px] w-14 h-14 lg:mt-[34px] lg:ml-[91px]" src='/img/Menu.png' alt='menu'></img>
        <img className="mt-6 mr-9 w-10 h-12 lg:hidden" src='/img/LogoMobile.png' alt='logo'></img>
        <img className="mt-[46px] mr-[91px] w-[193px] h-[42px] hidden lg:block" src='/img/logo.png' alt='logo'></img>
      </nav>
  )
}
