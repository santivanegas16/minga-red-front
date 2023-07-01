import ButtonSend from '../components/ButtonSend'

export default function CiaForm() {
    return (
        <div className='min-h-screen flex items-center mb-10 bg-gray-light font-poppins'>

            {/* form side */}
            <div className='min-h-screen pt-[77px] w-full lg:w-1/2 flex flex-col items-center justify-center'>

                <div className='h-[87vh] max-h-[627px] flex flex-col'>

                    <div className='h-full flex flex-col items-center gap-9'>
                        <h1 className="text-gray-dark text-[36px] leading-[54px] tracking-normal">
                            New Company
                        </h1>
                        <form className='h-full h-max-[527px] w-full flex flex-col items-center justify-between'>
                            <img
                                className="w-[88px] h-[88px]"
                                src={ '/img/Profile_form.png' } alt='profile photo' />

                            <div className="h-[75%] w-[280px] md:w-[350px] lg:w-[420px] flex flex-col justify-between">
                                <input
                                    className='border-b border-gray-border bg-transparent px-2 mt-[20px]'
                                    placeholder='Name' type="text"
                                    name="name" id="name" />
                                <input
                                    className='border-b border-gray-border bg-transparent px-2'
                                    placeholder='Website' type="url"
                                    name="url" id="wesite" />
                                <input
                                    className='border-b border-gray-border bg-transparent px-2'
                                    placeholder='URL Profile Image'
                                    type="url" name="profile-img" id="profile-img" />
                                <input
                                    className='border-b border-gray-border bg-transparent px-2'
                                    placeholder='Description'
                                    type="text" name="description" id="description" />

                                <div className='flex flex-col justify-center items-center mb-[10px]'>
                                    <ButtonSend />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            {/* img side */}
            <img className="hidden lg:flex min-h-screen w-1/2 object-cover" src={'/img/Bg_form.png'} alt="left" />

        </div>
    )
}
