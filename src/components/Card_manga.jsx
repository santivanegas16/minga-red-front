import { Link as Anchor } from 'react-router-dom';

export default function Card({ title, type, image, color, hover, manga_id}) {
    return (
        <div className='bg-white w-[325px] h-[144px] rounded-[10px] flex justify-between overflow-hidden items-center mt-10'>
            <div className='w-[5px] h-[95px]' style={{ backgroundColor: `${color}` }}></div>
            <div className='w-[136px] h-[77px]'>
                <p className='font-poppins font-medium text-[16px] leading-[15.23px]'> {title} </p>
                <p className='font-poppins font-medium text-[13px] leading-[12.37px]' style={{ color: `${color}` }}> {type} </p>
            </div>
            <Anchor to={'/manga/' + manga_id + '/1'}>
                <img className='rounded-l-[100%] w-[150px] h-[200px]' src={image} alt={title} />
            </Anchor>
        </div>
    )
}