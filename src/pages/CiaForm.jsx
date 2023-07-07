import ButtonSend from '../components/ButtonSend'
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import apiUrl from "../apiUrl"
import axios from "axios"
import Swal from 'sweetalert2';

export default function CiaForm() {
    // Hook that allows redirections
    const navigate = useNavigate()
    // Hook that is used to create and manipulate references to DOM elements
    const name = useRef()
    const website = useRef()
    const logo = useRef()
    const description = useRef()

    const companyForm = () => {
        let data = {
            name: name.current.value,
            website: website.current.value,
            logo: logo.current.value,
            description: description.current.value
        }
        let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
        axios.post(apiUrl + "companies", data, headers)
        .then(() => {
            Swal.fire({
                "title": "New company",
                "icon": "success",
                "text" : "Company registered",
                "confirmButtonColor": "#F97316"
             })
             setTimeout(() => window.location.replace('/'), 1500)
        })
        .catch(error => {
            if (error.response.data?.messages) {
                Swal.fire({
                    "title": "Error creating a company",
                    "icon": "error",
                    "html": error.response.data.messages.map(each => `<p>${each}</p>`).join(""),
                    "confirmButtonColor": "#FF5722"
                })
            } else {
                Swal.fire({
                    "title": "Error creating a company",
                    "icon": "error",
                    "html": `<p>${error.response.data}</p>`,
                    "confirmButtonColor": "#FF5722"
                })
            }
        }
        )
    }
    return (
        <div className='min-h-screen flex items-center mb-10 bg-gray-light font-poppins'>

            {/* form side */}
            <div className='min-h-screen pt-[77px] w-full lg:w-1/2 flex flex-col items-center justify-center'>

                <div className='h-[87vh] max-h-[627px] flex flex-col'>

                    <div className='h-full flex flex-col items-center gap-9'>
                        <h1 className="text-gray-dark text-[36px] leading-[54px] tracking-normal">
                            New Company
                        </h1>
                        <form className='h-full h-max-[527px] w-full flex flex-col items-center justify-between'>
                            <img
                                className="w-[88px] h-[88px]"
                                src={ '/img/Profile_form.png' } alt='profile photo' />

                            <div className="h-[75%] w-[280px] md:w-[350px] lg:w-[420px] flex flex-col justify-between">
                                <input
                                    className='border-b border-gray-border bg-transparent px-2 mt-[20px]'
                                    placeholder='Name' type="text"
                                    ref={name} id="name" />
                                <input
                                    className='border-b border-gray-border bg-transparent px-2'
                                    placeholder='Website' type="url"
                                    ref={website} id="website" />
                                <input
                                    className='border-b border-gray-border bg-transparent px-2'
                                    placeholder='URL Profile Image' type="url"
                                    ref={logo} id="logo" />
                                <input
                                    className='border-b border-gray-border bg-transparent px-2'
                                    placeholder='Description' type="text"
                                    ref={description} id="description" />

                                <div className='flex flex-col justify-center items-center mb-[10px]'>
                                    <ButtonSend onClick={companyForm} />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            {/* img side */}
            <img className="hidden lg:flex min-h-screen w-1/2 object-cover" src={'/img/Bg_form.png'} alt="left" />

        </div>
    )
}
