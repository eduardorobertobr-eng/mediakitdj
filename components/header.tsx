"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Bio", href: "#bio" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.a href="#hero" className="text-2xl font-bold text-white" whileHover={{ scale: 1.05 }}>
          <span className="neon-glow">DJ SMALL</span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-b border-primary/20"
      >
        <ul className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}
