import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { toast, Toaster } from "sonner";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
        <p className="text-xl">Tu carrito está vacío.</p>
      </div>
    );
  }

  // Calcular el total del carrito considerando la cantidad de cada producto
  const total = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  // Función para eliminar un producto
  const handleRemove = (productId: number) => {
    removeFromCart(productId);
    toast.error("Producto eliminado del carrito");
  };

  // Función para proceder al pago con Mercado Pago
  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://paypal-m2a1.onrender.com/api/payment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((product) => ({
            title: product.name,
            quantity: product.quantity, // Usar la cantidad real
            unit_price: product.price,
          })),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirigir al checkout de Mercado Pago
        window.location.href = data.init_point;
      } else {
        toast.error("Hubo un problema al procesar el pago.");
      }
    } catch (error) {
      console.error("Error en el checkout:", error);
      toast.error("Hubo un problema al procesar el pago.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="max-w-6xl w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Carrito</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 mb-4 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-sm mb-2">Cantidad: {product.quantity}</p>
              <p className="text-gray-700 text-sm mb-4">
                Subtotal: ${(product.price * product.quantity).toFixed(2)}
              </p>
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

         {/* Botón de checkout */}
<div className="mt-6">
  <button
    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
    onClick={handleCheckout}
    disabled={loading}
  >
    {loading ? (
      <span>Procesando...</span>
    ) : (
      <>
        <img
          src="https://www.paypalobjects.com/webstatic/icon/pp258.png" // URL del logo de PayPal
          alt="PayPal Logo"
          className="h-6 mr-2"
        />
        Proceder al Pago con PayPal
      </>
    )}
  </button>
</div>

        </div>
      </div>

      {/* Agregar Toaster para notificaciones */}
      <Toaster />
    </div>
  );
};

export default Cart;
