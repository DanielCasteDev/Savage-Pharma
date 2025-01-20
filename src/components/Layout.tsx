import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import {
  HomeIcon,
  ShoppingBagIcon,
  InformationCircleIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const { cart } = useCart();

  // Función para actualizar el estado de inicio de sesión y usuario
  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decodificar el token JWT
      setUsername(decodedToken.username);  // Extraer el nombre de usuario desde el token
    } else {
      setIsLoggedIn(false);
      setUsername(null);
    }
  };

  useEffect(() => {
    // Llamada inicial para comprobar el estado
    checkLoginStatus();

    // Configurar el intervalo para actualizar cada 2 segundos
    const interval = setInterval(() => {
      checkLoginStatus();
    }, 2000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUsername(null);
  };

  // Función para extraer la parte del correo antes del '@'
  const extractEmailPrefix = (email: string) => {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      return email.slice(0, atIndex); // Extrae todo antes del '@'
    }
    return email; // Si no se encuentra '@', devuelve el correo completo
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between p-4 max-w-7xl">
          {/* Logo de la marca */}
          <Link
            to="/"
            className="text-2xl font-semibold flex items-center space-x-2 hover:text-gray-600"
          >
            <img src="/logo.png" alt="Logo" className="h-10" />
          </Link>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Menú de escritorio y móvil */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0`}
          >
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-gray-600 transition"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Inicio</span>
            </Link>
            <Link
              to="/products"
              className="flex items-center space-x-2 hover:text-gray-600 transition"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              <span>Productos</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 hover:text-gray-600 transition"
            >
              <InformationCircleIcon className="h-5 w-5" />
              <span>Sobre nosotros</span>
            </Link>

            {/* Carrito de compras */}
            <Link
              to="/carr"
              className="flex items-center space-x-2 hover:text-gray-600 transition"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span>({cart.length})</span>
            </Link>

            {/* Usuario */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-700">
                  Hola {username && extractEmailPrefix(username)} {/* Mostrar solo la parte antes del '@' */}
                </span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                >
                  <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                  <span>Salir</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
              >
                <UserCircleIcon className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto p-6 max-w-7xl pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-sm p-4 text-center">
        <p>&copy; 2025 SavagePharma. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
