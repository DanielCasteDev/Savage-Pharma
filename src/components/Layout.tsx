import { useState } from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import {
  HomeIcon,
  ShoppingBagIcon,
  InformationCircleIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  ShoppingCartIcon,
  Bars3Icon, // Ícono de menú hamburguesa
  XMarkIcon, // Ícono de cerrar
} from "@heroicons/react/24/outline";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoggedIn, logout } = useAuth();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para menú móvil

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navbar */}
      <nav className="bg-white text-black shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-6 max-w-7xl">
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-3xl font-bold tracking-wide hover:text-gray-600 transition flex items-center"
          >
            <img src="/logo.png" alt="Logo" className="h-12 mr-2" />
          </Link>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center p-2 focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          {/* Menú */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8`}
          >
            <Link
              to="/"
              className="flex items-center space-x-2 hover:underline underline-offset-4 hover:text-gray-600 transition"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/products"
              className="flex items-center space-x-2 hover:underline underline-offset-4 hover:text-gray-600 transition"
            >
              <ShoppingBagIcon className="w-5 h-5" />
              <span>Productos</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 hover:underline underline-offset-4 hover:text-gray-600 transition"
            >
              <InformationCircleIcon className="w-5 h-5" />
              <span>Sobre nosotros</span>
            </Link>

            {/* Carrito de compras */}
            <Link
              to="/carr"
              className="flex items-center space-x-2 hover:text-gray-600 transition"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              <span>({cart.length})</span>
            </Link>

            {isLoggedIn ? (
              <button
                onClick={logout}
                className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition"
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                <span>Logout</span>
              </button>
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

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 max-w-7xl pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-sm p-4 text-center">
        <p>&copy; 2025 SavagePharma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
