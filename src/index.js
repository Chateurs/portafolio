import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Head from './components/Head';
import Banner from './components/Banner'
import Theme from './components/styles/Theme';
import AboutMe from './components/AboutMe'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
    <Head/> 
    <body>
      <Banner/>,
      <AboutMe info='Soy un desarrollador web en busca de nuevos proyectos.
       Con muchas ganas de demostrar mis habilidades y capacidades obtenidas,
       con espacio y disposición para aprender más y mejorar en cualquier área posible, 
       para cada proyecto me esfuerzo por mostrar trabajo en equipo 
       y ayudar con todo lo que esté a mi alcance, 
      también compartiendo ideas para obtener el mejor resultado para cada proyecto.' />
    
    </body>
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
