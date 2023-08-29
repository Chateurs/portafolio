import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeaderMobile from './HeaderMobile';

function Head() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el tamaño de la pantalla al cambiar el tamaño de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Eliminar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 880 ? <HeaderMobile /> : <Header />}
    </>
  );
}

export default Head;