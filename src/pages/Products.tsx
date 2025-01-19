import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { toast, Toaster } from 'sonner';
import { products } from '../utils/data'; // Importamos los productos desde data.ts

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const playSound = () => {
    const audio = new Audio('/path-to-your-sound-file.mp3'); // Añade la ruta correcta de tu archivo de sonido
    audio.play();
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
    playSound(); // Reproduce el sonido cuando un producto se añade al carrito
    toast.success(`${product.name} se ha añadido al carrito!`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center text-gray-800">
      <header className="w-full text-center py-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-green-500">Savage</span>{' '}
          <span className="text-gray-900">Pharma</span>
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Proteínas premium y suplementos energéticos para tu estilo de vida activo.
        </p>
        <div className="w-full max-w-md px-4 py-2">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <section className="w-full max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Productos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300 bg-white"
            >
              <div className="h-36 bg-white rounded mb-4 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-medium mb-1 text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>
              <p className="text-sm font-semibold mb-4 text-gray-800">
                ${product.price.toFixed(2)}
              </p>
              <button
                className="bg-gray-900 text-white py-1 px-3 rounded-full hover:bg-gray-800 transition duration-300"
                onClick={() => handleAddToCart(product)}
              >
                Añadir al Carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      <Toaster /> {/* Add this to render the Toast notifications */}
    </div>
  );
};

export default Products;
