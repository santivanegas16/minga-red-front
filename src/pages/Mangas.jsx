import Bg_mangas from '../../public/img/Bg_mangas.png';
import Search from '../../public/img/Search_mangas.svg';

export default function Mangas() {
    return (
        <main className='h-screen'>
            <img className='w-full h-[369px]' src={Bg_mangas} alt="Mangas" />
            <h1 className='w-[168px] h-[38px] font-poppins font-bold text-[40px] leading-[38.07px]'> Mangas </h1>
            <div className='flex items-center w-[393px] h-[76px] rounded-[80px] bg-black'>
                <span className='absolute w-[37px] h-[37px] m-5'> <img src={Search} alt="Search" /> </span>
                <input
                    className='font-poppins font-normal text-[24px] leading-[22.84px] text-center w-full p-[26px] rounded-[80px] border-2 hover:border-[#F97316]' 
                    type="text" 
                    placeholder='Find your manga here' />
            </div>
            <div>
                <div className='flex justify-between'>
                    <button className='bg-pink-400'> Shonen </button>
                    <button className='bg-orange-400'> Seinen </button>
                    <button className='bg-green-400'> Shojo </button>
                    <button className='bg-purple-400'> Kodomo </button>
                </div>
                <div>

                </div>
            </div>
        </main>
    )
}