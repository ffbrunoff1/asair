import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Star, Sparkles, Quote } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingIcons = [
    { Icon: Heart, delay: 0, x: 100, y: 50 },
    { Icon: BookOpen, delay: 1, x: -80, y: 80 },
    { Icon: Star, delay: 2, x: 120, y: -60 },
    { Icon: Sparkles, delay: 0.5, x: -100, y: -40 }
  ]

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.1, 
              scale: 1,
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration: 8,
              delay: delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute text-primary-300"
            style={{
              left: `${20 + (index * 20)}%`,
              top: `${30 + (index * 15)}%`
            }}
          >
            <Icon className="h-16 w-16" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-2">
                <Quote className="h-6 w-6 text-primary-600" />
                <span className="text-lg font-medium text-primary-600">Bem-vindo ao mundo de</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Asair</span>
                <br />
                <span className="text-secondary-800">Romance</span>
              </h1>
              
              <p className="text-xl text-secondary-600 leading-relaxed max-w-lg">
                Mergulhe em histórias que tocam o coração e desperte suas emoções através de narrativas envolventes e personagens inesquecíveis.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Adquira Agora</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>Conheça o Autor</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10k+</div>
                <div className="text-sm text-secondary-600">Leitores Apaixonados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">★ 4.9</div>
                <div className="text-sm text-secondary-600">Avaliação Média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-secondary-600">Livros Publicados</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-secondary-900">Histórias Emocionantes</h3>
                      <p className="text-secondary-600">Personagens que vivem em seu coração</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg italic text-secondary-700 border-l-4 border-primary-600 pl-4">
                    "Cada página é uma nova descoberta, cada capítulo uma jornada inesquecível através dos sentimentos mais profundos da alma humana."
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-secondary-600 font-medium">Avaliação dos Leitores</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full opacity-20"
              />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-30"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}