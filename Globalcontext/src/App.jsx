import React from 'react';
import { GlobalStorage } from './Components/Globalcontext';
import Produto from './Components/Produto';


const App = () => {
  return (
<GlobalStorage>
  <Produto/>
</GlobalStorage>
)
}
export default App;
