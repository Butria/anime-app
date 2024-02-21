import React, { useState, useEffect } from 'react';
import SearchBar from '../components/search/SearchBar';
import Slider from '../components/slider/Slider';
import { getAnimeTitles, calculateAverageScore, searchAnime } from '../services/api';

const Home = () => {
  const [sliderTitles, setSliderTitles] = useState([]);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const fetchSliderTitles = async () => {
      try {
        const response = await getAnimeTitles();
        const titles = response.results.slice(0, 5);
        setSliderTitles(titles);
        const avgScore = calculateAverageScore(titles);
        setAverageScore(avgScore);
      } catch (error) {
        console.error('Error fetching slider titles:', error);
      }
    };

    fetchSliderTitles();
  }, []);

  const handleSearch = async (query) => {
    try {
      const titles = await searchAnime(query);
      setSliderTitles(titles.slice(0, 5));
      const avgScore = calculateAverageScore(titles);
      setAverageScore(avgScore);
    } catch (error) {
      console.error('Error searching anime titles:', error);
    }
  };

  const renderRecommendation = () => {
    if (averageScore >= 1 && averageScore <= 4) {
      return <div>I do not recommend it</div>;
    } else if (averageScore >= 5 && averageScore <= 7) {
      return <div>You may have fun</div>;
    } else {
      return <div>Great, this is one of the best anime</div>;
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Slider titles={sliderTitles} />
      <div>
        <h3>Average Score: {averageScore}</h3>
        {renderRecommendation()}
      </div>
      {/* Otros componentes o secciones de la página principal */}
    </div>
  );
};

export default Home;