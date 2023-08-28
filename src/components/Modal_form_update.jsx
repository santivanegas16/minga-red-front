import Close from '/img/close.png';
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import apiUrl from '../apiUrl';
import Swal from "sweetalert2";
import header from "../header";
import ButtonSend from "./ButtonSend";
import { useDispatch } from "react-redux";
import manga_actions from "../store/actions/mangas";
const { update_manga } = manga_actions;

export default function Modal({ show, setShow, manga_id, reload, setReload }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const title = useRef();
    const photo = useRef();
    const category = useRef();
    const description = useRef();
    const [manga, setManga] = useState({});
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios(apiUrl + "mangas/" + manga_id, header())
            .then((res) => {
                console.log(res)
                setManga(res.data.response.manga);
            })
            .catch((err) => console.log(err));
        axios(apiUrl + "categories")
            .then((res) => {
                console.log(res)
                setCategories(res.data.response);
            })
            .catch((err) => console.log(err));
    }, []);

    const update = () => {
        let cat = categories.find((each) => each._id === category.current.value);
        let data = {
            title: title.current.value?.trim(),
            category_id: cat?._id,
            cover_photo: photo.current.value?.trim(),
            description: description.current.value?.trim(),
        };
        //console.log(data);
        Swal.fire({
            title: "Do you want to update the changes?",
            showCancelButton: true,
            confirmButtonText: "Update",
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    dispatch(
                        update_manga({ id, data, category: manga.category_id.name })
                    );
                    Swal.fire({
                        icon: "success",
                        text: "Manga Updated!",
                    });
                    navigate("/mymangas");
                } catch (err) {
                    console.log(err);
                    Swal.fire({
                        icon: "error",
                        html: err.response.data.messages
                            .map((each) => `<p>${each}</p>`)
                            .join(""),
                    });
                }
            }
        });
    };

    return (
        <>
            <div className="fixed z-10 top-0 left-0 md:bg-black bg-[#EBEBEB] w-full h-full md:opacity-50"></div>
            <div className='md:fixed absolute pt-[80px] md:pt-0 z-10 inset-y-[10%] md:inset-x-[25%]  w-full h-full'>
                <div className="relative rounded-2xl w-full md:w-[50%] md:h-[80%] h-full bg-[#EBEBEB] md:overflow-auto  ">
                    <div onClick={() => setShow(!show)} className="cursor-pointer absolute bg-orange-500 hover:bg-orange-700 p-1.5 rounded-full right-[15px] top-[15px]"><img src={Close} alt='close' /></div>
                    <input
                        ref={title}
                        className="w-[280px] md:w-[350px] lg:w-[420px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 p-3 pb-0 my-[12px] "
                        type="text"
                        name="Title"
                        placeholder={manga.title}
                    />
                    <input
                        ref={description}
                        className="w-[280px] md:w-[350px] lg:w-[420px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 p-3 pb-0 my-[12px] "
                        type="text"
                        name="Description"
                        placeholder={manga.description}
                    />
                    <input
                        ref={photo}
                        className="w-[280px] md:w-[350px] lg:w-[420px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 p-3 pb-0 my-[12px] "
                        type="text"
                        name="Photo"
                        placeholder={manga.cover_photo}
                    />
                    <select
                        ref={category}
                        className="bg-transparent relative text-black w-[280px] md:w-[350px] lg:w-[420px] h-[24px] px-2 outline-0 border-b-[1px] border-solid border-gray-700 pb-0 mt-[20px] my-[12px]"
                        name="categories"
                        id="selectCat"
                    >

                        {categories?.map((item, index) => {
                            if (item.name == manga.category_id?.name) {
                                return <option key={index} className="text-black" value={item._id} selected >
                                    {item.name}
                                </option>
                            } else {
                                return <option key={index} className="text-black" value={item._id} >
                                    {item.name}
                                </option>
                            }

                        })}
                    </select>
                </div>
            </div>
        </>
    )
}
