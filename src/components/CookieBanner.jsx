import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const COOKIE_KEY = 'tc_cookie_consent';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_KEY);
        if (!consent) {
            // Pequeno delay para não bloquear o LCP
            const t = setTimeout(() => setVisible(true), 1200);
            return () => clearTimeout(t);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(COOKIE_KEY, 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies e privacidade">
            <div className="cookie-banner__inner">
                <div className="cookie-banner__icon" aria-hidden="true">🍪</div>
                <div className="cookie-banner__text">
                    <p>
                        Utilizamos cookies essenciais para o funcionamento do site e, com seu consentimento,
                        cookies analíticos para melhorar sua experiência.{' '}
                        <Link to="/politica-de-privacidade" className="cookie-banner__link">
                            Política de Privacidade
                        </Link>
                        {' '}·{' '}
                        <Link to="/termos-de-uso" className="cookie-banner__link">
                            Termos de Uso
                        </Link>
                    </p>
                </div>
                <div className="cookie-banner__actions">
                    <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={decline}>
                        Recusar
                    </button>
                    <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={accept}>
                        Aceitar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
