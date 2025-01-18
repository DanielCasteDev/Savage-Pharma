import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'Proteina Chocolate', price: 19.99, image: 'https://imgs.search.brave.com/JLw4K18G_wG4NftNsyffESsCXOiRR0wUyXFX3JBRPuo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFtcEYySlJKQkwu/anBn', description: 'Descripción breve del producto 1.' },
  { id: 2, name: 'Proteina Vainilla', price: 29.99, image: 'https://imgs.search.brave.com/8BbpUZc2oZNrEuyeubODm4yUdQCjlPgIiiPf1gZ_ZPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFV1ktZERFM0wu/anBn', description: 'Descripción breve del producto 2.' },
  { id: 3, name: 'Proteina Coco', price: 39.99, image: 'https://imgs.search.brave.com/JaGUzdtC-ic8Lf3jxkU-u_R8M6nQu86IPv23VmLm_ng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxSUlJNjZVVFBM/LmpwZw', description: 'Descripción breve del producto 3.' },
  { id: 4, name: 'Creatina Monohidratada', price: 49.99, image: 'https://imgs.search.brave.com/bcZYUsp3Nm5Sy0kRSqALm2qdJFSulsSsJKBDWqFaCa0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92YWxh/cmEuY29tLm14L2Nk/bi9zaG9wL2ZpbGVz/LzE1LmpwZz92PTE3/MzE0MzUyMDkmd2lk/dGg9MTUwMA', description: 'Descripción breve del producto 4.' },
  { id: 5, name: 'Creatina Hidrolizada', price: 59.99, image: 'https://imgs.search.brave.com/6e5718raOyPI9se1XWGhcEHIKl9O9YszJsUdNp5RND0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFQU0swYjFGVEwu/anBn', description: 'Descripción breve del producto 5.' },
  { id: 6, name: 'BCAA Venom', price: 69.99, image: 'https://imgs.search.brave.com/-ZTG7XwD1YuY5HySy6QykjX76je4POL9lPIZSB8lsGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb2pp/dzJtOXR2djA5LmNs/b3VkZnJvbnQubmV0/LzI2NDE1L3Byb2R1/Y3QvWF92ZW5vbS1j/YW5keTUwMjMuanBn/PzE5NzQmdGltZT0x/NzM2ODMyMTk1', description: 'Descripción breve del producto 6.' },
  { id: 7, name: 'BAAA', price: 79.99, image: 'https://imgs.search.brave.com/JUE31ejjKFk8lBQay_Z-d7OCGNavGND-sCHy3bRyH_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Nl/bnRpYWxzbXguY29t/L2Nkbi9zaG9wL2Zp/bGVzL2JjYWFfX19t/b3JhX2F6dWxfNGQ1/ODU1MTktNDY4OC00/NjhhLWFkNWEtN2U1/ZjMwNTc0NzAyLmpw/Zz92PTE3MjE3Njg5/MDgmd2lkdGg9MTUw/MA', description: 'Descripción breve del producto 7.' },
  { id: 8, name: 'Testrol', price: 89.99, image: 'https://imgs.search.brave.com/u6GlxmKn06A7l1HLi8ePi07X9R5K1JAQoE40xlmD8Zw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXB0/YWlubnV0cml0aW9u/Lm14L2Nkbi9zaG9w/L3Byb2R1Y3RzLzNf/YjA2Y2ViMDAtNDcz/ZS00ODhkLWEyY2Mt/NTliOTg1ZWJkY2Mx/LmpwZz92PTE1MzY5/MzQ5NDMmd2lkdGg9/e3dpZHRofQ', description: 'Descripción breve del producto 8.' },
  { id: 9, name: 'Red Bull', price: 99.99, image: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00900249010007L.jpg', description: 'Descripción breve del producto 9.' },
  { id: 10, name: 'Monster', price: 109.99, image: 'https://imgs.search.brave.com/oJk1fjKA2fSzH4JndDxkSlqUN1KtHNvmG8kt0W3S-Rw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS5teC9nci9p/bWFnZXMvcHJvZHVj/dC1pbWFnZXMvaW1n/X2xhcmdlLzAwMDA3/MDg0NzAzNTkxTC5q/cGc_b2RuSGVpZ2h0/PTYxMiZvZG5XaWR0/aD02MTImb2RuQmc9/RkZGRkZG', description: 'Descripción breve del producto 10.' },
  { id: 11, name: 'Magnecio', price: 119.99, image: 'https://imgs.search.brave.com/JX9dpVw0DL-iKyjBf6Fw6IqLpvxEHcbdfoGTj6AupLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFBRlRQQURZZ1Mu/anBn', description: 'Descripción breve del producto 11.' },
  { id: 12, name: 'Choco Lite', price: 129.99, image: 'https://imgs.search.brave.com/TWZiit_jg1p4hWC0wy95uNKkB96D0gPmTn1VBGD9ydk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFGQnZSK3dLaEwu/anBn', description: 'Descripción breve del producto 12.' }
];

const ProductList = () => {
  const { isLoggedIn } = useAuth();
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  // Divide los productos en secciones de 4 elementos
  const sections = [];
  for (let i = 0; i < products.length; i += 4) {
    sections.push(products.slice(i, i + 4));
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Nuestros Productos</h1>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Sección {index + 1}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {section.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow-lg transition-transform transform hover:scale-105">
                <div className="w-full h-48 mb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                {isLoggedIn && (
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Añadir al Carrito
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
