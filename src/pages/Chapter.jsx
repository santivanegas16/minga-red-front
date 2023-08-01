import nextImg from '../../public/img/ArrowCahpterNext.svg';
import prevImg from '../../public/img/ArrowCahpterPrev.svg';
import comment from '../../public/img/coments.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';
import header from '../header';
import { useDispatch, useSelector } from 'react-redux';
import chapter_actions from '../store/actions/chapters';
let { save_title, save_number } = chapter_actions;

export default function Chapter() {

    const store = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id, page } = useParams();
    const [pages, setPages] = useState([]);
    const [next, setNext] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios(`${apiUrl}chapters/${id}`, header()).then(res => {
            setPages(res.data.response.chapter.pages);
            setNext(res.data.response.next);
            dispatch(save_number({ number: res.data.response.chapter.order }))
            dispatch(save_title({ title: res.data.response.chapter.title }))
            if (page >= 0) { setCount(parseInt(page)) };
        }).catch(error => console.log(error));
    }, [])

    const actionPrev = () => {
        if (count <= 0) {
            setCount(0);
            navigate(`/chapter/${id}/${count}`);
        } else {
            setCount(count - 1);
            navigate(`/chapter/${id}/${count - 1}`);
        }
    }

    const actionNext = () => {
        if (count >= pages.length - 1) {
            setCount(0);
            window.location.replace(`/chapter/${next}/0`);
        } else {
            setCount(count + 1);
            navigate(`/chapter/${id}/${count + 1}`);
        }
    }

    return (
        <main>
            <div className="flex justify-center items-center w-full h-[81px] bg-gradient-to-t from-[#FF5722] to-[#F97316]">
                <h1 className="font-roboto font-normal text-[15px] leading-[17.58px] text-white"> {store.chapters?.number} - {store.chapters?.text} </h1>
            </div>
            <div className='flex justify-center items-center px-5 h-screen md:mt-5 lg:mt-0 md:mb-10 lg:mb-0'>
                <div className="w-[430px] lg:w-[600px] h-[789px] bg-center bg-no-repeat bg-contain flex" style={{ backgroundImage: `url(${pages[count]})` }}>
                    <button onClick={() => actionPrev()}
                        className='w-[50%] flex items-center justify-start pl-5 hover:opacity-50'>
                        <img src={prevImg} alt="Prev" />
                    </button>
                    <button onClick={() => actionNext()}
                        className='w-[50%] flex items-center justify-end pr-5'>
                        <img src={nextImg} alt="Next" />
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center m-5'>
                <img src={comment} alt="Comment" />
                <p>42</p>
            </div>
        </main>
    )
}