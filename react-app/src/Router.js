import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Locate from './module/Locate';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Router = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<Locate />} />
      <Route path="/locate" element={<Locate />} />
      <Route path="/view-position" element={<Locate />} />
    </Routes>
  </main>
);

export default Router;
