import React from 'react';
import { GlobalContext } from './Globalcontext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }



  return (
    <div>
      <li>{global.produto}</li>

      <p>
        Total: {global.carrinho} <button onClick={handleClick}>Adicionar</button>
      </p>
    </div>
  );
};

export default Produto;
