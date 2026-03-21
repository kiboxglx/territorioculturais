import React from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from './ProgressiveImage';
import assetsManifest from '../data/assets-manifest.json';
import './RealizedCard.css';

const SPONSOR_MAP = {
    'LPG (Lei Paulo Gustavo)': [
        { label: 'Lei Paulo Gustavo', mod: 'lpg' },
        { label: 'Ministério da Cultura', mod: 'minc' },
        { label: 'Governo Federal', mod: '' },
        { label: 'Prefeitura Patos de Minas', mod: 'prefeitura' },
    ],
    'PNAB (Política Nacional Aldir Blanc)': [
        { label: 'PNAB · Aldir Blanc', mod: 'pnab' },
        { label: 'Ministério da Cultura', mod: 'minc' },
        { label: 'Governo Federal', mod: '' },
        { label: 'Prefeitura Patos de Minas', mod: 'prefeitura' },
    ],
};

const RealizedCard = ({ project }) => {
    const assetData = assetsManifest.projects[project.id] || {};
    const mainImg = assetData.main || project.heroImage;
    const fallbackImg = assetData.fallback || project.fallbackImage;
    const seoAlt = assetData.alt || `${project.title} — ${project.locationLabel?.replace('📍 ', '')}`;
    const sponsors = SPONSOR_MAP[project.incentiveLaw] || [];

    return (
        <article
            className="realized-card"
            aria-label={`Evento realizado: ${project.title}`}
        >
            <div className="realized-card__image-wrap">
                <ProgressiveImage
                    src={mainImg}
                    fallbackUrl={fallbackImg}
                    alt={seoAlt}
                    loading="lazy"
                    fetchPriority="auto"
                    sizes="(max-width: 768px) 300px, 340px"
                    className="w-full h-full"
                />
                <div className="realized-card__image-overlay" aria-hidden="true" />
                <span className="realized-card__status-badge">{project.status}</span>
            </div>

            <div className="realized-card__body">
                <span className="realized-card__law-badge">{project.incentiveLaw}</span>

                <div>
                    <h3 className="realized-card__title">{project.title}</h3>
                    <div className="realized-card__location" style={{ marginTop: '6px' }}>
                        <span className="material-symbols-outlined realized-card__location-icon" aria-hidden="true">location_on</span>
                        {project.locationLabel?.replace('📍 ', '')}
                    </div>
                </div>

                <p className="realized-card__description">{project.description}</p>

                <div className="realized-card__divider" aria-hidden="true" />

                <div className="realized-card__sponsor-grid">
                    <span className="realized-card__sponsor-label">Realização &amp; Patrocínio</span>
                    <div className="realized-card__sponsor-logos">
                        {sponsors.map((s) => (
                            <span
                                key={s.label}
                                className={`sponsor-badge${s.mod ? ` sponsor-badge--${s.mod}` : ''}`}
                            >
                                {s.label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="realized-card__divider" aria-hidden="true" />

                <Link
                    to={`/projeto/${project.slug}`}
                    className="realized-card__cta"
                    aria-label={`Ver case study de ${project.title}`}
                >
                    Ver Case Study
                    <span className="material-symbols-outlined realized-card__cta-icon" aria-hidden="true">arrow_forward</span>
                </Link>
            </div>
        </article>
    );
};

export default RealizedCard;
