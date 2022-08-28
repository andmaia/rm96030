import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Semaforo from "./Components/Semaforo/Semaforo";
import Carteirinha from "./Components/Carteirinha/Carteirinha";
import Menu from "./Components/Menu/Menu";
import Carros from "./Components/Carros/Carros";
import Sobre from "./Components/Sobre/Sobre";
export default function App(){
    return(
        <>
        
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path="/" element={<Semaforo/>}> </Route>
                <Route path="/carteirinha" element={<Carteirinha/>}></Route>

                <Route path="/carros" element={<Carros>
                <h1>Lista de Carros</h1>
                <ul>
                    <li>Monza</li>
                    <li>Celta</li>
                    <li>Jeep</li>
                    <li>Logan</li>
                    <li>Gol</li>
                    <li>S10</li>
                    <li>Hilux</li>
                    <li>Porshe</li>
                    <li>Fusca</li>
                    <li>Fox</li>
                </ul>
         </Carros>}
         ></Route>

                <Route path="/sobre" element={<Sobre/>}></Route>
            </Routes>
    
         
        </BrowserRouter>
        
        
        </>
    )
}

