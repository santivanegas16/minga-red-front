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
const { save_title, save_checks } = mangasActions;
let checkeds = [];

export default function Mangas() {

    const store = useSelector(store => store)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [mangas, setMangas] = useState([]);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [categories, setCategories] = useState([]);
    const { page } = useParams();

    const actionNextOrPrev = (numberPage) => {
        navigate(`/mangas/${numberPage}`);
    }

    useEffect(() => {
        axios.get(apiUrl + "categories").then(res => setCategories(res.data.response)).catch(error => console.log(error));
    }, [])

    useEffect(() => {
        axios.get(apiUrl + `mangas?title=${store.mangas.text}&page=${page}&category=${checkeds.join(',')}`, Headers()).then(res => {
            setMangas(res.data.response.mangas);
            setNext(res.data.response.next);
            setPrev(res.data.response.prev);
        }).catch(error => console.log(error));
    }, [store.mangas.text, page, checkeds])

    const actionsChecks = (e) => {
        if (!checkeds.includes(e.target.id)) {
            checkeds.push(e.target.id)
        } else {
            checkeds = checkeds.filter(element => element !== e.target.id)
        }
        console.log(checkeds.join(','));
        // dispatch(save_checks({ checks: checkeds }));
        // console.log(store.mangas.checks)
    }

    return (
        <main className='flex flex-col items-center min-h-screen bg-[#EBEBEB] '>
            <div className='w-full h-[369px] bg-cover bg-center flex flex-col items-center justify-center' style={{ backgroundImage: `url(${Bg_mangas})` }}>
                <h1 className='w-[168px] h-[38px] font-poppins font-bold text-[40px] leading-[38.07px] m-10 text-white'> Mangas </h1>
                <div className='flex items-center max-[380px]:w-[360px] w-[393px] rounded-[80px] bg-black'>
                    <span className='absolute w-[37px] h-[37px] m-5 max-[380px]:hidden'> <img src={Search} alt="Search" /> </span>
                    <input onChange={(e) => dispatch(save_title({ title: e.target.value }))} defaultValue={store.mangas.text}
                        className='font-poppins font-normal text-[24px] leading-[22.84px] p-[10px] text-center w-full rounded-[80px] border-2 hover:border-[#F97316]'
                        type="text"
                        placeholder='Find your manga here' />
                </div>
            </div>
            <div className='bg-[#EBEBEB] lg:bg-white lg:w-[95%] lg:rounded-t-[30px] lg:rounded-b-[30px] lg:-top-[50px] relative -top-[70px] w-full rounded-t-[80px] flex flex-col items-center'>
                <div className='flex h-[40px] w-[90%] sm:w-[50%] md:w-[40%] xl:w-[30%] justify-between mt-12'>
                    {categories.map(category => <Category key={category._id} name={category.name} color={category.color} hover={category.hover} value={category._id} action={(e) => { actionsChecks(e) }} />)}
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 w-full md:w-[70%] mt-2 justify-items-center'>
                    {mangas.map((manga) => <Card key={manga._id} title={manga.title} image={manga.cover_photo} type={manga.category_id.name} color={manga.category_id.color} />)}
                </div>
                <div className="flex justify-center items-center pt-5">
                    {prev && <button className='bg-gradient-to-r from-[#FF5722] to-[#F97316] text-white rounded-full m-5 w-[100px] h-[40px] transition hover:scale-110' value={prev} onClick={(e) => { actionNextOrPrev(e.target.value) }}>Prev</button>}
                    {next && <button className='bg-gradient-to-r from-[#FF5722] to-[#F97316] text-white rounded-full m-5 w-[100px] h-[40px] transition hover:scale-110' value={next} onClick={(e) => { actionNextOrPrev(e.target.value) }}>Next</button>}
                </div>
            </div>
        </main>
    )
}