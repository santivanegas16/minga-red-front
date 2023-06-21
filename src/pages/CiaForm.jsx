export default function CiaForm() {
    return (
        <div className='w-full h-screen flex flex-col items-center
                        pt-[77px] bg-gray-light font-poppins'>

            <div className='w-[280px] sm:w-[320px] lg:w-[400px] xl:w-[425px] 2xl:w-[450px]
                            h-full flex flex-col'>

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
    )
}
