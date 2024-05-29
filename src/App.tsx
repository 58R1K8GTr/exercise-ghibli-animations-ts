import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchApi from './services/vercelApi';
import FilmsContext from './context/FilmsContext';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { FilmType } from './types';

function App() {
  const [films, setFilms] = useState<FilmType[]>([]);
  const [favorites, setFavorites] = useState<FilmType[]>([]);

  useEffect(() => {
    async function callFetch() {
      const data = await fetchApi(
        'https://api-trybe-frontend.vercel.app/api/ghibli-animations',
      );
      setFilms(data);
    }
    callFetch();
  }, []);

  function toggleFavorite(item: FilmType) {
    const isAlreadyFavorite = favorites.find((favorite) => favorite.id === item.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  }

  const context = {
    films,
    favorites,
    toggleFavorite,
  };

  return (
    <FilmsContext.Provider value={ context }>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/favorites" Component={ Favorites } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
