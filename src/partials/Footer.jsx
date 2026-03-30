import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Área superior: Bloques */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1er bloque */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
            </div>
            <div className="text-sm text-gray-600">
              <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">
                Términos
              </Link> ·{" "}
              <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">
                Política de privacidad
              </Link>
            </div>
          </div>

          {/* 2do bloque */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Productos</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Estudio Web
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  DynamicBox Flex
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Formularios Programables
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Integraciones
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Línea de comandos
                </Link>
              </li>                            
            </ul>
          </div>

          {/* 3er bloque */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Recursos</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Documentación
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Tutoriales y guías
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Centro de soporte
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Socios
                </Link>
              </li>
            </ul>
          </div>

          {/* 4to bloque */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Empresa</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Sobre nosotros
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Valores
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Precios
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* 5to bloque */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Suscríbete</h6>
            <p className="text-sm text-gray-600 mb-4">
              Recibe las últimas noticias y artículos en tu correo cada mes.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Correo electrónico
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Tu correo"
                      required
                    />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Suscribirse">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-orange-600 mx-3 flex-shrink-0" viewBox="0 0 12 12">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                      </svg>
                    </button>
                  </div>
                  {/* Mensaje de éxito */}
                  {/* <p className="mt-2 text-green-600 text-sm">¡Gracias por suscribirte!</p> */}
                </div>
              </div>
            </form>
          </div>

        </div>

        {/* Área inferior */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Redes sociales */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link to="#" aria-label="Twitter" />
            </li>
            <li className="ml-4">
              <Link to="#" aria-label="Github" />
            </li>
            <li className="ml-4">
              <Link to="#" aria-label="Facebook" />
            </li>
          </ul>

        </div>

      </div>
    </footer>
  );
}

export default Footer;