import { useEffect, useState } from 'react';
import apiUrl from '../apiUrl';
import axios from 'axios';
import ButtonManage from './ButtonManage';

export default function Author_mangas() {

    const [logoMangas, setlogoMangas] = useState("")
    const [allMangas, setallMangas] = useState([])
    const [newMangas, setnewMangas] = useState([])
    const [oldMangas, setoldMangas] = useState([])

    useEffect(
        () => {
            let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
            axios(apiUrl + "mangas/news", headers)
                .then(res => {
                    if (res.data.response.logo) {
                        setlogoMangas(res.data.response.logo)
                    } else if (res.data.response.all) {
                        setallMangas(res.data.response.all)
                    } else {
                        setnewMangas(res.data.response.new)
                        setoldMangas(res.data.response.old)

                    }
                })
                .catch(err => console.log(err))
        }, []
    )

    return (
        <>
            {(allMangas.length !== 0) ?
                <div className='flex flex-col items-center '>
                    <div className="grid max-[400px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-5 w-full md:w-[70%] mt-10 justify-items-center">
                        {allMangas?.map((each, index) => (
                            <div key={index}>
                                <img className="w-[174px] h-[248px] object-cover rounded-2xl " src={each?.cover_photo} />
                                <h1 className='font-roboto font-normal text-lg mt-2'>{each?.title}</h1>
                            </div>
                        ))}
                    </div>
                    <ButtonManage />
                </div> : ""}
            {(newMangas.length !== 0 && oldMangas.length !== 0) ?
                <div className='flex flex-col items-center '>
                    <div className="grid max-[400px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-5 w-full md:w-[70%] mt-10 justify-items-center ">
                        {newMangas?.map((each, index) => (
                            <div className="" key={index}>
                                <img className="w-[174px] h-[248px] object-cover rounded-2xl transition hover:scale-110 cursor-pointer" src={each?.cover_photo} />
                                <h1 className='font-roboto font-normal text-lg mt-3'>{each?.title}</h1>
                            </div>
                        ))}
                    </div>
                    <ButtonManage />
                </div> : ""}
            {logoMangas ? <div className='flex flex-col items-center '>
                <img className="mt-10" src={logoMangas} />
                <ButtonManage />
            </div> : ""}


        </>
    )
}