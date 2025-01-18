import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center text-gray-800">
      <header className="w-full text-center py-10">
      <h1 className="text-4xl font-bold mb-4">
  <span className="text-green-500">Savage</span> <span className="text-gray-900">Pharma</span>
</h1>
        <p className="text-lg mb-6 text-gray-700">
          Proteínas premium y suplementos energéticos para tu estilo de vida activo.
        </p>
        <button className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-800 transition duration-300">
          Comprar Ahora
        </button>
      </header>

      {/* Productos Destacados */}
      <section className="w-full max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="border border-gray-300 p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300 bg-white">
              <div className="h-36 bg-white rounded mb-4 flex justify-center items-center">
                <img src={product.image} alt={product.name} className="h-full object-cover rounded" />
              </div>
              <h3 className="text-xl font-medium mb-1 text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <button className="bg-gray-900 text-white py-1 px-3 rounded-full hover:bg-gray-800 transition duration-300">
                Añadir al Carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Lo que Dicen Nuestros Clientes</h2>
        <div className="flex flex-col space-y-4">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="border border-gray-300 p-4 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 duration-300">
              <p className="text-sm italic">"{testimonial.quote}"</p>
              <p className="text-right font-bold text-gray-900">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Únete a Nuestra Comunidad</h2>
        <p className="mb-4 text-gray-700">Suscríbete a nuestro boletín para recibir las últimas actualizaciones y ofertas exclusivas.</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Tu dirección de correo" className="p-2 border border-gray-300 rounded-l-md bg-white text-gray-800" />
          <button className="bg-gray-900 text-white py-2 px-4 rounded-r-md hover:bg-gray-800 transition duration-300">
            Suscribirse
          </button>
        </div>
      </div>

      <footer className="text-sm text-gray-600">
        <p>Contáctanos en: <a href="mailto:support@powerboost.com" className="text-gray-800 underline">support@powerboost.com</a></p>
        <p>¡Síguenos en nuestras redes sociales para más actualizaciones!</p>
      </footer>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: 'Protein Supreme',
    description: 'Proteína de suero de alta calidad para el crecimiento muscular.',
    image: 'https://imgs.search.brave.com/-ZTG7XwD1YuY5HySy6QykjX76je4POL9lPIZSB8lsGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb2pp/dzJtOXR2djA5LmNs/b3VkZnJvbnQubmV0/LzI2NDE1L3Byb2R1/Y3QvWF92ZW5vbS1j/YW5keTUwMjMuanBn/PzE5NzQmdGltZT0x/NzM2ODMyMTk1',
  },
  {
    id: 2,
    name: 'Energy Max',
    description: 'Energía sostenida para potenciar tus entrenamientos.',
    image: 'https://imgs.search.brave.com/JUE31ejjKFk8lBQay_Z-d7OCGNavGND-sCHy3bRyH_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Nl/bnRpYWxzbXguY29t/L2Nkbi9zaG9wL2Zp/bGVzL2JjYWFfX19t/b3JhX2F6dWxfNGQ1/ODU1MTktNDY4OC00/NjhhLWFkNWEtN2U1/ZjMwNTc0NzAyLmpw/Zz92PTE3MjE3Njg5/MDgmd2lkdGg9MTUw/MA',
  },
  {
    id: 3,
    name: 'Recovery Pro',
    description: 'Aminoácidos para una recuperación más rápida.',
    image: 'https://imgs.search.brave.com/8BbpUZc2oZNrEuyeubODm4yUdQCjlPgIiiPf1gZ_ZPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFV1ktZERFM0wu/anBn',
  },
];

const testimonials = [
  {
    id: 1,
    quote: '¡PowerBoost ha transformado mis entrenamientos!',
    author: 'Alice M.',
  },
  {
    id: 2,
    quote: 'Me encanta la energía que obtengo de sus productos.',
    author: 'John D.',
  },
  {
    id: 3,
    quote: '¡Los mejores suplementos del mercado!',
    author: 'Sarah K.',
  },
];

export default Home;
