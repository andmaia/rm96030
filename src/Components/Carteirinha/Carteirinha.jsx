import React from "react";
import { useState } from "react";
export default function Carteirinha(){

    const [nome,setNome]=useState('')
    const [rm,setRM]=useState('')
    const [curso,setCurso] =useState('')
    const [turma,setTurma]= useState('')
    const[validacao,setValidacao]=useState(false)
    function apaga(){
        var a = window.document.getElementById('a')
        a.remove()
    }

    return(



        <div className="father">
            <div className="containerCarteirinha">
                <div className="item">
                    <img src="https://www.montealtoadv.com.br/wp-content/uploads/2019/04/user-icon.png" alt="" />
                    <p>Nome: Andrew Rian Maia Araujo</p>
                    <p>RM:96030</p>
                    <p>Curso:Tecnólogo em Análise e desenvolvimento de sistemas</p>
                    <p>Turma:1TDSR</p>
                </div>

                <div className="item">
                    <img src="https://www.montealtoadv.com.br/wp-content/uploads/2019/04/user-icon.png" alt="" />
                    <p>Nome: Javascipson PHP Henrique</p>
                    <p>RM:00001</p>
                    <p>Curso:ENG.de Software</p>
                    <p>Turma:2EDS</p>
                </div>

                <div className="item">
                    <img src="https://www.montealtoadv.com.br/wp-content/uploads/2019/04/user-icon.png" alt="" />
                    <p>Nome: Node Felipe Apiano</p>
                    <p>RM:00002</p>
                    <p>Curso:Sistemas de informações</p>
                    <p>Turma:1SDI</p>
                </div>
            
            </div>
            <div id="a">
                <h2>Crie sua carteirinha</h2>
                <form action="" id='formulario' onSubmit={(e)=>{
                    e.preventDefault()
                    setValidacao(true)
                    apaga()
                    
                }}>
                    <input type="text" id="nome" placeholder="Nome" onChange={(e)=>setNome(e.target.value)} />
                    <input type="text" id="rm" placeholder="Rm" onChange={(e)=>setRM(e.target.value)} />
                    <input type="text" id="curso" placeholder="Curso" onChange={(e)=>setCurso(e.target.value)}/>
                    <input type="text" id="turma" placeholder="Turma" onChange={(e)=>setTurma(e.target.value)} />
                    <input type='submit' id='submit'></input>
                </form>
            </div>
            {validacao&&(
                    <div className="itemA">
                    <img src="https://www.montealtoadv.com.br/wp-content/uploads/2019/04/user-icon.png" alt="" />
                    <p>Nome:{nome}</p>
                    <p>RM:{rm}</p>
                    <p>Curso:{curso}</p>
                    <p>Turma:{turma}</p>
                </div>
            )}
        </div>
    )
}