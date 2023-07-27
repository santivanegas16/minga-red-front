import Author_mangas from "../components/Author_mangas"
import Author_profile from "../components/Author_profile"

export default function Author() {

    return (
        <>
            <div className="min-h-screen w-full pt-[100px] bg-[#EBEBEB] pb-[30px]">
                <Author_profile />
                <Author_mangas />
            </div>
        </>
    )
}
