import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      number: "01",
      title: "Planejamento Estratégico Claro",
      description: "Crie uma visão institucional com indicadores de impacto e responsabilidades bem distribuídas."
    },
    {
      number: "02",
      title: "Integração Pedagógico-Financeira",
      description: "Descubra como alinhar metas pedagógicas com sustentabilidade financeira para aumentar matrículas."
    },
    {
      number: "03",
      title: "Cultura Organizacional Forte",
      description: "Construa processos claros que eliminam o modo 'apaga incêndios' e criam eficiência operacional real."
    },
    {
      number: "04",
      title: "Diagnóstico Institucional Preciso",
      description: "Método próprio com avaliações estruturadas, pesquisas e comitês para decisões baseadas em dados."
    },
    {
      number: "05",
      title: "Reputação Acadêmica Consolidada",
      description: "Estratégias para posicionar sua escola como referência através de resultados consistentes."
    },
    {
      number: "06",
      title: "Liderança com Previsibilidade",
      description: "Saia do modo reativo e lidere com autonomia, protocolos definidos e coerência estratégica."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-[#1a2e49] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Potencialize sua liderança com <span className="text-[#c1a05d]">Método comprovado</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Método comprovado por mais de 30 anos de experiência em gestão de escolas de excelência
          </motion.p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-6 border-l-4 border-[#1a2e49] border-t-2 border-t-[#c1a05d] bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                {/* Número */}
                <div className="text-[#1a2e49] text-4xl font-display font-bold mb-4 opacity-50">
                  {benefit.number}
                </div>
                
                {/* Título */}
                <h3 className="font-display text-xl font-bold text-[#1a2e49] mb-3 group-hover:text-[#c1a05d] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                {/* Descrição */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#form-ebook"
            className="inline-block font-display bg-[#1a2e49] text-white font-bold px-8 py-4 rounded-full text-base hover:bg-[#2a4a6f] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            BAIXAR EBOOK GRATUITO
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default BenefitsSection;