'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MenuItem } from '@/types'
import { cn } from '@/lib/utils'

interface MenuCardProps {
  item: MenuItem
  index?: number
  className?: string
}

export default function MenuCard({ item, index = 0, className }: MenuCardProps) {
  return (
    <motion.div
      className={cn(
        'bg-card rounded-xl shadow-md overflow-hidden group cursor-pointer',
        'hover:shadow-xl transition-all duration-300',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {item.isPopular && (
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
              Popular
            </span>
          )}
          {item.isVegetarian && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Vegetarian
            </span>
          )}
          {item.isGlutenFree && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Gluten Free
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="font-semibold text-primary">${item.price}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}