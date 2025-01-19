import  { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { toast, Toaster } from 'sonner';
import { FaPaypal } from 'react-icons/fa'; // Importa el ícono de PayPal

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
        <p className="text-xl">Tu carrito está vacío.</p>
      </div>
    );
  }

  // Calcular el total del carrito
  const total = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);

  // Función para mostrar notificación cuando un producto se elimina
  const handleRemove = (productId: number) => {
    removeFromCart(productId);
    toast.error("Producto eliminado del carrito");
  };

  // Función para mostrar notificación cuando se procede al pago
  const handleCheckout = () => {
    toast.success(`Pago con ${paymentMethod} confirmado!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="max-w-6xl w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Carrito</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 mb-4 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-sm mb-4">{product.description}</p>
              <button
                onClick={() => handleRemove(product.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
              >
                Eliminar del Carrito
              </button>
            </div>
          ))}
        </div>

        {/* Resumen del carrito */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900">Resumen</h2>
          <div className="flex justify-between items-center py-2">
            <span className="text-lg text-gray-700">Total:</span>
            <span className="text-xl font-semibold text-gray-900">${total}</span>
          </div>

          {/* Método de pago */}
          <div className="mt-4">
            <label htmlFor="payment-method" className="block text-gray-700 text-lg font-semibold mb-2">
              Método de pago
            </label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="paypal">
                <FaPaypal className="inline-block mr-2" /> PayPal
              </option>
            </select>
          </div>

          {/* Botón de checkout */}
          <div className="mt-6">
            <button
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              onClick={handleCheckout}
            >
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>

      {/* Agregar ToastContainer para mostrar notificaciones */}
      <Toaster />
    </div>
  );
};

export default Cart;
