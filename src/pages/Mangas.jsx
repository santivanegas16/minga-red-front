import Bg_mangas from '../../public/img/Bg_mangas.png';
import Search from '../../public/img/Search_mangas.svg';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../apiUrl.js';
import Headers from '../header.js';
import Card from '../components/Card_manga';
import Category from '../components/Category_mangas';
import { useSelector, useDispatch } from 'react-redux';
import mangasActions from '../store/actions/mangas';
const { save_title } = mangasActions;

export default function Mangas() {

    const store = useSelector(store => store)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(store);

    const [mangas, setMangas] = useState([]);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [categories, setCategories] = useState([]);
    const [checks, setChecks] = useState([]);
    const { page } = useParams();

    const actionNextOrPrev = (numberPage) => {
        navigate(`/mangas/${numberPage}`);
    }

    useEffect(() => {
        axios.get(apiUrl + "categories").then(res => setCategories(res.data.response)).catch(error => console.log(error));
    }, [])

    useEffect(() => {
        axios.get(apiUrl + `mangas?title=${store.mangas.text}&page=${page}`, Headers()).then(res => {
            setMangas(res.data.response.mangas);
            setNext(res.data.response.next);
            setPrev(res.data.response.prev);
        }).catch(error => console.log(error));
    }, [store.mangas.text, page])

    useEffect(() => {
        console.log(checks);
    }, [checks])

    return (
        <main>
            <div className='w-full h-[369px] bg-cover bg-center flex flex-col items-center justify-center' style={{ backgroundImage: `url(${Bg_mangas})` }}>
                <h1 className='w-[168px] h-[38px] font-poppins font-bold text-[40px] leading-[38.07px] m-10 text-white'> Mangas </h1>
                <div className='flex items-center w-[393px] rounded-[80px] bg-black'> 
                    <span className='absolute w-[37px] h-[37px] m-5'> <img src={Search} alt="Search" /> </span>
                    <input onChange={(e) => dispatch(save_title({ title: e.target.value }))} defaultValue={store.mangas.text}
                        className='font-poppins font-normal text-[24px] leading-[22.84px] p-[10px] text-center w-full rounded-[80px] border-2 hover:border-[#F97316]'
                        type="text"
                        placeholder='Find your manga here' />
                </div>
            </div>
            <div className='bg-[#EBEBEB] relative -top-[70px] w-[430px] rounded-t-[80px] flex flex-col'>
                <div className='flex justify-around w-full h-[40px] mt-12'>
                    {categories.map(category => <Category key={category._id} name={category.name} color={category.color} hover={category.hover} value={category._id} action={(e) => { setChecks([e.target.id]) }} />)}
                </div>
                <div className='h-full flex flex-col items-center justify-around'>
                    {mangas.map((manga) => <Card key={manga._id} title={manga.title} image={manga.cover_photo} type={manga.category_id.name} color={manga.category_id.color} />)}
                </div>
                <div>
                    {prev && <button className='bg-blue-600 m-5 w-[50px] h-[50px]' value={prev} onClick={(e) => { actionNextOrPrev(e.target.value) }}>Prev</button>}
                    {next && <button className='bg-red-600 m-5 w-[50px] h-[50px]' value={next} onClick={(e) => { actionNextOrPrev(e.target.value) }}>Next</button>}
                </div>
            </div>
        </main>
    )
}