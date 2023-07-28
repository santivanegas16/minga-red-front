import Bg_mangas from '../../public/img/Bg_mangas.png';
import Search from '../../public/img/Search_mangas.svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../apiUrl.js';
import Headers from '../header.js';
import Card from '../components/Card_manga';

export default function Mangas() {

    const [mangas, setMangas] = useState([]);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [search, setSearch] = useState("");
    const { page } = useParams();

    useEffect(() => {
        axios.get(apiUrl + `mangas?title=${search}&page=${page}`, Headers()).then(res => {
            setMangas(res.data.response.mangas);
            setNext(res.data.response.next);
            setPrev(res.data.response.prev);
        }).catch(error => console.log(error));
    }, [search])

    return (
        <main>
            <div className='w-full h-[369px] bg-cover bg-center flex flex-col items-center justify-center' style={{ backgroundImage: `url(${Bg_mangas})` }}>
                <h1 className='w-[168px] h-[38px] font-poppins font-bold text-[40px] leading-[38.07px] m-10 text-white'> Mangas </h1>
                <div className='flex items-center w-[393px] rounded-[80px] bg-black'>
                    <span className='absolute w-[37px] h-[37px] m-5'> <img src={Search} alt="Search" /> </span>
                    <input onChange={(e) => { setSearch(e.target.value) }}
                        className='font-poppins font-normal text-[24px] leading-[22.84px] p-[10px] text-center w-full rounded-[80px] border-2 hover:border-[#F97316]'
                        type="text"
                        placeholder='Find your manga here' />
                </div>
            </div>
            <div className='bg-[#EBEBEB] relative -top-[70px] w-[430px] rounded-t-[80px] flex flex-col'>
                <div className='flex justify-around w-full h-[40px] mt-[50px] mb-[50px]'>
                    <button className='w-[65px] h-[35px] rounded-[50px] bg-[#FFE0DF] text-[#EF8481] font-poppins font-medium text-[12px leading-[11.42px]]'> Shonen </button>
                    <button className='w-[65px] h-[35px] rounded-[50px] bg-[#FFDFC8] text-[#FC9C57] font-poppins font-medium text-[12px leading-[11.42px]]'> Seinen </button>
                    <button className='w-[65px] h-[35px] rounded-[50px] bg-[#D1FBF0] text-[#00BA88] font-poppins font-medium text-[12px leading-[11.42px]]'> Shojo </button>
                    <button className='w-[65px] h-[35px] rounded-[50px] bg-[#E0DBFF] text-[#8883F0] font-poppins font-medium text-[12px leading-[11.42px]]'> Kodomo </button>
                </div>
                <div className='h-full flex flex-col items-center justify-around'>
                    {mangas.map((manga, i) => <Card key={i} title={manga.title} image={manga.cover_photo} />)}
                </div>
                <div>
                    {next && <button>Next</button>}
                    {prev && <button>Prev</button>}
                </div>
            </div>
        </main>
    )
}