import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Sobre nosotros
      </h1>

      {/* Brief Story */}
      <section className="mb-8">
        <p className="text-lg text-gray-600 leading-8">
          Somos <span className="font-semibold text-green-500">Savage</span> <span className="font-semibold text-gray-800">Pharma</span>, una empresa nacida del sueño de cuatro emprendedores con una visión clara: mejorar la distribución de productos de alta calidad en el sector de la salud y el bienestar. Desde nuestra fundación en 2020, hemos trabajado juntos para brindar soluciones innovadoras que impacten positivamente en la vida de nuestros clientes.
        </p>

        <p className="text-lg text-gray-600 leading-8 mt-4">
          Cada uno de los fundadores trajo su experiencia única al proyecto, desde logística hasta atención al cliente. Nuestro objetivo ha sido siempre garantizar productos accesibles, confiables y respaldados por un servicio excepcional. Con el tiempo, hemos crecido gracias a nuestra pasión compartida y el apoyo de nuestra comunidad.
        </p>
      </section>

      {/* Google Map */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visítanos</h2>
        <p className="text-gray-600 mb-4">
          Nuestro centro de operaciones se encuentra estratégicamente ubicado para facilitar el acceso y brindarte la mejor atención. Ven a conocernos y descubre cómo podemos ayudarte.
        </p>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          {/* Google Map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5639189309345!2d-103.53318189999999!3d20.4830966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f55f2173b24d1%3A0xb3fc2b0647d8a722!2sUniversidad%20Tecnol%C3%B3gica%20de%20la%20Zona%20Metropolitana%20de%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1737096087611!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Savage Pharma"
          ></iframe>
        </div>
      </section>

      {/* Social Media Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Estamos aquí para ti
        </h2>
        <p className="text-gray-600 mb-6">
          ¿Tienes preguntas o necesitas ayuda? Nuestro equipo siempre está disponible para apoyarte. Contáctanos a través de nuestras redes sociales o visítanos en nuestra oficina.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-6">
          {/* Social Media Links */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
            <span className="text-gray-800 hover:text-gray-600 transition">
              Instagram
            </span>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-8 h-8"
            />
            <span className="text-gray-800 hover:text-gray-600 transition">
              Facebook
            </span>
          </a>
        </div>
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
          Contáctanos
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
