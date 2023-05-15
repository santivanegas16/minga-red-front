import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className='w-full h-screen flex flex-col items-center justify-center bg-neutral-800 text-center'>
        <div className='flex space-x-9 mb-8'>
        <a className="" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo h-14" alt="Vite logo" />
        </a>
        <a className="" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-14" alt="React logo" />
        </a>
        </div>

        <h1 className='text-gray-300 font-bold text-3xl'>Vite + React</h1>
      <div className="text-gray-300 mt-14 card ">
        <button className="bg-black  p-1.5 px-4 rounded-lg mb-2 " onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-gray-500 mt-12 ">
        Click on the Vite and React logos to learn more
      </p>
      <img className='rounded-full h-24 mt-5 object-cover  shadow-lg shadow-white/50 hover:shadow-green-200/50' src="https://mindhubweb.com/android-chrome-192x192.png" />
      </div>
      
    </>
  )
}

export default App
