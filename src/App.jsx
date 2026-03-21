import React, { lazy, Suspense, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// ─── Eagerly loaded (above-the-fold / always needed) ─────────────────────────
import Home from './pages/Home';
import ContactModal from './components/ContactModal';
import FloatingSponsorMenu from './components/FloatingSponsorMenu';
import CookieBanner from './components/CookieBanner';

// ─── Lazily loaded pages (code-split per route) ───────────────────────────────
const AboutPage             = lazy(() => import('./pages/AboutPage'));
const MethodologyPage       = lazy(() => import('./pages/MethodologyPage'));
const PortfolioCinemaPage   = lazy(() => import('./pages/PortfolioCinemaPage'));
const PortfolioEventosPage  = lazy(() => import('./pages/PortfolioEventosPage'));
const PortfolioGovernancaPage = lazy(() => import('./pages/PortfolioGovernancaPage'));
const FormacaoCulturalPage  = lazy(() => import('./pages/FormacaoCulturalPage'));
const ProgramaDestinoPage   = lazy(() => import('./pages/ProgramaDestinoPage'));
const SistemaPage           = lazy(() => import('./pages/SistemaPage'));
const ObservatorioPage      = lazy(() => import('./pages/ObservatorioPage'));
const GalleryPage           = lazy(() => import('./pages/GalleryPage'));
const ProjectDetail         = lazy(() => import('./pages/ProjectDetail'));
const PoliticaPrivacidade   = lazy(() => import('./pages/PoliticaPrivacidade'));
const TermosDeUso           = lazy(() => import('./pages/TermosDeUso'));

// ─── Route-level loading fallback ─────────────────────────────────────────────
const PageLoader = () => (
  <div
    role="status"
    aria-label="Carregando página"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: '#6b7280',
      fontSize: '0.875rem',
    }}
  >
    <span>Carregando…</span>
  </div>
);

// ─── Animated route container ─────────────────────────────────────────────────
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const connectBtnRef = useRef(null); // ref do trigger do modal — retorno de foco (WCAG 2.4.3)

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                       element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
            <Route path="/quem-somos"             element={<AboutPage />} />
            <Route path="/metodologia"            element={<MethodologyPage />} />
            <Route path="/portfolio/cinema"       element={<PortfolioCinemaPage />} />
            <Route path="/formacao"               element={<FormacaoCulturalPage />} />
            <Route path="/portfolio-eventos"      element={<PortfolioEventosPage onOpenModal={() => setIsModalOpen(true)} />} />
            <Route path="/portfolio-governanca"   element={<PortfolioGovernancaPage onOpenModal={() => setIsModalOpen(true)} />} />
            <Route path="/programa-destino"       element={<ProgramaDestinoPage />} />
            <Route path="/sistema"                element={<SistemaPage />} />
            <Route path="/observatorio"           element={<ObservatorioPage />} />
            <Route path="/galeria"                element={<GalleryPage />} />
            <Route path="/projeto/:slug"          element={<ProjectDetail onOpenModal={() => setIsModalOpen(true)} />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/termos-de-uso"          element={<TermosDeUso />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} triggerRef={connectBtnRef} />
      <FloatingSponsorMenu />
      <CookieBanner />
    </>
  );
};

// ─── App root ──────────────────────────────────────────────────────────────────
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
