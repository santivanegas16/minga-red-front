import chapterImg from '../../public/img/chapter.png';
import nextImg from '../../public/img/ArrowCahpterNext.svg';
import prevImg from '../../public/img/ArrowCahpterPrev.svg';
import comment from '../../public/img/coments.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';
import header from '../header';

export default function Chapter() {

    const navigate = useNavigate();

    const { id, page } = useParams();
    const [title, setTitle] = useState("");
    const [pages, setPages] = useState([]);
    const [next, setNext] = useState("");
    const [order, setOrder] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios(`${apiUrl}chapters/${id}`, header()).then(res => {
            setTitle(res.data.response.chapter.title);
            setPages(res.data.response.chapter.pages);
            setNext(res.data.response.next);
            setOrder(res.data.response.chapter.order);
            if (page >= 0) { setCount(parseInt(page)) };
        }).catch(error => console.log(error));
    }, [])

    const actionPrev = () => {
        console.log('FirstPrev ' + count);
        if (count <= 0) {
            setCount(0);
            navigate(`/chapter/${id}/${count}`);
        } else {
            setCount(count - 1);
            navigate(`/chapter/${id}/${count - 1}`);
        }
        
        console.log('SecondPrev ' + count);
    }

    const actionNext = () => {
        console.log('FirstNext ' + count);
        if (count >= pages.length - 1) {
            setCount(pages.length - 1);
            navigate(`/chapter/${id}/${count}`);
        } else {
            setCount(count + 1);
            navigate(`/chapter/${id}/${count + 1}`);
        }
        console.log('SecondNext ' + count);
    }

    return (
        <main>
            <div className="flex justify-center items-center w-full h-[81px] bg-gradient-to-t from-[#FF5722] to-[#F97316]">
                <h1 className="font-roboto font-normal text-[15px] leading-[17.58px] text-white"> {order} - {title} </h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className="w-[430px] h-[789px] bg-center bg-cover flex justify-between" style={{ backgroundImage: `url(${pages[count]})` }}>
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