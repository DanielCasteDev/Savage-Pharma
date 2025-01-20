import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Car from './pages/Carr';


function App() {
  return (
    <CartProvider>

    <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/carr" element={<Car />} />
            </Routes>
          </Layout>
        </Router>
    </AuthProvider>
    </CartProvider>

  );
}

export default App;

