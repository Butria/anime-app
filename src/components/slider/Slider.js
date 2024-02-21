import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderComponent = ({ titles }) => {
  // Asegúrate de que titles esté definido y no sea null
  if (!titles || titles.length === 0) {
    // Puedes retornar un mensaje o un componente diferente en caso de que no haya títulos
    return <p>No hay títulos disponibles</p>;
  }

  return (
    <Slider {...settings}>
      {titles.map((title) => (
        <div key={title.mal_id}>
          <h3>{title.title}</h3>
          {/* Otros detalles del título */}
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;