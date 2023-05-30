import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Main({children}) {
  return (
    <>
    <Navbar />
    {/* contenido dinamico de cada vista */}
    {children}
    <Footer />
    </>
  )
}
