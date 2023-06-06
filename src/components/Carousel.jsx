import prevIcon from '/img/prev.png';
import nextIcon from '/img/next.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';

export default function Carousel() {
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
    
    let [counter, setCounter] = useState(0)
    const next = () =>{
        setCounter((counter!==categories.length-1) ? (counter = counter+1) : (counter = 0))
        // console.log(counter)
    }
    const prev = () =>{
        setCounter((counter!==0) ? (counter = counter-1) : (counter = categories.length-1))
        // console.log(counter)
    }
    return (
        <div className='h-[265px] bg-gradient-to-r from-[#FF5722] to-[#F97316] rounded-md flex items-center relative'>
            <img onClick={prev} className="absolute left-8 cursor-pointer" src={prevIcon} alt='prev'></img>
            <img className="absolute w-[263px] h-[291px] self-end left-16" src={categories[counter]?.character_photo} alt='character'></img>
            <img className="absolute w-[179px] h-[284px] left-[37%] bottom-[22px] xl:left-[379px] 2xl:right-[57%] 2xl:left-auto" src={categories[counter]?.cover_photo} alt='cover'></img>
            <div className='flex flex-col w-[26%] text-white absolute left-[63%] xl:w-[27%] xl:left-[704px] 2xl:w-[356px] 2xl:right-[18%] 2xl:left-auto'>
                <h4 className='font-roboto text-2xl font-medium mb-2.5'>{categories[counter]?.name.toUpperCase()}</h4>
                <p className='font-roboto text-sm font-normal leading-4'>{categories[counter]?.description}</p>
            </div>
            <img onClick={next} className="absolute right-8 cursor-pointer" src={nextIcon} alt='next'></img>
        </div>
    )
}
