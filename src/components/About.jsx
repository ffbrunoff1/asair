import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, PenTool, Award, Coffee, Sparkles } from 'lucide-react'

export default function About() {
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

  const achievements = [
    {
      icon: BookOpen,
      number: "5+",
      label: "Livros Publicados",
      description: "Histórias que conquistaram corações"
    },
    {
      icon: Heart,
      number: "10k+",
      label: "Leitores Fiéis",
      description: "Uma comunidade apaixonada"
    },
    {
      icon: Award,
      number: "★ 4.9",
      label: "Avaliação Média",
      description: "Reconhecimento dos leitores"
    },
    {
      icon: PenTool,
      number: "3+",
      label: "Anos Escrevendo",
      description: "Dedicação à arte literária"
    }
  ]

  const qualities = [
    {
      icon: Heart,
      title: "Paixão pela Escrita",
      description: "Cada palavra é escolhida com carinho para criar conexões emocionais profundas entre personagens e leitores."
    },
    {
      icon: Sparkles,
      title: "Criatividade Infinita",
      description: "Histórias originais que exploram os mais diversos aspectos do amor e dos relacionamentos humanos."
    },
    {
      icon: Coffee,
      title: "Dedicação Constante",
      description: "Horas de pesquisa e escrita para entregar narrativas envolventes e autênticas aos leitores."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-50">
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
              <PenTool className="h-6 w-6 text-primary-600" />
              <span className="text-primary-600 font-medium uppercase tracking-wide">Sobre o Autor</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900">
              Conheça <span className="gradient-text">Asair</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Um escritor apaixonado que dedica sua vida a criar histórias que tocam o coração e despertam as emoções mais profundas através de personagens cativantes e enredos envolventes.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Author Story */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Minha Jornada Literária</h3>
              
              <div className="space-y-4 text-secondary-700 leading-relaxed">
                <p>
                  Desde pequeno, sempre fui fascinado pelo poder das palavras de transportar pessoas para outros mundos. 
                  O romance sempre foi meu gênero preferido, pois acredito que é através do amor e das conexões humanas 
                  que encontramos o verdadeiro significado da vida.
                </p>
                
                <p>
                  Minha especialidade está em criar personagens que ressoam com os leitores, personagens que enfrentam 
                  desafios reais e vivem histórias de amor autênticas. Cada livro que escrevo é uma jornada de descoberta, 
                  tanto para mim quanto para quem lê.
                </p>
                
                <p>
                  Acredito que uma boa história de romance não é apenas sobre o "felizes para sempre", mas sobre 
                  crescimento pessoal, superação e a beleza de encontrar alguém que nos complete de formas que nem 
                  imaginávamos possível.
                </p>
              </div>

              <div className="mt-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-secondary-900">Especialista em Romance</p>
                  <p className="text-sm text-secondary-600">Criando histórias que tocam o coração</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Qualities */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {qualities.map((quality, index) => {
              const IconComponent = quality.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg p-6 card-hover border-l-4 border-primary-600"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary-900 mb-2">{quality.title}</h4>
                      <p className="text-secondary-600">{quality.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">Conquistas e Reconhecimento</h3>
            <p className="text-lg text-secondary-600">Números que refletem a paixão dos leitores pelas minhas histórias</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.number}</div>
                  <div className="text-lg font-medium text-secondary-900 mb-1">{achievement.label}</div>
                  <div className="text-sm text-secondary-600">{achievement.description}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}