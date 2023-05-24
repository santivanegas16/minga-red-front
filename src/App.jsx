import { useState } from 'react'
import imagenFondo from '/img/Background1.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="w-full h-screen lg:h-[646px] lg:-top-0.5 bg-cover bg-center relative " alt='fondo' style={{ backgroundImage: `url(${imagenFondo})` }}>
          <nav className='flex justify-between'>
            <img className="mt-[21px] ml-[21px] w-14 h-14 lg:mt-[34px] lg:ml-[91px]" src='/img/Menu.png' alt='menu'></img>
            <img className="mt-6 mr-9 w-10 h-12 lg:hidden" src='/img/LogoMobile.png' alt='logo'></img>
            <img className="mt-[44px] mr-[91px] w-[193px] h-[42px] hidden lg:block" src='/img/Logo.png' alt='logo'></img>
          </nav>

          <main className="text-center lg:text-start text-white flex flex-col justify-center items-center lg:items-start lg:ml-[108px] absolute inset-y-1/2 inset-x-5">
            <h1 className='font-poppins pb-6 lg:pb-4 text-[40px] leading-10 font-bold lg:text-[64px] '>For the love of manga</h1>
            <h5 className='font-poppins text-xl lg:text-2xl font-normal pb-6 lg:pb-4 leading-5'>Explore our varieties</h5>
            <h5 className='font-poppins hidden lg:flex text-base font-semibold pb-6 lg:pb-4 leading-5'>#MingaLove<p className=''>❤️</p></h5>
            <button className='bg-white text-orange-500 text-xl  cursor-pointer font-roboto font-medium py-[15.5px] w-[363px] rounded-md lg:hidden'>Let’s go!</button>
            <button className='bg-white text-orange-500 text-2xl cursor-pointer font-roboto font-medium w-[240px] py-[13.5px] rounded-md hidden lg:block'>Sign In!</button>
          </main>
        </div>

      <footer>
        <div className="mt-5 mb-3 flex justify-center items-center">
          <a className="px-16 text-base font-poppins font-normal leading-6 text-[#222222]" href='#'>Home</a>
          <a className="px-16 text-base font-poppins font-normal leading-6 text-[#222222]" href='#'>Mangas</a>
        </div>
        <hr className="w-4/5 mx-auto lg:hidden text-[#222222] border-[#2B3D51] opacity-30"></hr>
        <div className="my-4 flex flex-col justify-center items-center">
          <img className="" src='/img/LogoDosP.png' alt='logo' />
          <div className="my-5 flex justify-center items-center">
            <a href='#'><img className="px-5" src='/img/Facebook.svg' alt='logo' /></a>
            <a href='#'><img className="px-5" src='/img/Twitter.svg' alt='logo' /></a>
            <a href='#'><img className="px-5" src='/img/Vimeo.svg' alt='logo' /></a>
            <a href='#'><img className="px-5" src='/img/Youtube.svg' alt='logo' /></a>
          </div>
          <button className='flex justify-center items-center bg-orange-500 text-white text-base cursor-pointer font-poppins font-normal leading-4 h-[43px] w-[221px] mb-5 rounded-md'>Donate <img className="ml-5 mt-1" src='/img/Union.svg' alt='union' /></button>
          <hr className="w-4/5 mx-auto lg:block text-[#222222] border-[#2B3D51] opacity-30"></hr>

        </div>
      </footer>
    </>
  )
}

export default App
