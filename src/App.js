import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import logo from './images/logo.svg';

function App() {
  return (
    <div>
      <header>
        <div className='desktop-container'>
          <div className='logo-container'>
            <img className='logo-ecommerce' src={logo} alt="Logo de la tienda" />
            <span>Bici Tienda</span>
          </div>
          <NavBar />
        </div>
      </header>
      <main>
        <div className='desktop-container'>
          <ItemListContainer greetings="Bienvenidos a la Bici Tienda" />
        </div>
      </main>
    </div>
  );
}

export default App;
