'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import PageTransition from '@/components/layout/PageTransition'
import MenuCard from '@/components/ui/MenuCard'
import Button from '@/components/ui/Button'
import { menuItems } from '@/data/restaurant-data'
import { MenuItem } from '@/types'

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Main Courses' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' }
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    if (categoryId === 'all') {
      setFilteredItems(menuItems)
    } else {
      setFilteredItems(menuItems.filter(item => item.category === categoryId))
    }
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated selection of dishes, each crafted with the finest ingredients 
              and prepared with passion by our award-winning chefs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'primary' : 'outline'}
                onClick={() => handleCategoryChange(category.id)}
                className="min-w-[120px]"
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Ready to Experience These Flavors?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Reserve your table today and let our chefs take you on a culinary journey 
                you wll never forget.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Make a Reservation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}