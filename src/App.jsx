import { useState } from 'react'
import imagenFondo from '/img/Background1.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';


function App() {
  const [count, setCount] = useState(0)

  let data = [{
    name: "Shonen",
    character_photo: "/img/carrusel1.png",
    cover_photo: "/img/carrusel2.png",
    description: "Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out."
  }]

  return (
    <>
      <div className="w-full h-screen lg:h-[646px] lg:-top-0.5 bg-cover bg-center" alt='fondo' style={{ backgroundImage: `url(${imagenFondo})` }}>
      </div>
      <Navbar />
      <Index data={data} />    
      <Footer />
    </>
  )
}

export default App
