import { useEffect, useState } from 'react';
import apiUrl from '../apiUrl';
import axios from 'axios';
import cake from '/img/cake.svg'
import location from '/img/location-marker.svg'
import edit from '/img/pencil-alt.svg'
import { useDispatch, useSelector } from 'react-redux';
import authorActions from '../store/actions/authors'


const { saveProfile } = authorActions

export default function Author_profile() {

    // const [author, setauthor] = useState({}) // no necesito un estado local porque voy a guardar los datos globalmente
    const dispatch = useDispatch()
    const store = useSelector(store => store)
    const profile = store.authors.profile
    useEffect(
        () => {
            if (!profile?.name) { // si y solo si no existen los datos del author en el store de redux realizo la peticion correspondiente para obtener los datos
                let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
                axios(apiUrl + "authors/me", headers)
                    .then(res => {
                        // setauthor(res.data.response.profile)
                        //Setiamos variable de estado local
                        //debemos setiar correctamente la variable de estado global correspondiente
                        //despacho la accion correspondiente para cargar esos datos en el store de redux
                        dispatch(saveProfile({
                            profile: res.data.response.profile
                        }))
                    })
                    .catch(err => console.log(err))
            }

        }, []
    )

    const date = profile?.date ? new Date(profile?.date) : ''
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleString('es-ES', options)

    const [firstLN, secondLN] = profile?.last_name ? profile?.last_name.split(" ") : ['', ''];

    return (
        <div className="flex justify-center mt-5">
            <img className='w-[71px] h-[71px] rounded-[50px] object-cover' src={profile?.photo} alt='Perfil' />
            <div className='flex flex-col justify-center  ml-5  mr-5 font-poppins'>
                <p className='text-xl font-roboto font-normal'> {profile?.name ? profile.name.charAt(0).toUpperCase() + profile.name.slice(1).toLowerCase() : ''} {firstLN ? firstLN.charAt(0).toUpperCase() + firstLN.slice(1).toLowerCase() : ''}  {secondLN ? secondLN.charAt(0).toUpperCase() + secondLN.slice(1).toLowerCase() : ''}</p>
                <p className='text-base font-roboto font-normal flex text-[#9D9D9D]'> <img className="mr-1" src={location} /> {profile?.city ? profile.city.charAt(0).toUpperCase() + profile.city.slice(1).toLowerCase() : ''}, {profile?.country ? profile.country.charAt(0).toUpperCase() + profile.country.slice(1).toLowerCase() : ''}</p>
                <p className='text-base font-roboto font-normal flex text-[#9D9D9D]'> {profile?.date ? <img className="mr-1" src={cake} /> : ''}{formattedDate} </p>
            </div>
            <img className='cursor-pointer transition hover:scale-110' src={edit} alt='Perfil' />
        </div>

    )
}