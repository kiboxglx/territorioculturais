import React from 'react';

const Experience = () => {
    return (
        <section id="legado" className="snap-section bg-background-dark relative">
            <div className="container mx-auto px-8 py-20 relative z-10 h-full flex flex-col justify-center">
                <div className="mb-16">
                    <span className="text-accent-red uppercase tracking-[0.5em] text-xs font-bold mb-4 block font-manrope">Track Record</span>
                    <h2 className="font-playfair text-5xl md:text-6xl text-white">Territórios Conquistados</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Cine Território */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                        <img
                            alt="Cine Território"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxWJTnAE-s3YTKSf10JvcG4jaOsJEdaprU9QlKnzHP_VEm0s4got-gsiqeZ-xvCc-Gyt8pijq_-6Hs-TxTBBNadNYWEwQeF43SpQ9H0FaBmWXfFi_B8cPGm1jBt5s3azNyD-CjZihwPieOlN5bCF5CVsJjcqsY5AgaO5-FWXaEnbvxWpGFKSmRaExIPMI-tKurtRVBUVrYcSEIIrfq6rfpqwtseAZsUMqpZn-tTXqhQ2j-iXguaYjGF6Ga1bXgI8qxgFCoc6qXDZI"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <h4 className="font-playfair text-2xl mb-2 text-white">Cine Território</h4>
                            <p className="text-sm text-white/70 font-light font-manrope">Levando a sétima arte onde o asfalto termina e a imaginação começa.</p>
                        </div>
                    </div>

                    {/* Card 2: Luz e Imagem */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                        <img
                            alt="Educação"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeZam3As_WjW5M18PoDQR7MF0J5Yrv5dr_ghbOveGjrUqMS9WW2pRPYka30k0FP3NqC7Yfi8LP5FBDWm1C7PnoflZ2OsI9N5Uv8fn8dQsRhwFWKu6JDuyeu2Kw7KDXpNcTpTu8Wf9Bm-zWAwBpzNJjzGO7Pt4-MzfT4kWX6WOPnKvjBE14MK2qSZH8XhujGtj_YTYctNnk3WzUdJMt_Y7EAV_utg4U2-4Et7V9-tyPteq99-AOZIPvEsJYrhYhetJv_NLR9JaNS0s"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <h4 className="font-playfair text-2xl mb-2 text-white">Luz e Imagem</h4>
                            <p className="text-sm text-white/70 font-light font-manrope">Capacitando a próxima geração de contadores de histórias brasileiros.</p>
                        </div>
                    </div>

                    {/* Card 3: Cineclube Vemvê */}
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                        <img
                            alt="Cineclube"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmGwwC9YzrCzqjQQxqkl6qbIoFY0yhi-zbkADc3MRa0eqIVvtDPr-Yt5K1gC1TDz2AdfhtgOw2Yj2adZqL7S1AbLvblykB8CINSiFcdAlyXtvEn81h8sh8eSH3rJoWz6AypeUbOlNwyt30BY83jdjEo76m6e4XrawGGXOajVjOIyEjlj5G70xVaw6n0OfC-HL-_R1I4X-wrZ49CdWNo2ANfdVTE1uoiV29lP0-2637noqDOVrMzZct4fa_5BkbUQ6oq8XVcabzy_8"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <h4 className="font-playfair text-2xl mb-2 text-white">Cineclube Vemvê</h4>
                            <p className="text-sm text-white/70 font-light font-manrope">Onde a comunidade se encontra para debater seu próprio futuro.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
