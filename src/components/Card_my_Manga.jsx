import { Link as Anchor } from 'react-router-dom';
import mas from '../../public/img/mas.svg'
import edit from '../../public/img/pencil.svg'
import Modal_form_update from './Modal_form_update.jsx';
import { useState } from 'react';

export default function Card({ title, type, image, color, hover, manga_id }) {
    const [show2, setShow] = useState(false)
    const [reload, setReload] = useState(false)
    return (
        <div className='relative bg-white w-[325px] h-[158px] rounded-[10px] flex justify-between overflow-hidden items-center mt-8 mb-4 border border-gray-200'>
            <div className='w-[5px] h-[95px]' style={{ backgroundColor: `${color}` }}></div>
            <Anchor to={'/' + manga_id + '/chapther-form'}>
                <img className=' absolute top-5 w-[15px] h-[15px] object-cover' src={mas} alt='More' />
            </Anchor>
            <Anchor to={'/edit/' + manga_id}>
                <img className=' absolute top-5 ml-5 w-[15px] h-[15px]  object-cover' src={edit} alt='pencil' />
            </Anchor>

            <div className='w-[136px] h-[47px]'>
                <p className='font-poppins font-medium text-[16px] leading-[15.23px] mt-6 lg:mt-0'> {title} </p>
                <p className='font-poppins font-medium text-[13px] leading-[12.37px]' style={{ color: `${color}` }}> {type} </p>
                
                <div className=' flex'>

                    <div to='' onClick={() => setShow(!show2)} className="transition hover:scale-110 mt-4 cursor-pointer w-[65px] h-[30px] rounded-[50px] text-white font-poppins font-medium text-[12px] leading-[11.42px] lg:flex justify-center items-center hidden" style={{ backgroundColor: `${hover}`, color: `${color}` }}>Editar</div>
                    {show2 && <Modal_form_update manga_id={manga_id} show={show2} setShow={setShow} reload={reload} setReload={setReload} />}

                    <Anchor to={'/manga/' + manga_id + '/1'} className="transition hover:scale-110 mt-4 cursor-pointer w-[65px] h-[30px] rounded-[50px] text-white font-poppins font-medium text-[12px] leading-[11.42px] lg:flex justify-center items-center hidden" style={{ backgroundColor: `${hover}`, color: `${color}` }}>Eliminar</Anchor>

                </div>
            </div>

            <Anchor to={'/manga/' + manga_id + '/1'}>
                <img className='transition hover:scale-110 rounded-l-[100%] w-[150px] h-[200px] object-cover' src={image} alt={title} />
            </Anchor>
        </div>
    )
}