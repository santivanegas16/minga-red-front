import PerfilDos from '/img/perfil2.png';
import register from '/img/register.png';
import { useNavigate } from 'react-router';
import { useRef } from 'react';

export default function AuthorForm() {

    const navigate = useNavigate()
    const authorForm = () => {
        const [city, country] = city_country.current.value.split(",")
        let data = {
            name: name.current.value,
            last_name: last_name.current.value,
            city: city,
            country: country,
            date: date.current.value,
            photo: photo.current.value
        }
        console.log(data)

        setTimeout(() => navigate('/'), 1000)
    }
    const name = useRef()
    const last_name = useRef()
    const city_country = useRef()
    const date = useRef()
    const photo = useRef()

    return (

        <main className="w-full min-h-screen flex justify-center bg-[#EBEBEB] pb-[30px]">
            <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center pt-[90px] ">
                <h1 className='font-poppins leading-10 font-normal text-4xl mb-[30px]'>New Author</h1>
                <img className='mb-[40px]' src={PerfilDos} alt='Perfil' />
                <form className='flex flex-col items-center w-[280px] md:w-[300px] lg:w-[320px] text-base gap-[12px]'>
                    <input ref={name} className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2' type="text" placeholder="Name" id="name" required />
                    <input ref={last_name} className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2' type="text" placeholder="Last name" id="last_name" />
                    <input ref={city_country} className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2' type="text" placeholder="City, Country" id="city_country" required />
                    <input ref={date} className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2' type="date" id="date" />
                    <input ref={photo} className='w-full border border-transparent border-b-[#424242] bg-[#EBEBEB] px-4 py-2' type="url" placeholder="URL Profile Image" id="photo" required />
                    <input onClick={authorForm} className='bg-gradient-to-r from-[#FF5722] to-[#F97316] text-white text-xl lg:text-2xl cursor-pointer font-roboto font-medium py-[15.5px] lg:py-[11.5px] w-[280px] rounded-full text-center mt-[20px]' type="button" value="Send" />
                </form>
            </div>
            <img className='hidden lg:block h-screen w-1/2 object-cover' src={register} alt='Perfil' />
        </main>

    )
}
