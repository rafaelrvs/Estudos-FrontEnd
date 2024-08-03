import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [comentarios, setComentarios] = useState([])
  const [input, setInput] = useState('')

  const handleClick = () => {
    setComentarios([...comentarios, input])
    inicia_chat(input)
    setInput('')
  }

  async function inicia_chat(mensagem) {
    try {
      const response = await axios.post('http://localhost:3001/completions', {
        message: mensagem,
      })
      const resposta = response.data.response
      setComentarios((prevComentarios) => [...prevComentarios, resposta])
    } catch (error) {
      console.error('Erro ao chamar a API:', error)
      setComentarios((prevComentarios) => [...prevComentarios, 'Erro ao chamar a API'])
    }
  }

  return (
    <div className='chat'>
      <p>Chat Rafael</p>
      <ul className='chat-children'>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        className='input-chat'
        type='text'
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button id='btn'  onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default App
