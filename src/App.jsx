import { useState } from 'react'
import imagenFondo from '/img/Background1.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <nav className="flex justify-between w-full h-screen lg:h-[646px] lg:-top-0.5 bg-cover bg-center relative " alt='fondo' style={{ backgroundImage: `url(${imagenFondo})` }}>
        <img className="mt-[21px] ml-[21px] w-14 h-14 lg:mt-[34px] lg:ml-[91px]" src='/img/Menu.png' alt='menu'></img>
        <img className="mt-6 mr-9 w-10 h-12 lg:hidden" src='/img/LogoMobile.png' alt='logo'></img>
        <img className="mt-[46px] mr-[91px] w-[193px] h-[42px] hidden lg:block" src='/img/logo.png' alt='logo'></img>

        <div className="text-center lg:text-start text-white flex flex-col justify-center items-center lg:items-start lg:ml-[108px] absolute inset-y-1/2 inset-x-5">
          <h1 className='font-poppins pb-6 lg:pb-4 text-[40px] leading-10 font-bold lg:text-[64px] '>For the love of manga</h1>
          <h5 className='font-poppins text-xl lg:text-2xl font-normal pb-6 lg:pb-4 leading-5'>Explore our varieties</h5>
          <h5 className='font-poppins hidden lg:flex text-base font-semibold pb-6 lg:pb-4 leading-5'>#MingaLove<p className=''>❤️</p></h5>
          <button className='bg-white text-orange-500 text-xl  cursor-pointer font-roboto font-medium py-[15.5px] w-[363px] rounded-md lg:hidden'>Let’s go!</button>
          <button className='bg-white text-orange-500 text-2xl cursor-pointer font-roboto font-medium w-[240px] py-[13.5px] rounded-md hidden lg:block'>Sign In!</button>
        </div>
      </nav>

      <main className='hidden lg:block mx-[91px] mt-[57px] mb-[58px]'>
        <div className='h-[265px] bg-orange-500 rounded-md flex items-center relative'>
          <img className="absolute left-8" src='/img/prev.png' alt='menu'></img>
          <img className="absolute left-9" src='/img/carrusel1.png' alt='menu'></img>
          <img className="absolute left-[37%] bottom-[22px] xl:left-[379px] 2xl:right-[57%] 2xl:left-auto" src='/img/carrusel2.png' alt='menu'></img>
          <div className='flex flex-col w-[26%] text-white absolute left-[63%] xl:w-[27%] xl:left-[704px] 2xl:w-[356px] 2xl:right-[18%] 2xl:left-auto'>
            <h4 className='font-roboto text-2xl font-medium mb-2.5'>Shonen</h4>
            <p className='font-roboto text-sm font-normal leading-[13.33px]'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <img className="absolute right-8" src='/img/next.png' alt='menu'></img>
        </div>
      </main>

      <footer>
        <img className="w-full h-full hidden lg:block" src='/img/Footer.svg' alt='footer'></img>
        <div className='flex flex-col w-4/5 mx-auto mt-10 lg:mt-10 justify-center items-center lg:flex-row lg:justify-between'>
          <div className="mt-5 mb-3 flex justify-center items-center">
            <a className="px-[62px] text-base font-poppins font-normal leading-6 text-[#222222] lg:px-0" href='#'>Home</a>
            <a className="px-[62px] text-base font-poppins font-normal leading-6 text-[#222222] lg:pl-[62px] lg:pr-0" href='#'>Mangas</a>
          </div>
          <hr className="w-4/5 mx-auto lg:hidden text-[#222222] border-[#2B3D51] opacity-30"></hr>
          <img className="mt-5" src='/img/LogoDosP.png' alt='logo' />
          <div className=" flex flex-col justify-center items-center">
            <div className="flex flex-row my-6">
              <a href='#'><img className="px-5 lg:pl-0 lg:pr-5" src='/img/Facebook.svg' alt='logo' /></a>
              <a href='#'><img className="px-5" src='/img/Twitter.svg' alt='logo' /></a>
              <a href='#'><img className="px-5" src='/img/Vimeo.svg' alt='logo' /></a>
              <a href='#'><img className="px-5 lg:pl-5 lg:pr-0" src='/img/Youtube.svg' alt='logo' /></a>
            </div>
            <button className='mb-10 lg:mb-5 flex justify-center items-center bg-orange-500 text-white text-base cursor-pointer font-poppins font-normal leading-4 h-[43px] w-[221px] rounded-md'>Donate <img className="ml-5 mt-1" src='/img/Union.svg' alt='union' /></button>
          </div>
        </div>
        <hr className="mb-24 w-4/5 mx-auto hidden lg:block text-[#222222] border-[#2B3D51] opacity-30"></hr>
      </footer>
    </>
  )
}

export default App
