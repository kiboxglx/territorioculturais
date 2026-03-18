import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onContactClick }) => {
    const navigate = useNavigate();
    const scrollToSection = (id) => {
        if (window.location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Faixa de gradiente multicolorida no topo — estilo Afroreggae */}
            <div
                className="fixed top-0 left-0 right-0 z-60 h-[4px] pointer-events-none"
                style={{ background: 'linear-gradient(90deg, #11d4d4 0%, #f0c419 30%, #e8742a 55%, #d93d3b 75%, #9b30d4 100%)' }}
            />

            {/* Barra fixa de largura total — card sólido */}
            <header className="fixed top-[4px] left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-white/10 shadow-[0_2px_30px_rgba(0,0,0,0.5)]">
                <div className="container mx-auto px-8 py-0 flex items-center justify-between gap-6">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                    <img
                            src="/IMG_4327.PNG"
                            alt="Territórios Culturais"
                            className="h-28 md:h-32 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-300"
                        />
                    </Link>

                    {/* Links de navegação */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <a onClick={() => scrollToSection('home')} className="nav-link-premium">Início</a>
                        <Link to="/quem-somos" className="nav-link-premium">Empresa</Link>
                        <a onClick={() => scrollToSection('territorios')} className="nav-link-premium">Territórios</a>
                        <a onClick={() => scrollToSection('projetos')} className="nav-link-premium">Portfólio</a>
                        <a onClick={() => scrollToSection('blog')} className="nav-link-premium">Blog</a>
                        <a onClick={() => scrollToSection('investimento')} className="nav-link-premium font-bold text-primary">Investimento</a>
                    </nav>

                    {/* Botão Conectar com borda gradiente */}
                    <div className="flex-shrink-0 p-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #11d4d4, #f0c419, #e8742a, #d93d3b, #9b30d4)' }}>
                        <button
                            className="bg-charcoal text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all whitespace-nowrap"
                            onClick={onContactClick}
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
