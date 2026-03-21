import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onContactClick }) => {
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const THRESHOLD = 80;
        const onScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentY = window.scrollY;
                    if (currentY > lastScrollY.current && currentY > THRESHOLD) {
                        setHidden(true);
                    } else {
                        setHidden(false);
                    }
                    lastScrollY.current = currentY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (id) => {
        if (window.location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Faixa de gradiente multicolorida no topo */}
            <div
                className="fixed top-0 left-0 right-0 z-60 h-[4px] pointer-events-none"
                style={{ background: 'linear-gradient(90deg, #11d4d4 0%, #f0c419 30%, #e8742a 55%, #d93d3b 75%, #9b30d4 100%)' }}
                aria-hidden="true"
            />

            {/* Header com headroom */}
            <header
                className="fixed top-[4px] left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-white/10 shadow-[0_2px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 will-change-transform"
                style={{ transform: hidden ? 'translateY(-110%)' : 'translateY(0)' }}
                /* Não usar aria-hidden no header — impede navegação por teclado.
                   O efeito visual de esconder é suficiente; AT ainda pode acessar. */
            >
                <div className="container mx-auto px-8 py-0 flex items-center justify-between gap-6">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0" aria-label="Territórios Culturais — página inicial">
                        <img
                            src="/IMG_4327.PNG"
                            alt="Territórios Culturais"
                            width={128}
                            height={128}
                            className="h-28 md:h-32 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                    {/* Links de navegação — <button> para scroll, <Link> para rotas */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Menu principal">
                        <button onClick={() => scrollToSection('home')} className="nav-link-premium">
                            Início
                        </button>
                        <Link to="/quem-somos" className="nav-link-premium">Empresa</Link>
                        <button onClick={() => scrollToSection('territorios')} className="nav-link-premium">
                            Territórios
                        </button>
                        <button onClick={() => scrollToSection('projetos')} className="nav-link-premium">
                            Portfólio
                        </button>
                        <Link to="/portfolio-eventos" className="nav-link-premium">Eventos</Link>
                        <Link to="/galeria" className="nav-link-premium">Galeria</Link>
                        <Link to="/programa-destino" className="nav-link-premium">Programa Destino</Link>
                    </nav>

                    {/* Botão Conectar */}
                    <div className="flex-shrink-0 p-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #11d4d4, #f0c419, #e8742a, #d93d3b, #9b30d4)' }}>
                        <button
                            className="bg-charcoal text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-[background] whitespace-nowrap focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
                            onClick={onContactClick}
                            aria-label="Abrir formulário de contato"
                        >
                            Conectar
                        </button>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Navbar;
