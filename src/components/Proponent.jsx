import React from 'react';

const Proponent = () => {
    return (
        <section id="proponente" className="snap-section bg-charcoal">
            <div className="container mx-auto px-8 relative z-10 h-full flex flex-col justify-center">
                <div className="mb-16">
                    <span className="text-primary uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Liderança e Gestão</span>
                    <h2 className="font-playfair text-5xl md:text-6xl text-white">Sobre o Proponente</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* DNA Territorial */}
                    <div className="relative overflow-hidden group rounded-2xl h-[50vh] lg:h-[60vh]">
                        <img
                            alt="DNA Territorial"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQmPERTUfllTyXgUuLGCoKvh23XmBMmDnl0no_I29kSmCgYsldUG9tuvoS39yqXVMuYZEkAQggQ65T4NPzyxnlT18V8nDJkmNtxMuAjpfxd8-P_-15g3hBZtJ7Jiek0VRg-4SQS_HRjKeV3_N1AFtNCWrU4YzNH4ywNQd50y61IftSv0OeaPOP7QV5M7TI7K66enMkjw5wpYNbFerI2Kb6IEyLr-QV9NLcD80YR2ysVQ69ra2M-SLHEhN6Dx49mqxlxZ72zz_-LVQ"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col justify-end h-full">
                            <div>
                                <h3 className="font-playfair text-3xl mb-4 text-white group-hover:text-primary transition-colors">Visão Sistêmica</h3>
                                <p className="text-white/80 font-light leading-relaxed text-sm font-manrope">Uma abordagem técnica que une cultura e desenvolvimento socioeconômico de forma indissociável.</p>
                            </div>
                        </div>
                    </div>

                    {/* Ética e Rigor */}
                    <div className="relative overflow-hidden group rounded-2xl h-[50vh] lg:h-[60vh]">
                        <img
                            alt="Ética e Rigor"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABSjB6zIXiwBWuOH9CfpwKieTMwAuLTPJMKGAcjyKzh1xYUmuImBvWpHd3eXx9EOPULMAnVKOtRMPSvJUqZ848L-jR8xS1fM28Un4QKCCl9ogusFGEf-sJMHUPzimOxKZtJ2DVEl0yizJklt2TrMyUpvLcVSYcqz-dUkKa4edeZE9DvgiLKYMqPXamGRBD3X3xF6edAEnWmAQbGLFJw9tzugyfb1lfLOdLt0jcgcOsZ4H6FqB-DTvskYB27Th39hFXyFnZuZsj1ww"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col justify-end h-full">
                            <div>
                                <h3 className="font-playfair text-3xl mb-4 text-white group-hover:text-primary transition-colors">Compliance e Ética</h3>
                                <p className="text-white/80 font-light leading-relaxed text-sm font-manrope">Transparência absoluta na gestão de recursos em conformidade com as exigências da ANCINE e outras agências.</p>
                            </div>
                        </div>
                    </div>

                    {/* Valor Simbólico */}
                    <div className="relative overflow-hidden group rounded-2xl h-[50vh] lg:h-[60vh]">
                        <img
                            alt="Valor Simbólico"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-80 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRINbQYFcyRMCIoGTcewhQN4IEvyaQ3rA-uPOFKauoZhRBckRe1hSw4j_e0JuxjO6x-eL1oQ7TKTgS9xCTdPuvZttHD1aBmfdkzL_kLGzVoBxMDXgox6a36BMKc8G889HX19RGSUU8LR9sL8grXp1m1ynWHecDh-Kr7LdjnOrUa6VzGKb36HBcAmHAMhHKOjWtHhPI-ByARP1adKQWQ0adk6-R6jGtJ5ZGjqe_kubHbz7eNyLVCp3RfdRrcWEGWJ9iSxRom68MIS8"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col justify-end h-full">
                            <div>
                                <h3 className="font-playfair text-3xl mb-4 text-white group-hover:text-primary transition-colors">Legado Social</h3>
                                <p className="text-white/80 font-light leading-relaxed text-sm font-manrope">Compromisso com o impacto real no território, gerando valor que perdura muito além da execução do projeto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Proponent;
