import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Banner from '../partials/Banner';

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* Encabezado del sitio */}
      <Header />

      {/* Contenido de la página */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Encabezado de la página */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  De vuelta con nosotros. Seguimos haciendo las compras más inclusivas.
                </h1>
              </div>

              {/* Formulario */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Ingresa tu correo electrónico"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">
                          Contraseña
                        </label>
                        <Link
                          to="/reset-password"
                          className="text-sm font-medium text-orange-600 hover:underline"
                        >
                          ¿Problemas para iniciar sesión?
                        </Link>
                      </div>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Ingresa tu contraseña"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-600 ml-2">
                            Mantener sesión iniciada
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-orange-600 hover:bg-orange-700 w-full">
                        Iniciar sesión
                      </button>
                    </div>
                  </div>
                </form>

                <div className="text-gray-600 text-center mt-6">
                  ¿No tienes una cuenta?{" "}
                  <Link
                    to="/signup"
                    className="text-orange-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Regístrate
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;