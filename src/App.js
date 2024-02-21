import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/search/SearchBar';
import SliderComponent from './components/slider/Slider';
import axios from 'axios';
import { BASE_URL } from './services/api'; // Ajusta la ruta de importación

const App = () => {
  const [sliderTitles, setSliderTitles] = useState([]);

  const handleSearch = async (query) => {
    try {
      // Realiza la llamada a la API de Jikan (versión 4) para obtener resultados de búsqueda
      const response = await axios.get(`${BASE_URL}search/anime?q=${query}`);
      
      // Extrae los resultados de la respuesta
      const animeResults = response.data.results;

      // Actualiza el estado con los resultados
      setSliderTitles(animeResults);
    } catch (error) {
      console.error('Error al realizar la llamada a la API de Jikan:', error);
      // Manejar errores o mostrar un mensaje al usuario
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Aplicación de Anime</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {sliderTitles.length > 0 ? (
          <SliderComponent titles={sliderTitles} />
        ) : (
          <p>No hay títulos disponibles</p>
        )}
      </main>
    </div>
  );
};

export default App;