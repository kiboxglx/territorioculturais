import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TermosDeUso = () => (
    <div className="min-h-screen bg-charcoal text-white font-manrope">
        <Helmet>
            <title>Termos de Uso | Territórios Culturais</title>
            <meta name="description" content="Termos de Uso do site da Territórios Culturais LTDA." />
        </Helmet>

        {/* Header */}
        <div className="bg-black/60 border-b border-white/10 px-8 py-5 sticky top-0 z-50 backdrop-blur-md">
            <div className="container mx-auto flex items-center gap-4">
                <Link to="/" className="text-primary hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Voltar
                </Link>
                <span className="text-white/20">|</span>
                <span className="text-white/60 text-sm uppercase tracking-widest">Termos de Uso</span>
            </div>
        </div>

        <div className="container mx-auto px-8 py-20 max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">Termos de Uso</h1>
            <p className="text-white/40 text-sm mb-12 uppercase tracking-widest">Última atualização: Janeiro de 2025</p>

            {[
                {
                    title: '1. Aceitação',
                    body: `Ao acessar e utilizar o site da Territórios Culturais LTDA (territoriosculturaismg.com.br e localhost), você concorda com estes Termos de Uso. Caso não concorde, encerre o acesso ao site.`
                },
                {
                    title: '2. Descrição dos Serviços',
                    body: `O site tem caráter informativo e institucional, apresentando o portfólio de projetos culturais, serviços e oportunidades de patrocínio da Territórios Culturais LTDA. Não constitui oferta pública de valores mobiliários.`
                },
                {
                    title: '3. Propriedade Intelectual',
                    body: `Todo o conteúdo disponível no site — textos, imagens, vídeos, logotipos, marcas, layout e código — é propriedade da Territórios Culturais LTDA ou de seus licenciadores, protegido pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pelas leis de propriedade intelectual aplicáveis.

É vedada qualquer reprodução, distribuição, modificação ou uso comercial sem autorização prévia e expressa por escrito.`
                },
                {
                    title: '4. Uso Permitido',
                    body: `Você pode:

• Acessar e navegar pelo site para fins informativos;
• Compartilhar links públicos do site;
• Baixar materiais disponibilizados expressamente para download (mídia kits, releases).

É vedado:

• Scraping, crawling automatizado ou extração massiva de dados;
• Uso do site ou de seu conteúdo para fins ilícitos, difamatórios ou que violem direitos de terceiros;
• Tentar comprometer a segurança ou integridade do site.`
                },
                {
                    title: '5. Limitação de Responsabilidade',
                    body: `O site é fornecido "no estado em que se encontra". A Territórios Culturais LTDA não garante a disponibilidade ininterrupta e não se responsabiliza por danos decorrentes do uso ou impossibilidade de uso do site, incluindo perda de dados ou danos indiretos.

As informações sobre projetos, valores e editais são fornecidas a título informativo e podem ser alteradas sem aviso prévio.`
                },
                {
                    title: '6. Links Externos',
                    body: `O site pode conter links para sites de terceiros (MinC, ANCINE, prefeituras, editais). Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas desses sites.`
                },
                {
                    title: '7. Modificações',
                    body: `Podemos modificar estes Termos a qualquer momento. A versão atualizada será publicada nesta página com nova data. O uso continuado do site após as modificações implica aceitação dos novos termos.`
                },
                {
                    title: '8. Lei Aplicável e Foro',
                    body: `Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Patos de Minas – MG para dirimir quaisquer controvérsias, com renúncia expressa a qualquer outro, por mais privilegiado que seja.`
                },
                {
                    title: '9. Contato',
                    body: `Para dúvidas sobre estes Termos: territoriosculturaismg@yahoo.com
Territórios Culturais Desenvolvimento de Projetos Culturais LTDA
Patos de Minas – MG`
                },
            ].map((s, i) => (
                <div key={i} className="mb-10">
                    <h2 className="font-playfair text-xl text-primary mb-3">{s.title}</h2>
                    <div className="text-white/70 text-sm leading-relaxed whitespace-pre-line border-l-2 border-white/10 pl-5">{s.body}</div>
                </div>
            ))}

            <div className="border-t border-white/10 pt-10 mt-10 text-center">
                <Link to="/politica-de-privacidade" className="text-primary hover:text-white transition-colors text-sm underline underline-offset-4 mr-6">Política de Privacidade</Link>
                <Link to="/" className="text-white/40 hover:text-white transition-colors text-sm">← Voltar ao Site</Link>
            </div>
        </div>
    </div>
);

export default TermosDeUso;
