import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Mail, Sparkles, ArrowUp } from 'lucide-react'

export default function Footer() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Livros", href: "#services" },
        { name: "Contato", href: "#contact" }
      ]
    },
    {
      title: "Livros",
      links: [
        { name: "Corações Entrelaçados", href: "#" },
        { name: "Sussurros do Passado", href: "#" },
        { name: "Primavera Eterna", href: "#" },
        { name: "Próximos Lançamentos", href: "#" }
      ]
    },
    {
      title: "Contato",
      links: [
        { name: "ffbrunoff@yahoo.com.br", href: "mailto:ffbrunoff@yahoo.com.br" },
        { name: "Eventos e Palestras", href: "#contact" },
        { name: "Parcerias", href: "#contact" },
        { name: "Imprensa", href: "#contact" }
      ]
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-t from-secondary-900 to-secondary-800 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600 rounded-full opacity-10" />
        <div className="absolute top-20 -left-10 w-32 h-32 bg-accent-500 rounded-full opacity-10" />
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-primary-500 rounded-full opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary-600 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Asair</span>
                <Sparkles className="h-5 w-5 text-accent-400" />
              </div>
              
              <p className="text-secondary-300 leading-relaxed">
                Criando histórias que tocam o coração e despertam as emoções mais profundas. 
                Cada livro é uma jornada única através do amor e dos relacionamentos humanos.
              </p>
              
              <div className="flex items-center space-x-2 text-accent-400">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium">Autor de Romance Contemporâneo</span>
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-6">
                <h3 className="text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Receba novidades</h3>
                <p className="text-primary-100">
                  Seja o primeiro a saber sobre novos lançamentos, eventos e conteúdos exclusivos.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg text-secondary-900 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Inscrever</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="border-t border-secondary-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-secondary-400 text-sm">
                © {currentYear} Asair. Todos os direitos reservados. | Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Papum
                </a>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full transition-colors duration-300 group"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="h-5 w-5 text-white group-hover:animate-bounce" />
              </motion.button>
            </div>
          </motion.div>

          {/* Floating hearts animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  y: [100, -20],
                  x: [0, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 6,
                  delay: i * 2,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
                className="absolute bottom-0"
                style={{ left: `${20 + i * 30}%` }}
              >
                <Heart className="h-6 w-6 text-primary-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}