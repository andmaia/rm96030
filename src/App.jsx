import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Semaforo from "./Components/Semaforo/Semaforo";
import Carteirinha from "./Components/Carteirinha/Carteirinha";

export default function App(){
    return(
    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Semaforo/>}> </Route>
                <Route path="/carteirinha" element={<Carteirinha/>}></Route>
            </Routes>
        </BrowserRouter>
     
    )
}

