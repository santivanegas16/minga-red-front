export default function CiaForm() {
    return (
        <div className='h-screen flex mb-10 bg-gray-light font-poppins'>

            <div className="w-full lg:w-1/2 h-full min-h-[560px] pt-[77px]
                            flex justify-center">

                <div className='h-full flex flex-col
                                w-[280px] md:w-[350px] lg:w-[420px]'>

                    <div className="w-full h-full mt-[10%] mb-[20%] flex flex-col items-center justify-center gap-9">

                        <h1 className="text-gray-dark text-[36px] leading-[54px] tracking-normal">
                            New Company
                        </h1>

                        <form className='flex flex-col items-center justify-between w-full h-[85%] min-h-[389px] max-h-[527px]'>
                            <img
                                className="w-[88px] h-[88px]"
                                src={ '/img/profile.png' } alt='profile photo' />

                            <div className="flex flex-col w-full h-[70%] justify-between">
                                <input
                                    className='border-b border-gray-border bg-gray-light px-2'
                                    placeholder='Name' type="text"
                                    name="name" id="name" />
                                <input
                                    className='border-b border-gray-border bg-gray-light px-2'
                                    placeholder='Website' type="url"
                                    name="url" id="wesite" />
                                <input
                                    className='border-b border-gray-border bg-gray-light px-2'
                                    placeholder='URL Profile Image'
                                    type="url" name="profile-img" id="profile-img" />
                                <input
                                    className='border-b border-gray-border bg-gray-light px-2'
                                    placeholder='Description'
                                    type="text" name="description" id="description" />

                                <button
                                    className='py-5 text-2xl font-bold leading-[36px] rounded-full
                                            bg-orange-primary hover:bg-orange-secondary' >
                                    <span className="text-white">Send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex w-1/2 h-full">
                <img className="w-full object-cover" src={'/img/left.png'} alt="left" />
            </div>

        </div>
    )
}
