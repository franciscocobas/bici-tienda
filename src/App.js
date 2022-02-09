import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import logo from './images/logo.svg';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div>
      { /* El header va a quedar fijo */ }
      <header>
        <div className='desktop-container'> { /* Esto es JSX no es HTML! */ } 
          <div className='logo-container'>
            <Link to="/" className='mi-clase-personalizada'>
              <img className='logo-ecommerce' src={logo} alt="Logo de la tienda" />
              <span>Bici Tienda</span>
            </Link>
          </div>
          <NavBar />
        </div>
      </header>
      <main>
        <div className='desktop-container'>
          {/* Acá vamos a mostrar la diferentes "pantallas" (componentes) */}
          <Routes>

            {/* Esta es la pantalla "home" y mostramos el componente ItemListContainer */}
            <Route 
              path="/" 
              element={<ItemListContainer greetings="Bienvenidos a la Bici Tienda" />} 
            />

            {/* Esta pantalla muestra el listado de los items filtrados por categoria */}
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer greetings="Categoria en específico" />}
            />

            {/* Esta es la pantalla dinámica de cada uno de los productos */}
            <Route
              path="/producto/:productId"
              element={<ItemDetailContainer />}
            />

          {/* Simularía una página 404 no encontrada */}
          <Route 
            path="*"
            element={
            <div>
              <h2>Página no encontrada</h2>
              <Link to="/">{ '<< ' }Volver al incio </Link>
            </div>}
          />

          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
