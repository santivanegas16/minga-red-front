import { useState } from 'react'
import Main from './layouts/Main';
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
      <Main>
        <Index data={data} />
      </Main>
    </>
  )
}

export default App
