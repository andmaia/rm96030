import React from "react";
import './Semaforo.css'

export default function Semaforo(){
    var ind=0
  
   


    var cores = {

        'g':()=>{
            
            const g = window.document.getElementById('G')
            g.style.backgroundColor='rgb(6, 255, 6)'
            g.style.boxShadow='0px 0px 150px rgb(6, 255, 6)'
            
        },
        'y':()=>{
            const y =window.document.getElementById('Y')
            y.style.backgroundColor=' rgb(255, 255, 0)'
            y.style.boxShadow='0px 0px 150px rgb(255, 255, 0)'
        },
        'r':()=>{
            const r =window.document.getElementById('R')
            r.style.backgroundColor='rgb(255, 10, 10)'
            r.style.boxShadow='0px 0px 150px rgb(255, 10, 10)'
        },
        'n':()=>{
            const g = window.document.getElementById('G')
            g.style.backgroundColor='rgb(1, 59, 1)'
            g.style.boxShadow='none'

            const y =window.document.getElementById('Y')
            y.style.backgroundColor='rgb(48, 48, 1)'
            y.style.boxShadow='none'

            const r =window.document.getElementById('R')
            r.style.backgroundColor='rgb(76, 2, 2)'
            r.style.boxShadow='none'
            
        }
    }

    var validacao = ()=>{
        cores['n']()
        if(ind===1){
            cores['g']()
            
            
        }
        
        else if(ind===2){
            cores['y']()
            
        }
        else if(ind===3){
            cores['r']()
        }
        else{
            ind=0
          
        }
        
        ind++
    }


 
    return(
       
        <div className="Container_dad">
          <div className="DivUm" id="a">
                <div className="ContainerSon G" id="G"></div>
                <div className="ContainerSon Y" id="Y"></div>
                <div className="ContainerSon R" id="R">/</div>
         </div>
       
                <input type="button" className="Button" value="Start" onClick={validacao} />
        
        </div>
    )
}