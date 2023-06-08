import Welcome from "../components/Welcome"
import Carousel from "../components/Carousel"
import imagenFondo from '/img/Background1.png';

export default function Index() {
    return (
        <>
            <div className="w-full h-screen lg:h-[646px] lg:-top-0.5 bg-cover bg-center" alt='fondo' style={{ backgroundImage: `url(${imagenFondo})` }}></div>
            <Welcome />
            <main className='hidden lg:block mx-[91px] mt-[57px] mb-[58px]'>
                <Carousel />
            </main>
        </>
    )
}
