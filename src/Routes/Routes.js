import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Courses from "../Pages/Courses/Courses";
import Error404 from "../Pages/Error404/Error404";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SuccessStories from "../Pages/SuccessStories/SuccessStories";
import Support from "../Pages/Support/Support";

export const routes  = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about-us",
                element:<About></About>
            },
            {
                path:"/success-stories",
                element:<SuccessStories></SuccessStories>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/support",
                element:<Support></Support>
            },
            {
                path:"/courses",
                element:<Courses></Courses>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    },
    {
        path:"*",
        element:<Error404></Error404>
    }
]);