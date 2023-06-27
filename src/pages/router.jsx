import { createBrowserRouter } from "react-router-dom";
import Index from './Index'
import Register from './Register'
import CiaForm from './CiaForm'
import Main from '../layouts/Main'
import AuthorForm from './AuthorForm'
import MangaForm from './MangaForm';
import Login from './Login';

const router = createBrowserRouter([
    //necesita que pasemos un array de objetos
    //cada objeto tendra la propiedad PATH con la ruta y ELEMENT con el elemento que renderiza ese path
    {
        path: '/', // con una ruta
        element: <Main />, // renderizo un componente de tipo layaout
        children: [ // cuyos hijes van a ser todas las interfaces que tenga la app
            { path: '/', element: <Index /> },
            { path: '/index', element: <Index /> },
            { path: '/home', element: <Index /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: '/cia-form', element: <CiaForm /> },
            { path: '/author-form', element: <AuthorForm /> },
            { path: '/manga-form', element: <MangaForm /> },
        ]
    }
])

export default router