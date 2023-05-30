export default function Welcome() {
  return (
    <div className="text-center lg:text-start text-white flex flex-col justify-center items-center lg:items-start lg:ml-[108px] absolute inset-y-1/2 inset-x-5 lg:block  lg:top-[225px]">
        <h1 className='font-poppins pb-6 lg:pb-4 text-[40px] leading-10 font-bold lg:text-[64px] '>For the love of manga</h1>
        <h5 className='font-poppins text-xl lg:text-2xl font-normal pb-6 lg:pb-4 leading-5'>Explore our varieties</h5>
        <h5 className='font-poppins hidden lg:flex text-base font-semibold pb-6 lg:pb-4 leading-5'>#MingaLove<p className=''>❤️</p></h5>
        <button className='bg-white text-orange-500 text-xl  cursor-pointer font-roboto font-medium py-[15.5px] w-[363px] rounded-md lg:hidden'>Let’s go!</button>
        <button className='bg-white text-orange-500 text-2xl cursor-pointer font-roboto font-medium w-[240px] py-[13.5px] rounded-md hidden lg:block'>Sign In!</button>
      </div>
  )
}
