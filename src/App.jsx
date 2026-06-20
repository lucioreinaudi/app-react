import { Routes, Route } from 'react-router-dom';
import Header        from './components/Header.jsx';
import Productos     from './pages/Productos.jsx';
import Producto       from './pages/Producto.jsx';
import CrearProducto from './pages/CrearProducto.jsx';
import Login         from './pages/Login.jsx';
import Footer        from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/crear-producto" element={<CrearProducto />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/*
      <footer>
        <p>TechStore 2026 - Tecnicatura Full Stack</p>
      </footer>
      */}
      <Footer />
    </>
  );
}

export default App;