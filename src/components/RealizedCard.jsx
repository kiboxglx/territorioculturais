import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Expand } from 'lucide-react';
import ProgressiveImage from './ProgressiveImage';
import assetsManifest from '../data/assets-manifest.json';
import './RealizedCard.css';

const RealizedCard = ({ project, onOpenModal }) => {
    const assetData = assetsManifest.projects[project.id] || {};
    const mainImg = assetData.main || project.heroImage;
    const fallbackImg = assetData.fallback || project.fallbackImage;
    const seoAlt = assetData.alt || `${project.title} — ${project.locationLabel?.replace('📍 ', '')}`;

    return (
        <div
            className="realized-card group"
            role="article"
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
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                />

                <div className="realized-card__overlay-primary" aria-hidden="true" />
                <div className="realized-card__overlay-secondary" aria-hidden="true" />

                {project.logo && (
                    <div className="realized-card__logo-wrap">
                        <img
                            src={project.logo}
                            alt={`Logo ${project.title}`}
                            className="realized-card__logo"
                        />
                    </div>
                )}

                <div className="realized-card__expand-btn" aria-hidden="true">
                    <Expand size={16} className="text-primary" />
                </div>
            </div>

            <div className="realized-card__body">
                <div className="realized-card__header">
                    <h3 className="realized-card__title">{project.title}</h3>

                    <div className="realized-card__location">
                        <MapPin size={16} className="realized-card__location-icon" aria-hidden="true" />
                        <span className="realized-card__location-text">{project.location || project.locationLabel?.replace('📍 ', '')}</span>
                    </div>
                </div>

                <div className="realized-card__divider" aria-hidden="true" />

                {project.logosImage && (
                    <div className="realized-card__logos-strip">
                        <img
                            src={project.logosImage}
                            alt="Logos dos patrocinadores"
                            className="realized-card__logos-img"
                        />
                    </div>
                )}

                <div className="realized-card__actions">
                    <Link
                        to={`/projeto/${project.slug}`}
                        className="realized-card__cta group/btn"
                        aria-label={`Ver case study de ${project.title}`}
                    >
                        <span>Saiba Mais</span>
                        <ArrowRight size={14} className="realized-card__cta-icon text-primary" />
                        <div className="realized-card__cta-glow" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            <div className="realized-card__bottom-glow" aria-hidden="true" />
        </div>
    );
};

export default RealizedCard;
