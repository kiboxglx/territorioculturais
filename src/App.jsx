import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import MethodologyPage from './pages/MethodologyPage';
import PortfolioCinemaPage from './pages/PortfolioCinemaPage';
import PortfolioEventosPage from './pages/PortfolioEventosPage';
import PortfolioGovernancaPage from './pages/PortfolioGovernancaPage';
import FormacaoCulturalPage from './pages/FormacaoCulturalPage';
import ProgramaDestinoPage from './pages/ProgramaDestinoPage';
import SistemaPage from './pages/SistemaPage';
import ObservatorioPage from './pages/ObservatorioPage';
import GalleryPage from './pages/GalleryPage';
import ProjectDetail from './pages/ProjectDetail';
import ContactModal from './components/ContactModal';
import MidiaKitCTA from './components/MidiaKitCTA';
import FloatingSponsorMenu from './components/FloatingSponsorMenu';

// Separate component to use `useLocation` hook inside Router context
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/quem-somos" element={<AboutPage />} />
          <Route path="/metodologia" element={<MethodologyPage />} />
          <Route path="/portfolio/cinema" element={<PortfolioCinemaPage />} />
          <Route path="/formacao" element={<FormacaoCulturalPage />} />
          <Route path="/portfolio-eventos" element={<PortfolioEventosPage onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/portfolio-governanca" element={<PortfolioGovernancaPage onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/programa-destino" element={<ProgramaDestinoPage />} />
          <Route path="/sistema" element={<SistemaPage />} />
          <Route path="/observatorio" element={<ObservatorioPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/projeto/:slug" element={<ProjectDetail onOpenModal={() => setIsModalOpen(true)} />} />
        </Routes>
      </AnimatePresence>

      {/* Global Contact Modal accessible from everywhere */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Global Conversion Tools */}
      <MidiaKitCTA />
      <FloatingSponsorMenu />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
