import { createBrowserRouter } from "react-router-dom";
import Index from './Index'
import SignIn from './SignIn'
import CiaForm from './CiaForm'
import Main from '../layouts/Main'
import AuthorForm from './AuthorForm'

const router = createBrowserRouter([
    //necesita que pasemos un array de objetos
    //cada objeto tendra la propiedad PATH con la ruta y ELEMENT con el elemento que renderiza ese path
    {path: '/', // con una ruta
     element: <Main />, // renderizo un componente de tipo layaout
     children: [ // cuyos hijes van a ser todas las interfaces que tenga la app
        { path: '/', element: <Index/>},
        { path: '/index', element: <Index/>},
        { path: '/home', element: <Index/>},
        { path: '/signin', element: <SignIn/>},
        { path: '/cia-form', element: <CiaForm/> },
        { path: '/author-form', element: <AuthorForm/>},
    ]}
])

export default router