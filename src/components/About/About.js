import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Acerca de nosotros</h2>
      <p className="about-text">
        En nuestra tienda online de tecnología y videojuegos, nos esforzamos por
        ofrecer los mejores productos y servicios a nuestros clientes. Desde
        componentes de PC de alta calidad hasta los últimos lanzamientos de
        videojuegos, nuestra selección de productos está diseñada para satisfacer
        las necesidades de los aficionados a la tecnología y los gamers más
        exigentes.
      </p>
      <p className="about-text">
        Además de ofrecer una amplia variedad de productos, también nos
        enorgullece brindar un excelente servicio al cliente. Nuestro equipo
        está compuesto por expertos en tecnología y videojuegos que están
        disponibles para ayudarte con cualquier pregunta o problema que puedas
        tener.
      </p>
      <p className="about-text">
        ¡Gracias por elegir nuestra tienda online y esperamos que disfrutes de
        tus compras con nosotros!
      </p>
    </div>
  );
};

export default About;
