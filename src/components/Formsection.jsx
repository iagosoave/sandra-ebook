import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validação de email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validação de telefone (aceita vários formatos)
  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 11;
  };

  // Formatar telefone
  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    
    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formatted = formatPhone(value);
      setFormData(prev => ({
        ...prev,
        [name]: formatted
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Limpar erro do campo ao digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar formulário
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, informe seu telefone';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido (mínimo 10 dígitos)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você pode integrar com sua API ou Google Forms
      // Por enquanto, vou simular um envio
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Redirecionar para o Google Forms com os dados preenchidos
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe49fG1imc09O3aIUgmQlqedma3wtn1JP4ZwZv50JNi36zCBg/viewform';
      
      // Você pode adicionar parâmetros se souber os entry IDs do seu Google Form
      // const url = `${googleFormUrl}?entry.123456=${encodeURIComponent(formData.name)}&entry.789012=${encodeURIComponent(formData.email)}`;
      
      window.open(googleFormUrl, '_blank');
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '' });

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000);

    } catch (error) {
      console.error('Erro ao enviar:', error);
      setErrors({ submit: 'Erro ao enviar. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form-ebook" className="py-16 md:py-24 bg-gradient-to-b from-[#1a2e49] to-[#2a4a6f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            
            {/* Coluna da Esquerda - Informações - AGORA BRANCA */}
            <div className="lg:col-span-2 bg-white p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 sm:mb-6">
                  <span className="inline-block px-3 py-1 bg-[#c1a05d] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                    Gratuito
                  </span>
                </div>

                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#1a2e49] mb-3 sm:mb-4">
                  Baixe o eBook dos{' '}
                  <span className="text-[#c1a05d]">5 Pontos Críticos</span>
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  Preencha os dados ao lado e receba imediatamente o guia completo para transformar a gestão da sua escola.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#c1a05d] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm text-gray-700">Método comprovado em +30 anos de experiência</p>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#c1a05d] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm text-gray-700">Estratégias práticas e aplicáveis</p>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#c1a05d] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs sm:text-sm text-gray-700">Acesso imediato após o cadastro</p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    🔒 Seus dados estão seguros e não serão compartilhados
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Coluna da Direita - Formulário - AGORA AZUL */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#1a2e49] to-[#2a4a6f] p-6 sm:p-8 lg:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {submitSuccess ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full mb-4">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                      Cadastro Realizado!
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base mb-6 px-4">
                      Abrimos uma nova aba com o formulário. Se não abriu, clique no botão abaixo.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe49fG1imc09O3aIUgmQlqedma3wtn1JP4ZwZv50JNi36zCBg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-display bg-[#c1a05d] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#d4b36d] transition-colors duration-300 shadow-lg"
                    >
                      ACESSAR FORMULÁRIO
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                      Preencha seus dados
                    </h3>

                    {/* Campo Nome */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1a05d] transition-colors bg-white/10 text-white placeholder-white/50 ${
                          errors.name ? 'border-red-400' : 'border-white/20'
                        }`}
                        placeholder="Seu nome completo"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-300">{errors.name}</p>
                      )}
                    </div>

                    {/* Campo Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email Profissional *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1a05d] transition-colors bg-white/10 text-white placeholder-white/50 ${
                          errors.email ? 'border-red-400' : 'border-white/20'
                        }`}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                      )}
                    </div>

                    {/* Campo Telefone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c1a05d] transition-colors bg-white/10 text-white placeholder-white/50 ${
                          errors.phone ? 'border-red-400' : 'border-white/20'
                        }`}
                        placeholder="(11) 98765-4321"
                        maxLength="15"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-300">{errors.phone}</p>
                      )}
                    </div>

                    {/* Erro de Submit */}
                    {errors.submit && (
                      <div className="p-3 bg-red-500/20 border border-red-400/50 rounded-lg">
                        <p className="text-sm text-red-200">{errors.submit}</p>
                      </div>
                    )}

                    {/* Botão Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full font-display font-bold py-3 sm:py-4 px-6 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl ${
                        isSubmitting
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-[#c1a05d] hover:bg-[#d4b36d] text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'QUERO O EBOOK GRATUITO'
                      )}
                    </button>

                    <p className="text-xs text-white/60 text-center px-2">
                      Ao preencher o formulário, você concorda em receber comunicações sobre gestão educacional.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FormSection;