import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PoliticaPrivacidade = () => (
    <div className="min-h-screen bg-charcoal text-white font-manrope">
        <Helmet>
            <title>Política de Privacidade | Territórios Culturais</title>
            <meta name="description" content="Política de Privacidade da Territórios Culturais LTDA, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)." />
        </Helmet>

        {/* Header */}
        <div className="bg-black/60 border-b border-white/10 px-8 py-5 sticky top-0 z-50 backdrop-blur-md">
            <div className="container mx-auto flex items-center gap-4">
                <Link to="/" className="text-primary hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Voltar
                </Link>
                <span className="text-white/20">|</span>
                <span className="text-white/60 text-sm uppercase tracking-widest">Política de Privacidade</span>
            </div>
        </div>

        <div className="container mx-auto px-8 py-20 max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">Política de Privacidade</h1>
            <p className="text-white/40 text-sm mb-12 uppercase tracking-widest">Última atualização: Janeiro de 2025</p>

            {[
                {
                    title: '1. Identificação do Controlador',
                    body: `A Territórios Culturais Desenvolvimento de Projetos Culturais LTDA, pessoa jurídica de direito privado, com sede em Patos de Minas – MG, é a controladora dos seus dados pessoais, nos termos da Lei nº 13.709/2018 (LGPD).

Contato do Encarregado de Dados (DPO): territoriosculturaismg@yahoo.com`
                },
                {
                    title: '2. Dados Coletados',
                    body: `Coletamos apenas os dados estritamente necessários para as finalidades informadas:

• Nome completo e e-mail — para resposta a solicitações de apresentação e agendamentos;
• Dados de navegação (cookies analíticos) — apenas com seu consentimento, para entender como o site é utilizado e aprimorá-lo;
• Dados fornecidos voluntariamente em formulários de contato.

Não coletamos dados sensíveis (art. 11 da LGPD), dados de menores de 18 anos, nem realizamos decisões automatizadas com impacto jurídico.`
                },
                {
                    title: '3. Finalidades e Base Legal',
                    body: `Os dados são tratados com as seguintes finalidades e bases legais (art. 7º LGPD):

• Execução de contrato / pré-contrato: para responder solicitações e enviar materiais solicitados;
• Legítimo interesse: para manutenção da segurança do site e prevenção de fraudes;
• Consentimento: para cookies analíticos e envio de comunicações de marketing (pode ser retirado a qualquer momento).`
                },
                {
                    title: '4. Compartilhamento de Dados',
                    body: `Não vendemos, alugamos ou comercializamos seus dados. Os dados poderão ser compartilhados apenas com:

• Prestadores de serviços técnicos (hospedagem, e-mail) que atuam como operadores sob contrato de confidencialidade;
• Autoridades públicas, quando exigido por lei ou ordem judicial.`
                },
                {
                    title: '5. Retenção dos Dados',
                    body: `Os dados são retidos pelo tempo necessário ao cumprimento da finalidade ou conforme exigência legal. Dados de contato são mantidos por até 5 anos. Dados de navegação (cookies) são eliminados conforme o prazo definido em cada cookie, informado na nossa central de preferências.`
                },
                {
                    title: '6. Seus Direitos (art. 18 da LGPD)',
                    body: `Você tem direito a:

• Confirmação e acesso aos seus dados;
• Correção de dados incompletos ou desatualizados;
• Anonimização, bloqueio ou eliminação de dados desnecessários;
• Portabilidade dos dados;
• Eliminação de dados tratados com consentimento;
• Informação sobre compartilhamentos realizados;
• Revogação do consentimento a qualquer momento;
• Oposição ao tratamento.

Para exercer seus direitos, envie um e-mail para: territoriosculturaismg@yahoo.com`
                },
                {
                    title: '7. Cookies',
                    body: `Utilizamos:

• Cookies essenciais: necessários para o funcionamento básico do site (não podem ser desativados);
• Cookies analíticos: coletados apenas com seu consentimento, para análise de audiência e melhoria da experiência.

Você pode alterar suas preferências a qualquer momento limpando o armazenamento local do seu navegador.`
                },
                {
                    title: '8. Segurança',
                    body: `Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição, incluindo uso de HTTPS, controle de acesso restrito e atualização periódica de sistemas.`
                },
                {
                    title: '9. Alterações nesta Política',
                    body: `Podemos atualizar esta Política periodicamente. A data de "última atualização" no topo indica quando a versão atual foi publicada. Alterações substanciais serão comunicadas via banner no site.`
                },
                {
                    title: '10. Autoridade Nacional',
                    body: `Caso considere que o tratamento de seus dados viola a LGPD, você pode contatar a Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd`
                },
            ].map((s, i) => (
                <div key={i} className="mb-10">
                    <h2 className="font-playfair text-xl text-primary mb-3">{s.title}</h2>
                    <div className="text-white/70 text-sm leading-relaxed whitespace-pre-line border-l-2 border-white/10 pl-5">{s.body}</div>
                </div>
            ))}

            <div className="border-t border-white/10 pt-10 mt-10 text-center">
                <Link to="/termos-de-uso" className="text-primary hover:text-white transition-colors text-sm underline underline-offset-4 mr-6">Termos de Uso</Link>
                <Link to="/" className="text-white/40 hover:text-white transition-colors text-sm">← Voltar ao Site</Link>
            </div>
        </div>
    </div>
);

export default PoliticaPrivacidade;
