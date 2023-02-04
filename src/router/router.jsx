import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";
import Films from "../pages/Films";
import People from "../pages/People";
import Planets from "../pages/Planets";
import Species from "../pages/Species";
import Vehicles from "../pages/Vehicles";


export const router =createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <p>Esperando dato</p>,
            },
            {
                path: "/films/:id",
                element: <Films/>,
            },
            {
                path: "/people/:id",
                element: <People/>,
            },
            {
                path: "/planets/:id",
                element: <Planets/>,
            },
            {
                path: "/species/:id",
                element: <Species/>,
            },
            {
                path: "/vehicles/:id",
                element: <Vehicles/>,
            }
        ]
    },
]);
