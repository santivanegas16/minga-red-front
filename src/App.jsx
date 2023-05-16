import { useState } from 'react'
import imagenFondo from '/img/Background1.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="w-screen h-screen bg-cover bg-center relative" alt='fondo' style={{ backgroundImage: `url(${imagenFondo})` }}>
        <nav className='flex justify-between'>
            <img className="mt-5 ml-5 w-14 h-14" src='/img/Menu.png' alt='menu'></img>
            <img className="mt-6 mr-9 w-10 h-12" src='/img/logo.png' alt='logo'></img>
        </nav>
        <main className="text-center text-white  flex flex-col justify-center items-center absolute inset-y-1/2 inset-x-5">
          <h1 className='font-sans pb-6 text-5xl leading-10 font-bold'>For the love of manga</h1>
          <h5 className='font-sans text-xl font-normal pb-6 leading-5'>Explore our varieties</h5>
          <button className='bg-white text-orange-500 text-xl cursor-pointer font-medium py-5 lg:py-4 w-11/12 sm:w-4/5 md:w-2/5 lg:w-1/5  rounded-md'>Let’s go!</button>
        </main>
        <footer>

        </footer>


      </div>

    </>
  )
}

export default App
