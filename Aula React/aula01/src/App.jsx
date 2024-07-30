import { useState } from 'react'
import './App.css'


function App() {


  
const luana = {
  cliente: 'luana',
  idade:27,
  compras:[
    {nome: 'Notbook', preco:'2500'},
    {nome: 'Geladeira', preco:'3000'},
    {nome: 'SmartPhone', preco:'1500'}
  ],
  ativa:true
};
const mario = {
  cliente: 'mario',
  idade:31,
  compras:[
    {nome: 'Notbook', preco:'2500'},
    {nome: 'Geladeira', preco:'3000'},
    {nome: 'SmartPhone', preco:'1500'},
    {nome: 'Guitarra', preco:'3500'},
  ],
  ativa:false
};
const dados = luana
//Obtém a lista de compras do objeto dados.
const total = dados.compras
.map((item)=> Number(item.preco.replace('R$ ','')))
/// Converte o array de compras em um novo array de números, removendo o prefixo "R$ " dos preços e convertendo-os para números.
.reduce((a,b)=> a + b)
//Soma todos os números do array resultante, produzindo o valor total das compras

  
  
  return(
    <div>
          <p>Nome: {dados.cliente}</p>
          <p>idade: {dados.idade}</p>
          <p >situação: <strong className={dados.ativa? "ativa":"inativa"}>{dados.cliente? "Ativa":"Inativa"}</strong> </p>
          <p>Total gasto: {total}</p>
    </div>
  )
}

export default App
