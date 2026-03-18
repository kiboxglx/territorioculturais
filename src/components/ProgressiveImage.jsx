import React, { useState, useCallback, useRef, useEffect } from 'react';

/**
 * ProgressiveImage — Componente de Imagem com LQIP (Low Quality Image Placeholder)
 *
 * Plano de Curadoria Visual Territórios Culturais v1.0
 *
 * Comportamento:
 * - Exibe imediatamente um placeholder de baixa resolução com blur intenso
 * - Ao carregar a imagem real, faz transição suave de 700ms (dissolve)
 * - Suporta prioridade de carregamento: "high" para heróis, "lazy" para abaixo da dobra
 * - Aceita aspect ratio via className (ex: "aspect-[21/9]", "aspect-video", "aspect-[3/4]")
 * - Todos os atributos de acessibilidade são obrigatórios (alt estratégico)
 *
 * Props:
 * @param {string}  src           - URL da imagem real (preferencialmente .webp)
 * @param {string}  fallbackUrl   - URL de contingência (ex: Unsplash) se o src principal falhar
 * @param {string}  blurSrc       - URL da imagem de baixa qualidade (placeholder blur ~40px wide)
 * @param {string}  alt           - Alt text descritivo e estratégico para SEO
 * @param {string}  className     - Classes adicionais (aspect ratio, bordas, etc.)
 * @param {string}  loading       - "lazy" | "eager" — padrão "lazy"
 * @param {string}  fetchPriority - "high" | "low" | "auto" — padrão "auto"
 * @param {string}  sizes         - Hint de tamanho responsivo para o browser (srcset)
 * @param {object}  imgClassName  - Classes internas na tag <img>
 * @param {object}  style         - Estilos adicionais no container
 */
const ProgressiveImage = ({
    src,
    fallbackUrl,
    blurSrc,
    alt,
    className = '',
    loading = 'lazy',
    fetchPriority = 'auto',
    sizes,
    imgClassName = '',
    style = {},
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);
    const [isFallingBack, setIsFallingBack] = useState(false);
    const imgRef = useRef(null);

    // Fix para imagens já em cache: onLoad não dispara para imagens cacheadas
    useEffect(() => {
        if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
            setIsLoaded(true);
        }
    }, [currentSrc]);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        if (!isFallingBack && fallbackUrl) {
            setCurrentSrc(fallbackUrl);
            setIsFallingBack(true);
        } else {
            setHasError(true);
            setIsLoaded(true); // Mostrar fallback sem blur infinito
        }
    }, [isFallingBack, fallbackUrl]);

    // Atualiza currentSrc se a prop mudar fora (ex: filtros na galeria)
    React.useEffect(() => {
        setCurrentSrc(src);
        setIsFallingBack(false);
        setIsLoaded(false);
        setHasError(false);
    }, [src]);

    return (
        <div
            className={`relative overflow-hidden bg-charcoal/60 ${className}`}
            style={style}
            aria-hidden={!alt ? 'true' : undefined}
        >
            {/* ── Blur Placeholder (LQIP) ─────────────────────────────
                Visível até a imagem real carregar.
                blur-xl + scale-110 para cobrir bordas do blur nativo.
                Transição de opacidade de 700ms ao ser substituído.
            ──────────────────────────────────────────────────────── */}
            {blurSrc && !hasError && (
                <img
                    src={blurSrc}
                    alt=""
                    aria-hidden="true"
                    className={`
                        absolute inset-0 w-full h-full object-cover
                        blur-xl scale-110
                        transition-opacity duration-700
                        ${isLoaded ? 'opacity-0' : 'opacity-100'}
                    `}
                    style={{ filter: 'blur(20px) saturate(0.8)' }}
                />
            )}

            {/* ── Shimmer Skeleton ─────────────────────────────────────
                Anima enquanto não há blurSrc OU enquanto carrega.
            ──────────────────────────────────────────────────────── */}
            {!blurSrc && !isLoaded && !hasError && (
                <div
                    className="absolute inset-0 bg-linear-to-r from-white/5 via-white/10 to-white/5 animate-pulse"
                    aria-hidden="true"
                />
            )}

            {/* ── Imagem Real ──────────────────────────────────────────
                Começa invisível (opacity-0), emerge em 700ms após load.
                decoding="async" libera o thread principal durante decodificação.
            ──────────────────────────────────────────────────────── */}
            {!hasError ? (
                <img
                    ref={imgRef}
                    src={currentSrc}
                    alt={alt}
                    loading={loading}
                    decoding="async"
                    fetchPriority={fetchPriority}
                    sizes={sizes}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`
                        w-full h-full object-cover
                        transition-opacity duration-700
                        ${isLoaded ? 'opacity-100' : 'opacity-0'}
                        ${imgClassName}
                    `}
                />
            ) : (
                /* ── Fallback de Erro ────── */
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/80 gap-2"
                    role="img"
                    aria-label={alt}
                >
                    <span
                        className="material-symbols-outlined text-white/20 text-5xl"
                        aria-hidden="true"
                    >
                        broken_image
                    </span>
                    <span className="text-white/20 text-[10px] uppercase tracking-widest font-manrope">
                        Imagem indisponível
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProgressiveImage;
