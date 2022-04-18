import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import UserProvider from "./context";

import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./pages/Login";
import NotFound from "./pages/NoFound";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:movieId" element={<Movie />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </Router>
      <GlobalStyle />
    </div>
  );
};

export default App;
