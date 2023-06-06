import prev from '/img/prev.png';
import next from '/img/next.png';

export default function Carousel({character_photo, cover_photo, name, description}) {
    return (
        <div className='h-[265px] bg-gradient-to-r from-[#FF5722] to-[#F97316] rounded-md flex items-center relative'>
            <img className="absolute left-8 cursor-pointer" src={prev} alt='prev'></img>
            <img className="absolute left-14" src={character_photo} alt='character'></img>
            <img className="absolute left-[37%] bottom-[22px] xl:left-[379px] 2xl:right-[57%] 2xl:left-auto" src={cover_photo} alt='cover'></img>
            <div className='flex flex-col w-[26%] text-white absolute left-[63%] xl:w-[27%] xl:left-[704px] 2xl:w-[356px] 2xl:right-[18%] 2xl:left-auto'>
                <h4 className='font-roboto text-2xl font-medium mb-2.5'>{name}</h4>
                <p className='font-roboto text-sm font-normal leading-[13.33px]'>{description}</p>
            </div>
            <img className="absolute right-8 cursor-pointer" src={next} alt='next'></img>
        </div>
    )
}
