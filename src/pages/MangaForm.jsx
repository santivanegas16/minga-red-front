import { Link as Anchor,useNavigate } from "react-router-dom";
import { useRef } from "react";
import Newmanga from '/img/new-manga.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';

export default function MangaForm() {

    const navigate = useNavigate()
    const create = ()=>{

        // console.log(title)
        // console.log(title.current.value);
        // console.log(description.current.value);

        let data ={
            title: title.current.value,
            description: description.current.value,
            category_id: category_id.current.value,
            cover_photo: cover_photo.current.value,
        }
        console.log(data);

        navigate('/')
    }
    const title = useRef()
    const description = useRef()
    const category_id = useRef()
    const cover_photo = useRef()

    let [categories, setCateogries] = useState([])
    useEffect(
        ()=>{
            axios(apiUrl+'categories').then(res=> {
                // console.log(res)  //se utiliza para saber donde esta la informacion que necesito
                setCateogries(res.data.response) //setiamos la informacion en una variable de estado
            }).catch(err=> console.log(err))
        },
        []  // si el array esta vacio el efecto se ejecuta por primera y unica vez cuando el componente se monta
        //si el array tiene algunas variables el efecto se ejecuta cada vez que se modifica el valor de los parametros
    )

    return(

        <main className="flex w-full bg-[#EBEBEB]  min-h-screen pb-[30px]">
            

            <div className="flex flex-col lg:left-[50%] top-0 pt-[140px] items-center w-full lg:w-[50%]">
                
                <p className="font-poppins font-normal whitespace-nowrap left-[108px] text-[36px] lg:pt-0 w-[214px] text-center">New Manga</p>
               
                <form className="flex flex-col lg:my-[10px] mt-[60px] lg:mt-[10px]">
                    <input ref={title} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 px-3 pb-0 my-[12px] "type="text" name="title" id="title" placeholder="Insert title" />
                    <select ref={category_id} className="bg-transparent relative text-black w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[24px] px-2 outline-0 border-b-[1px] border-solid border-gray-700 pb-0 mt-[20px] my-[12px]"  name="categories" id="selectCat">
                        <option disabled selected className="text-[#9D9D9D]">Insert category</option>
                        {categories.map(
                            ( item)=>(
                                <option className="text-black" value={item.name}>{item.name}</option>
                            )
                        )}
                       </select>
                       <input ref={cover_photo} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 p-3 pb-0 my-[12px] " type="url" name="cover photo" id="cover photo" placeholder="Insert cover photo" />
                    <input ref={description} className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 p-3 pb-0 my-[12px] " type="text" name="description" id="description" placeholder="Insert description" />
                    <input className="w-[280px] py-3 my-[12px] lg:mt-[50px] mt-[100px] font-poppins font-semibold text-2xl text-white rounded-full bg-gradient-to-r from-[#FF5722] to-[#F97316]" type="button" value="Send" onClick={create} />
                </form>
                
            </div>
            <img className="hidden lg:block min-h-[640px] max-h-screen w-1/2 object-cover" src={Newmanga} alt="newmanga" />
        </main>

    )
}