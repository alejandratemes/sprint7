import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "../pages/Inicio"
import Presupuesto from "../pages/Presupuesto"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/presupuesto" element={<Presupuesto/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router;