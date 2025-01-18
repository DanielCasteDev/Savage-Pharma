import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

const Login: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [registerEmail, setRegisterEmail] = useState<string>('');
  const [registerPassword, setRegisterPassword] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'http://localhost:4000/api/auth', // Cambia esto por la URL de tu API
    timeout: 10000,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      try {
        const response = await api.post<{ token: string }>('/login', { email: loginEmail, password: loginPassword });
        localStorage.setItem('token', response.data.token); // Guardar el token
        toast.success('Inicio de sesión exitoso.');
        navigate('/products');
      } catch (error: any) {
        toast.error(error.response?.data.message || 'Error al iniciar sesión');
      }
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (registerEmail && registerPassword) {
      try {
        await api.post('/register', { email: registerEmail, password: registerPassword });
        toast.success('Registro exitoso. Ahora puedes iniciar sesión.');
        setShowModal(false);
      } catch (error: any) {
        toast.error(error.response?.data.message || 'Error al registrarse');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4 relative">
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm z-10 bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Bienvenido a Savage Pharma</h1>
        
        <div>
          <label htmlFor="login-email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
          <input
            type="email"
            id="login-email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
            placeholder="Introduce tu email"
          />
        </div>

        <div>
          <label htmlFor="login-password" className="block text-gray-700 text-sm font-medium mb-2">Contraseña:</label>
          <input
            type="password"
            id="login-password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
            placeholder="Introduce tu contraseña"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Iniciar sesión
        </button>

        <div className="flex items-center justify-center mt-4">
          <div className="relative flex items-center">
            <div className="absolute inset-0 flex justify-center">
              <span className="text-gray-600 text-sm">ó</span>
            </div>
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>¿No tienes cuenta? <a href="#" onClick={() => setShowModal(true)} className="text-gray-700 hover:underline">Regístrate</a></p>
        </div>
      </form>

      {/* Modal de Registro */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-xl transform transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Registrarse</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label htmlFor="register-email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                <input
                  type="email"
                  id="register-email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                  placeholder="Introduce tu email"
                />
              </div>
              <div>
                <label htmlFor="register-password" className="block text-gray-700 text-sm font-medium mb-2">Contraseña:</label>
                <input
                  type="password"
                  id="register-password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                  placeholder="Introduce tu contraseña"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Registrarse
              </button>
            </form>
            <button 
              onClick={() => setShowModal(false)} 
              className="mt-4 text-gray-500 hover:underline block mx-auto"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
