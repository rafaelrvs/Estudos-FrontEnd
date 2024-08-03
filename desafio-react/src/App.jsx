
import './App.css'
import Produto from './assets/components/Produto/Produto'
import React, { useState } from 'react'
function App() {

  const [carregando,setCarregando] = useState(null)
  const [dados,setDados] = React.useState(null)
  const [erro,setErro] = React.useState(null)
 async function handleClick(event){
  setCarregando(true)
  const response = await fetch(`https:ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
  
  const json = await response.json();
  console.log(json)
  setDados(json)
  setCarregando(false)

}

  return (
    <>
     <button onClick={handleClick}>notebook</button>
     <button onClick={handleClick}>smartphone</button>
     <button onClick={handleClick}>tablet</button>
     {carregando&&<p>Carregando...</p>}
     {!erro &&!carregando && dados && <Produto dados={dados}/>}
    </>
  )
}

export default App
