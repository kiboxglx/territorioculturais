import React from 'react';
import { Link } from 'react-router-dom';
import './SiteFooter.css';

const SiteFooter = ({ onOpenModal }) => (
    <footer className="site-footer" aria-label="Rodapé institucional">

        {/* Linha decorativa dourada */}
        <div className="site-footer__bar" aria-hidden="true" />

        <div className="container mx-auto px-8">

            {/* Topo: logo + missão */}
            <div className="site-footer__top">
                <div className="site-footer__brand">
                    <img
                        src="/IMG_4327-removebg-preview.png"
                        alt="Logo Territórios Culturais"
                        loading="lazy"
                        className="site-footer__logo"
                    />
                    <p className="site-footer__tagline">
                        Operadora técnica de desenvolvimento territorial<br />
                        com registro ANCINE nº 63126.
                    </p>
                </div>

                {/* Nav links */}
                <nav className="site-footer__nav" aria-label="Links do rodapé">
                    <div className="site-footer__nav-col">
                        <span className="site-footer__nav-heading">Navegação</span>
                        <Link to="/" className="site-footer__nav-link">Início</Link>
                        <Link to="/quem-somos" className="site-footer__nav-link">Quem Somos</Link>
                        <Link to="/metodologia" className="site-footer__nav-link">Metodologia</Link>
                        <Link to="/portfolio/cinema" className="site-footer__nav-link">Portfólio</Link>
                        <Link to="/galeria" className="site-footer__nav-link">Galeria</Link>
                    </div>
                    <div className="site-footer__nav-col">
                        <span className="site-footer__nav-heading">Legal & LGPD</span>
                        <Link to="/politica-de-privacidade" className="site-footer__nav-link">Política de Privacidade</Link>
                        <Link to="/termos-de-uso" className="site-footer__nav-link">Termos de Uso</Link>
                        <button onClick={onOpenModal} className="site-footer__nav-link site-footer__nav-link--btn text-left">
                            Solicitação de Dados (LGPD)
                        </button>
                    </div>
                    <div className="site-footer__nav-col">
                        <span className="site-footer__nav-heading">Contato</span>
                        <a href="tel:+5538998068804" className="site-footer__nav-link">+55 38 99806-8804</a>
                        <a href="tel:+5521998528804" className="site-footer__nav-link">+55 21 99852-8804</a>
                        <a href="mailto:territoriosculturaismg@yahoo.com" className="site-footer__nav-link">
                            territoriosculturaismg@yahoo.com
                        </a>
                    </div>
                </nav>
            </div>

            {/* Dados institucionais */}
            <div className="site-footer__institutional">
                <div className="site-footer__inst-item">
                    <span className="material-symbols-outlined site-footer__inst-icon" aria-hidden="true">location_on</span>
                    <span>Patos de Minas – MG, Brasil · CEP 38700-000</span>
                </div>
                <div className="site-footer__inst-item">
                    <span className="material-symbols-outlined site-footer__inst-icon" aria-hidden="true">corporate_fare</span>
                    <span>CNPJ 49.803.401/0001-79 · Territórios Culturais Desenvolvimento de Projetos Culturais LTDA</span>
                </div>
                <div className="site-footer__inst-item">
                    <span className="material-symbols-outlined site-footer__inst-icon" aria-hidden="true">movie</span>
                    <span>Registro ANCINE nº 63126</span>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="site-footer__bottom">
                <span className="site-footer__copy">
                    © {new Date().getFullYear()} Territórios Culturais LTDA — Todos os direitos reservados.
                </span>
                <span className="site-footer__lgpd-badge">
                    🔒 Em conformidade com a LGPD · Lei nº 13.709/2018
                </span>
            </div>
        </div>
    </footer>
);

export default SiteFooter;
