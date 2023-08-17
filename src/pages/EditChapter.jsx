import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { useParams, useNavigate } from 'react-router-dom';
import ButtonEdit from '../components/ButtonEdit';
import ButtonDelete from '../components/ButtonDelete'
import bg_register from '../../public/img/image4.png';

export default function EditChapter() {

    const { manga_id } = useParams()
    console.log(manga_id)

	// let [categories, setCateogries] = useState([]);
	// useEffect(
	// 	() => {
    //         let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
	// 		axios(apiUrl + "edit/" + manga_id, headers)
	// 			.then((res) => {
	// 				// console.log(res)  //se utiliza para saber donde esta la informacion que necesito
	// 				setCateogries(res.data.response); //setiamos la informacion en una variable de estado
	// 			})
	// 			.catch((err) => console.log(err));
	// 	},
	// 	[] // si el array esta vacio el efecto se ejecuta por primera y unica vez cuando el componente se monta
	// 	//si el array tiene algunas variables el efecto se ejecuta cada vez que se modifica el valor de los parametros
	// );

    return (
        <main className="flex min-h-screen w-full pt-[30px] pb-[30px]">

            <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center">
                <form className='w-4/5 h-auto flex flex-col items-center'>
                    <h1 className='font-poppins leading-10 font-normal text-4xl mb-[30px]'>Edit Chapter</h1>
                    <input className='w-[280px] border border-transparent border-b-[#424242] px-4 py-2' type="text" placeholder="name of the manga" id="title" />
                    <select
						defaultValue="0"
						// ref={category_id}
						className="w-[280px] border border-transparent border-b-[#424242] px-4 py-2"
						name="categories"
						id="selectCat"
					>
						<option disabled value="0" className="text-[#9D9D9D]">
							select chapter
						</option>
						{/* {categories?.map((item, index) => (
							<option key={index} className="text-black" value={item._id}>
								{item.name}
							</option>
						))} */}
					</select>
                    <select
						defaultValue="0"
						// ref={category_id}
						className="w-[280px] border border-transparent border-b-[#424242] px-4 py-2"
						name="categories"
						id="selectCat"
					>
						<option disabled value="0" className="text-[#9D9D9D]">
							select data
						</option>
						{/* {categories?.map((item, index) => (
							<option key={index} className="text-black" value={item._id}>
								{item.name}
							</option>
						))} */}
					</select>
                    {/* <input className='w-[280px] border border-transparent border-b-[#424242] px-4 py-2' type="text" placeholder="Insert order" id="order" /> */}
                    <input className='w-[280px] border border-transparent border-b-[#424242] px-4 py-2' type="text" placeholder="data to edit" id="pages" />
                    < ButtonEdit />
                    < ButtonDelete />
                </form>
            </div>
            <div className="hidden lg:flex items-center justify-center w-1/2 p-4 min-h-screen max-h-screen">
                <img className="w-4/5 h-auto" src={bg_register} alt="Register" />
            </div>

        </main>
    );
}