import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';

import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NoFound';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieId" element={<Movie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  )
}

export default App;
