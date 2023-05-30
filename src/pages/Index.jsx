import Welcome from "../components/Welcome"
import Carousel from "../components/Carousel"

export default function Index({ data }) {
    return (
        <>
            <Welcome />
            <main className='hidden lg:block mx-[91px] mt-[57px] mb-[58px]'>
                <Carousel name={data[0].name} character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} description={data[0].description} />
            </main>
        </>
    )
}
