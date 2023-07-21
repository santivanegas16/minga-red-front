import { useEffect, useState } from 'react';
import apiUrl from '../apiUrl';
import axios from 'axios';

export default function Author() {

    const [author, setauthor] = useState({})

    useEffect(
        ()=> {
            let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
            axios(apiUrl+"authors/me",headers)
            .then(res => {
                setauthor(res.data.response.profile)
            })
            .catch(err => console.log(err))
        },[]
    )
    
    const date = author?.date ? new Date(author?.date) : ''
    
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleString('es-ES', options)
   
    return (
        <div className="h-screen mt-[100px] flex justify-center">
            <div>
                <div className='flex mt-5'>
                    <img className='w-[71px] h-[71px] rounded-[50px] object-cover' src={author.photo} alt='Perfil' />
                    <div className='flex flex-col justify-center  ml-3 font-poppins'>
                        <p className='text-xl font-normal'> {author?.name ? author.name.charAt(0).toUpperCase() + author.name.slice(1).toLowerCase() : ''} {author?.last_name ? author.last_name.charAt(0).toUpperCase() + author.last_name.slice(1).toLowerCase() : ''}</p>
                        <p className='text-sm font-medium'> {author?.city ? author.city.charAt(0).toUpperCase() + author.city.slice(1).toLowerCase() : ''}, {author?.country ? author.country.charAt(0).toUpperCase() + author.country.slice(1).toLowerCase() : ''}</p>
                        <p className='text-sm font-medium'> {formattedDate} </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
