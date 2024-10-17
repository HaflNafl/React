import './App.css';

import logo from '../src/image/logo.svg'
import search from '../src/image/search.svg'
import cart from '../src/image/cart.svg'

function App() {
  return (
   <>
    <div class = "header">
      <img src={logo} alt = "logo"></img>
      <p>Organic</p>
      <ul class = "tab">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Pages</a></li>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>News</a></li>
      </ul>
      <div class = "block_input">
        <input type ="text"/>
        <img src ={search} alt =''/>
        <div class = "cart">
          <img src = {cart} alt = ''/>
          <p>cart(0)</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
