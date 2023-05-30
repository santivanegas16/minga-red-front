export default function Footer() {
  return (
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
  )
}
