"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, ImageIcon } from "lucide-react"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos")

  const photos = [
    { id: 1, title: "Performance ao Vivo", query: "DJ performing at nightclub with red neon lights" },
    { id: 2, title: "Estúdio", query: "DJ in recording studio with equipment and red lighting" },
    { id: 3, title: "Festival", query: "DJ at music festival with crowd and stage lights" },
    { id: 4, title: "Sessão de Fotos", query: "Professional DJ portrait with neon red lighting" },
    { id: 5, title: "Backstage", query: "DJ backstage preparing for show with equipment" },
    { id: 6, title: "Evento", query: "DJ at electronic music event with laser lights" },
  ]

  const videos = [
    { id: 1, title: "Set Completo - Festival 2024", thumbnail: "DJ performing at festival with crowd" },
    { id: 2, title: "Produção em Estúdio", thumbnail: "DJ producing music in studio" },
    { id: 3, title: "Performance Especial", thumbnail: "DJ special performance with lights" },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
            <span className="neon-glow text-background">Galeria</span>
          </h2>
          <p className="text-center mb-12 text-lg text-card">Momentos que definem a jornada</p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            <motion.button
              onClick={() => setActiveTab("photos")}
              className={`px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "photos"
                  ? "bg-primary text-white neon-border"
                  : "border border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ImageIcon className="inline-block mr-2" size={20} />
              Fotos
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("videos")}
              className={`px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-primary text-white neon-border"
                  : "border border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="inline-block mr-2" size={20} />
              Vídeos
            </motion.button>
          </div>

          {/* Photos Grid */}
          {activeTab === "photos" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-square overflow-hidden border border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={`/.jpg?height=600&width=600&query=${photo.query}`}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-xl">{photo.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Videos Grid */}
          {activeTab === "videos" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-video overflow-hidden border border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={`/.jpg?height=400&width=600&query=${video.thumbnail}`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center neon-border">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white font-bold">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.p
            className="text-center text-muted-foreground mt-12 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <span className="font-semibold text-red-800">Em breve:</span> O aguardado lançamento da nossa primeira
            produção musical!
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
