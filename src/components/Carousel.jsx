export default function Carousel({character_photo, cover_photo, name, description}) {
    return (
        <div className='h-[265px] bg-orange-500 rounded-md flex items-center relative'>
            <img className="absolute left-8" src='/img/prev.png' alt='menu'></img>
            <img className="absolute left-9" src={character_photo} alt='menu'></img>
            <img className="absolute left-[37%] bottom-[22px] xl:left-[379px] 2xl:right-[57%] 2xl:left-auto" src={cover_photo} alt='menu'></img>
            <div className='flex flex-col w-[26%] text-white absolute left-[63%] xl:w-[27%] xl:left-[704px] 2xl:w-[356px] 2xl:right-[18%] 2xl:left-auto'>
                <h4 className='font-roboto text-2xl font-medium mb-2.5'>{name}</h4>
                <p className='font-roboto text-sm font-normal leading-[13.33px]'>{description}</p>
            </div>
            <img className="absolute right-8" src='/img/next.png' alt='menu'></img>
        </div>
    )
}
