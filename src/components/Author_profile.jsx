import { useEffect, useState } from 'react';
import apiUrl from '../apiUrl';
import axios from 'axios';
import cake from '/img/cake.svg'
import location from '/img/location-marker.svg'
import edit from '/img/pencil-alt.svg'



export default function Author_profile() {

    const [author, setauthor] = useState({})

    useEffect(
        () => {
            let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
            axios(apiUrl + "authors/me", headers)
                .then(res => {
                    setauthor(res.data.response.profile)
                })
                .catch(err => console.log(err))
        }, []
    )

    const date = author?.date ? new Date(author?.date) : ''
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleString('es-ES', options)

    const [firstLN, secondLN] = author?.last_name ? author?.last_name.split(" ") : ['', ''];

    return (
        <div className="flex justify-center mt-5">
            <img className='w-[71px] h-[71px] rounded-[50px] object-cover' src={author?.photo} alt='Perfil' />
            <div className='flex flex-col justify-center  ml-5  mr-5 font-poppins'>
                <p className='text-xl font-roboto font-normal'> {author?.name ? author.name.charAt(0).toUpperCase() + author.name.slice(1).toLowerCase() : ''} {firstLN ? firstLN.charAt(0).toUpperCase() + firstLN.slice(1).toLowerCase() : ''}  {secondLN ? secondLN.charAt(0).toUpperCase() + secondLN.slice(1).toLowerCase() : ''}</p>
                <p className='text-base font-roboto font-normal flex text-[#9D9D9D]'> <img className="mr-1" src={location} /> {author?.city ? author.city.charAt(0).toUpperCase() + author.city.slice(1).toLowerCase() : ''}, {author?.country ? author.country.charAt(0).toUpperCase() + author.country.slice(1).toLowerCase() : ''}</p>
                <p className='text-base font-roboto font-normal flex text-[#9D9D9D]'> {author?.date ? <img className="mr-1" src={cake} /> : ''}{formattedDate} </p>
            </div>
            <img className='cursor-pointer transition hover:scale-110' src={edit} alt='Perfil' />
        </div>

    )
}