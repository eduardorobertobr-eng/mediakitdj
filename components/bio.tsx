"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Bio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="bio" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary to-black text-destructive" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-6xl mb-8 text-center font-medium text-foreground"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="neon-glow font-extrabold px-0 py-0 mx-0 my-0 text-zinc-50">A Nova Batida</span>
            <br />
            do Mega Funk
          </motion.h2>

          <motion.div
            className="space-y-6 text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="opacity-100 text-foreground">
              Com uma energia contagiante e um talento inegável,{" "}
              <span className="text-primary font-semibold">DJ Small</span> é a mais recente revelação que chega para
              agitar o universo da música eletrônica. Mas ele não é apenas mais um DJ na cena; Small se destaca como uma
              voz verdadeiramente diferenciada no Mega Funk Catarinense, pensando fora da bolha e explorando novas
              sonoridades que fogem do convencional.
            </p>

            <p className="text-foreground">
              Desde os primeiros toques nos decks, DJ Small demonstrou uma habilidade impressionante em conectar-se com
              o público, entregando sets que são ao mesmo tempo inovadores e cheios de ritmo, sempre com um toque
              autoral que redefine o Mega Funk. Sua jornada como produtor também já começa a render frutos, com batidas
              originais que prometem ditar tendências e incendiar as pistas, mostrando que sua música não conhece
              fronteiras.
            </p>

            <p className="text-foreground">
              Com uma visão clara de onde quer chegar e uma vontade inabalável de fazer sua música ser ouvida, DJ Small
              está pronto para deixar sua marca. Ele não apenas toca música; ele a sente, a cria e a vive, convidando a
              todos a embarcar nessa viagem sonora que está apenas começando.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-6 border border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-900">Marca</h3>
              <p className="text-foreground">
                Design icônico "DS" que simboliza presença forte e reconhecível na cena
              </p>
            </div>

            <div className="p-6 border border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-900">Performance</h3>
              <p className="text-foreground">
                Sets dinâmicos que mostram energia na cabine e conexão única com o público
              </p>
            </div>

            <div className="p-6 border border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-900">Produção</h3>
              <p className="text-foreground">
                Em breve: o aguardado lançamento da primeira produção musical original
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
