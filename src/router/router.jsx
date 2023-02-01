import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import Mostrar from "../pages/Mostrar"
import MostrarPalabra from "../pages/MostrarPalabra"
import Color from "../pages/Color"

export const router =createBrowserRouter([
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:`/mostrar/:id`,
        element:<Mostrar/>
    },
    {
        path:`/mostrarmas/:palabra`,
        element:<MostrarPalabra/>
    },
    {
        path:`/color/:color1/:color2`,
        element:<Color/>
    }
])