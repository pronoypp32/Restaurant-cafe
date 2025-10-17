'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/8801614427870"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 2 
      }}
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp: +8801614427870"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Ping animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  )
}