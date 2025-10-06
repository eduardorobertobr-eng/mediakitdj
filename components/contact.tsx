"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram, Phone, Mail } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary to-black" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="neon-glow text-primary">Vamos Trabalhar</span>
            <br />
            Juntos
          </h2>

          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Pronto para levar seu evento ao próximo nível? Entre em contato para bookings, colaborações e parcerias.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.a
              href="https://instagram.com/dj_small.work"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 border border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Instagram className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Instagram</h3>
              <p className="text-muted-foreground">@dj_small.work</p>
            </motion.a>

            <motion.a
              href="tel:+5549984016815"
              className="p-8 border border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Phone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Telefone</h3>
              <p className="text-muted-foreground">49 9 8401-6815</p>
            </motion.a>

            <motion.a
              href="mailto:contato@djsmall.com"
              className="p-8 border border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground">Bookings & Parcerias</p>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="border-t border-primary/20 pt-12"
          >
            <p className="text-muted-foreground mb-4">© 2025 DJ Small. Todos os direitos reservados.</p>
            <p className="text-sm text-muted-foreground">Mega Funk Catarinense • Produtor Musical • Inovador</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  )
}
