import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, Quote, ShoppingCart, Download } from 'lucide-react'

export default function Services() {
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

  const books = [
    {
      id: 1,
      title: "Corações Entrelaçados",
      subtitle: "Uma história de amor que supera todas as barreiras",
      description: "Acompanhe a jornada de Sofia e Miguel, dois corações que se encontram em meio às adversidades da vida. Uma narrativa emocionante sobre segundo chances e o poder transformador do amor verdadeiro.",
      genre: "Romance Contemporâneo",
      pages: "320 páginas",
      rating: 4.9,
      price: "R$ 29,90",
      features: ["Personagens cativantes", "Enredo envolvente", "Final emocionante", "Diálogos autênticos"]
    },
    {
      id: 2,
      title: "Sussurros do Passado",
      subtitle: "Quando o destino dá uma segunda chance",
      description: "Isabella nunca imaginou que um encontro casual pudesse mudar sua vida completamente. Uma história tocante sobre perdão, cura e a coragem de amar novamente após grandes perdas.",
      genre: "Romance Dramático",
      pages: "280 páginas", 
      rating: 4.8,
      price: "R$ 27,90",
      features: ["Drama envolvente", "Crescimento pessoal", "Reviravoltas emocionantes", "Mensagem inspiradora"]
    },
    {
      id: 3,
      title: "Primavera Eterna",
      subtitle: "O amor floresce nas situações mais inesperadas",
      description: "Uma comédia romântica deliciosa que mostra como o amor pode surgir nos momentos mais simples da vida. Clara e Daniel descobrem que às vezes o que procuramos está bem diante dos nossos olhos.",
      genre: "Comédia Romântica",
      pages: "290 páginas",
      rating: 4.9,
      price: "R$ 31,90",
      features: ["Humor inteligente", "Química perfeita", "Momentos divertidos", "Romance cativante"]
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Os livros de Asair me fizeram chorar, rir e sonhar. Personagens tão reais que parecem amigos próximos!",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Nunca pensei que gostaria de romance, mas Asair mudou minha perspectiva. Histórias fantásticas!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Cada livro é uma jornada emocional única. Mal posso esperar pelo próximo lançamento!",
      rating: 5
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary-50 to-white">
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
              <BookOpen className="h-6 w-6 text-primary-600" />
              <span className="text-primary-600 font-medium uppercase tracking-wide">Biblioteca</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900">
              Meus <span className="gradient-text">Livros</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Descubra histórias que tocam o coração e despertam as mais profundas emoções. Cada livro é uma jornada única através do amor e dos relacionamentos humanos.
            </p>
          </motion.div>
        </motion.div>

        {/* Books Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">{book.genre}</span>
                  <h3 className="text-2xl font-bold text-secondary-900 mt-2 mb-2">{book.title}</h3>
                  <p className="text-lg text-primary-600 font-medium mb-4">{book.subtitle}</p>
                </div>

                <div className="flex-grow">
                  <p className="text-secondary-600 leading-relaxed mb-6">{book.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {book.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-primary-600" />
                        <span className="text-sm text-secondary-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-secondary-600 ml-2">{book.rating}/5.0</span>
                      </div>
                      <p className="text-sm text-secondary-600">{book.pages}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary-600">{book.price}</p>
                      <p className="text-sm text-secondary-600">E-book + Físico</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Comprar Agora</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-secondary flex items-center justify-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Amostra Grátis</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">O que dizem os leitores</h3>
            <p className="text-lg text-secondary-600">Depoimentos reais de quem se emocionou com minhas histórias</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="bg-primary-50 rounded-2xl p-6 mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                  <Quote className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                  <p className="text-secondary-700 italic leading-relaxed">{testimonial.text}</p>
                </div>
                
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="font-medium text-secondary-900">{testimonial.name}</p>
                <p className="text-sm text-secondary-600">Leitor Fiel</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Ver Todos os Livros
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}