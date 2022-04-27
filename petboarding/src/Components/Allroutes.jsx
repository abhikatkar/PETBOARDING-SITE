
import {Routes, Route} from "react-router-dom"
import { Detail } from "./Detail"
import { Form } from "./Form"
import { Home } from "./Home"


export const Allroutes = ()=> {
    return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<Detail/>}/>
          <Route path="/form" element={<Form/>} />
      </Routes>
    )
}