import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle, BookOpen, Heart } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'ffbrunoff@yahoo.com.br',
          token
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        recaptchaRef.current.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email para Contato",
      description: "Entre em contato para parcerias, eventos ou dúvidas sobre meus livros",
      value: "ffbrunoff@yahoo.com.br",
      color: "from-primary-600 to-accent-500"
    },
    {
      icon: BookOpen,
      title: "Palestras e Eventos",
      description: "Disponível para bate-papos literários, lançamentos e eventos",
      value: "Consulte disponibilidade",
      color: "from-accent-500 to-primary-600"
    },
    {
      icon: Heart,
      title: "Sugestões de Leitores",
      description: "Adoro receber feedback e sugestões para futuras histórias",
      value: "Sua opinião importa",
      color: "from-primary-500 to-accent-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MessageCircle className="h-6 w-6 text-primary-600" />
              <span className="text-primary-600 font-medium uppercase tracking-wide">Contato</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900">
              Vamos <span className="gradient-text">Conversar</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Estou sempre aberto para conversar com leitores, discutir parcerias ou participar de eventos literários. Entre em contato!
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Como me encontrar</h3>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Seja para uma conversa sobre literatura, convites para eventos, ou simplesmente para compartilhar 
                sua experiência com meus livros, ficarei feliz em ouvir você.
              </p>
            </motion.div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-6 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-secondary-900 mb-2">{info.title}</h4>
                      <p className="text-secondary-600 mb-2">{info.description}</p>
                      <p className="font-medium text-primary-600">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-8 w-8" />
                <h4 className="text-xl font-bold">Comunidade de Leitores</h4>
              </div>
              <p className="text-primary-100 leading-relaxed">
                Faça parte da nossa comunidade! Receba atualizações sobre novos lançamentos, 
                participe de discussões literárias e tenha acesso a conteúdos exclusivos.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Participar da Comunidade
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">Envie uma mensagem</h3>
              <p className="text-secondary-600">Preencha o formulário abaixo e responderei o mais breve possível.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu interesse, dúvidas ou sugestões..."
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                />
              </div>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <span>
                    {submitStatus === 'success'
                      ? 'Mensagem enviada com sucesso! Responderei em breve.'
                      : 'Erro ao enviar mensagem. Tente novamente.'}
                  </span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-secondary-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}