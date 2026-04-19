import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SpeakUpResearch from './pages/SpeakUpResearch';
import SimulationResearch from './pages/SimulationResearch';
import VirtualHospital from './pages/VirtualHospital';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research/speak-up" element={<SpeakUpResearch />} />
        <Route path="/research/simulation" element={<SimulationResearch />} />
        <Route path="/projects/virtual-hospital" element={<VirtualHospital />} />
      </Routes>
    </HashRouter>
  );
}
