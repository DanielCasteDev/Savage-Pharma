import React from 'react';
import { useCart } from '../contexts/CartContext';
import { products } from '../utils/data';

const Home: React.FC = () => {
  const { addToCart } = useCart();

  // Ficticios comentarios y reseñas de clientes
  const customerReviews = [
    {
      name: 'Juan Pérez',
      review: '¡Excelente calidad! La proteína Whey es la mejor que he probado. Me ha ayudado mucho en mis entrenamientos.',
      rating: 5,
    },
    {
      name: 'María Gómez',
      review: 'Los suplementos de Savage Pharma son increíbles. Los resultados han sido notables desde que los comencé a usar.',
      rating: 5,
    },
    {
      name: 'Carlos Martínez',
      review: 'Muy buenos productos, el pre-entrenamiento me da una energía increíble para mis entrenos.',
      rating: 4,
    },
  ];

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
      </header>

      <section className="w-full max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
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
                onClick={() => addToCart(product)}
              >
                Añadir al Carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Comentarios de Clientes */}
      <section className="w-full bg-gray-50 py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Opiniones de Nuestros Clientes
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{review.name}</h3>
              <div className="flex mb-2">
                {/* Mostrar estrellas según la calificación */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < review.rating ? 'yellow' : 'gray'}
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27l4.15 2.18-1.15-4.89 3.85-3.56-5.03-.43-2.12-4.57-2.12 4.57-5.03.43 3.85 3.56-1.15 4.89L12 17.27z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
