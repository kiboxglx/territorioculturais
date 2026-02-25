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
        <header className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center pointer-events-none">
            <div className="pointer-events-auto">
                <Link to="/">
                    <img
                        src="/LOGO_VETOR-removebg-preview.png"
                        alt="Territórios Culturais"
                        className="h-10 md:h-12 w-auto cursor-pointer object-contain"
                    />
                </Link>
            </div>

            <nav className="hidden lg:flex gap-8 pointer-events-auto bg-charcoal/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <a onClick={() => scrollToSection('inicio')} className="text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer text-white">Início</a>
                <Link to="/portfolio" className="text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer text-white">Portfólio</Link>
                <Link to="/galeria" className="text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer text-white">Galeria</Link>
                <a onClick={() => scrollToSection('nossa-essencia')} className="text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer text-white">Quem somos</a>
                <a onClick={() => scrollToSection('metodologia')} className="text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer text-white">Metodologia</a>
                <a onClick={() => scrollToSection('servicos')} className="text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors cursor-pointer text-white">Serviços</a>
            </nav>

            <div className="pointer-events-auto">
                <button
                    className="bg-primary text-charcoal px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform"
                    onClick={onContactClick}
                >
                    Conectar
                </button>
            </div>
        </header>
    );
};

export default Navbar;
