/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Protection from './pages/Protection';
import Construction from './pages/Construction';
import Ranking from './pages/Ranking';
import MapPage from './pages/MapPage';
import Gear from './pages/Gear';
import RoutesPage from './pages/Routes';
import Curiosities from './pages/Curiosities';
import { LanguageSelector } from './components/LanguageSelector';

export default function App() {
  return (
    <Router>
      <LanguageSelector />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proteccio" element={<Protection />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/equipatge" element={<Gear />} />
        <Route path="/rutes" element={<RoutesPage />} />
        <Route path="/curiositats" element={<Curiosities />} />
      </Routes>
    </Router>
  );
}
