import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import da foto
import autoridade from './sandra.jpg';

const AuthoritySection = () => {
  const metrics = [
    { number: "+460", label: "Prêmios", detail: "400+ nacionais, 60 internacionais" },
    { number: "42mil", label: "Alunos", detail: "Gestão direta e consultiva" },
    { number: "Top 10", label: "ENEM SP", detail: "De 200ª posição ao topo" },
    { number: "4", label: "Países", detail: "Harvard, Singapura, Espanha, Finlândia" },
    { number: "Cambridge", label: "Certificação", detail: "Programas de excelência" },
    { number: "10", label: "Passos", detail: "Método O 5º Desafio" },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Coluna da foto */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-sm mx-auto lg:max-w-none">
              <img 
                src={autoridade}
                alt="Sandra Tonidandel" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Coluna do conteúdo */}
          <div>
            
            {/* Header */}
            <motion.div
              className="mb-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            
              
              {/* Nome e título */}
              <h3 className="text-[#1a2e49] font-display text-lg sm:text-xl font-bold">
                Sandra Tonidandel
              </h3>
              <p className="text-[#1a2e49]/60 text-sm mb-3">
                Mestre e Doutora em Educação — USP
              </p>
              
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#1a2e49] leading-tight">
                34 anos transformando escolas em referências de excelência
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="mb-5 space-y-2 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-[#1a2e49]/80 text-sm leading-relaxed">
                Diretora corporativa e educacional com liderança em escola de referência (Dante Alighieri) e em rede nacional de ensino (Fundação Bradesco, 40 escolas, 42 mil alunos).
              </p>
              <p className="text-[#1a2e49]/80 text-sm leading-relaxed">
                Consultora especialista em integração pedagógica e financeira, com mais de 13 anos de experiência e abordagem aperfeiçoada em Harvard, Singapura, Espanha e Finlândia.
              </p>
            </motion.div>

            {/* Métricas */}
            <motion.div
              className="border-t border-[#1a2e49]/10 pt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <p className="font-display text-base sm:text-lg md:text-xl font-bold text-[#1a2e49]">
                      {metric.number}
                    </p>
                    <p className="text-[#c1a05d] text-[10px] sm:text-xs font-medium">
                      {metric.label}
                    </p>
                    <p className="text-[#1a2e49]/50 text-[9px] sm:text-[10px] hidden sm:block leading-tight">
                      {metric.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#form-ebook"
                className="inline-flex font-display bg-[#c1a05d] text-white font-bold py-3 px-6 rounded-full text-sm items-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span>QUERO O EBOOK GRATUITO</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AuthoritySection;