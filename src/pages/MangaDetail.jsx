import reactions from "/img/reactions.svg"
import raiting from "/img/raiting.svg"
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';
import { useParams } from 'react-router-dom';
import Category from '../components/Category_mangas';
import Switch_manga_chapters from '../components/Switch_manga_chapters';

export default function MangaDetail() {

  const { manga_id } = useParams()

  const [Manga, setManga] = useState([])
  const [toggle, setToggle] = useState(true)

  useEffect(
    () => {
      let headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` } }
      axios(apiUrl + "mangas/" + manga_id, headers)
        .then(res => {
          setManga(res.data.response.manga)
        })
        .catch(err => console.log(err))
    }, []
  )


  return (
    <>
      <div className="min-h-screen w-full pt-[100px] bg-[#EBEBEB] pb-[30px] flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className='px-5 md:flex md:flex-col md:items-center'>
            <img className="h-[352px] object-contain" src={Manga?.cover_photo} />
            {toggle ?
              <h1 className="max-[350px]:text-[30px] text-[40px] font-normal w-min md:w-full font-poppins text-justify sm:text-center leading-none pt-2">{Manga.title}</h1>
              :
              <h1 className="max-[350px]:text-[20px] text-[40px] font-normal w-min md:w-full font-poppins text-justify sm:text-center leading-none pt-2">Chapters</h1>
            }
          </div>
          {toggle ?
            <div>
              <div className='flex justify-between pt-2 px-5'>
                <Category name={Manga.category_id?.name} color={Manga.category_id?.color} hover={Manga.category_id?.hover} />
                <h2 className='font-poppins font-medium text-xl text-[#9D9D9D]'>{Manga.author_id?.name.charAt(0).toUpperCase() + Manga.author_id?.name.slice(1).toLowerCase()}</h2>
              </div>
              <div className="pt-5">
                <img src={reactions} />
                <img className="pt-2" src={raiting} />
              </div>
            </div>
            :
            ""
          }

          <Switch_manga_chapters toggle={toggle} setToggle={setToggle} />
          {toggle ?
            <div className='w-[80%] sm:w-[60%] lg:w-[40%] pt-3 text-justify text-xs font-normal'>{Manga?.description}</div> 
            : 
            <div className="text-center pt-5 text-[40px]">aca se muestran los chapters</div>}
        </div>
      </div>


    </>
  )
}
