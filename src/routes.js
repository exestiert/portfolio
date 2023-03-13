import HomePage from "./pages/HomePages"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"

const routes= [
    {path: "/", element: <HomePage/>, id: 1},
    {path: "/about-me", element: <AboutMe/>, id: 2},
    {path: "/projects", element: <Projects/>, id:3},
    {path: "/contact", element: <Contact/>, id:4},
    {path: "*", element: <NotFound/>, id:5},


]

export default routes