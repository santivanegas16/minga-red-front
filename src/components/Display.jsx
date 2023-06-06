import Close from '/img/close.png';
import Perfil from '/img/perfil.png';



export default function Display({ options, show, setShow }) {
    return (
        <div className="fixed z-10 top-0 left-0 bg-gradient-to-r from-[#FF5722] to-[#F97316] w-full h-full lg:w-[380px] ">
            <div className='flex mt-5 ml-5'>
                <img src={Perfil} alt='Perfil' />
                <div className='flex flex-col ml-3 text-white'>
                    <p className='text-base'>Santiago Vanegas Mejia</p>
                    <p className='text-sm'>santiago.vanegasm16@gmail.com</p>
                </div>
            </div>
            <div onClick={() => setShow(!show)} className="cursor-pointer absolute right-[29px] top-[40px]"><img src={Close} alt='close' /></div>
            <div className="absolute top-[85px] w-full lg:w-[380px] flex flex-col items-center">
                {options?.map((each, index) => <div key={index} className='text-white text-center font-poppins text-[15px] font-semibold leading-6 mt-[10px] w-[300px] rounded-lg cursor-pointer py-3 hover:bg-white hover:text-orange-500'>{each.title}</div>)}
            </div>
        </div>
    )
}