import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagenLogo from '../img/logo-glm.png';
import { RegistroUsuarios } from '../datos/Usuarios';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const registro = new RegistroUsuarios();

  useEffect(() => {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (usuarioLogueado) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Limpiar el error anterior

    try {
      const resultado = registro.iniciarSesion(email, password);
      if (resultado) {
        setLoggedIn(true);
        alert('Sesión iniciada correctamente.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    registro.cerrarSesion();
    setLoggedIn(false);
    alert('Sesión cerrada.');
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Logo GLM"
          src={ImagenLogo}
          className="mx-auto h-25 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inicia Sesion
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Correo Electronico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          No estas registrado?{' '}
          <Link to="/register" className="font-semibold leading-6 text-green-600 hover:text-green-400">
            Registrate Aqui
          </Link>
        </p>
      </div>
      {loggedIn && (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        </div>
      )}
    </div>
  );
};

export default UserLogin;







