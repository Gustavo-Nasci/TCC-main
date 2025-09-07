import { Routes, Route } from "react-router"
import { Home } from '../pages/Home'
import { Instrucoes } from '../pages/Instrucoes'
import { References } from '../pages/References'

export function AppRoutes() {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instrucoes" element={<Instrucoes />} />
        <Route path="/referencia" element={<References />} />
    </Routes>
  )
}
