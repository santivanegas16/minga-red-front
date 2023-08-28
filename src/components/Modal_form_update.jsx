import Close from '/img/close.png';
import ListComments from "./ListComments"

export default function Modal_comments({ show, setShow, reload, setReload }) {
    return (
        <>
            <div className="fixed z-10 top-0 md:bg-black bg-[#EBEBEB] w-full h-full md:opacity-50"></div>
            <div className='md:fixed absolute pt-[80px] md:pt-0 z-10 inset-y-[10%] md:inset-x-[25%]  w-full h-full'>
                <div className="relative rounded-2xl w-full md:w-[50%] md:h-[80%] h-full bg-[#EBEBEB] md:overflow-auto  ">
                    <div onClick={() => setShow(!show)} className="cursor-pointer absolute bg-orange-500 hover:bg-orange-700 p-1.5 rounded-full right-[15px] top-[15px]"><img src={Close} alt='close' /></div>
                    <main className="flex w-full bg-[#EBEBEB]  min-h-screen pb-[30px]">
                        <div className="flex flex-col justify-center lg:left-[50%] top-0 pt-[90px] items-center w-full lg:w-[50%]">
                            <p className="font-poppins font-normal whitespace-nowrap left-[108px] text-[36px] lg:pt-0 w-[214px] text-center">
                                New Manga
                            </p>

                            <form className="flex flex-col lg:my-[10px] mt-[60px] items-center lg:mt-[10px]">
                                <input
                                    ref={title}
                                    className="w-[280px] md:w-[350px] lg:w-[420px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 px-3 pb-0 my-[12px] "
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Insert title"
                                />
                                <select
                                    defaultValue="0"
                                    ref={category_id}
                                    className="bg-transparent relative text-black w-[280px] md:w-[350px] lg:w-[420px] h-[24px] px-2 outline-0 border-b-[1px] border-solid border-gray-700 pb-0 mt-[20px] my-[12px]"
                                    name="categories"
                                    id="selectCat"
                                >
                                    <option disabled value="0" className="text-[#9D9D9D]">
                                        Insert category
                                    </option>
                                    {categories?.map((item, index) => (
                                        <option key={index} className="text-black" value={item._id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    ref={cover_photo}
                                    className="w-[280px] md:w-[350px] lg:w-[420px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 p-3 pb-0 my-[12px] "
                                    type="url"
                                    name="cover photo"
                                    id="cover photo"
                                    placeholder="Insert cover photo"
                                />
                                <input
                                    ref={description}
                                    className="w-[280px] md:w-[350px] lg:w-[420px] bg-transparent outline-0 border-b-[1px] border-solid border-gray-700 p-3 pb-0 my-[12px] "
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Insert description"
                                />
                                <ButtonSend onClick={create} />
                            </form>
                        </div>
                        <img
                            className="hidden lg:block min-h-[640px] max-h-screen w-1/2 object-cover"
                            src={Newmanga}
                            alt="newmanga"
                        />
                    </main>
                </div>
            </div>
        </>
    )
}
