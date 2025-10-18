'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Clock, Users } from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import Button from '@/components/ui/Button'
import MenuCard from '@/components/ui/MenuCard'
import { menuItems } from '@/data/restaurant-data'

const featuredDishes = menuItems.filter(item => item.isPopular).slice(0, 3)

const stats = [
  { icon: Star, value: '4.9', label: 'Rating' },
  { icon: Clock, value: '20+', label: 'Years Experience' },
  { icon: Users, value: '10K+', label: 'Happy Customers' }
]

export default function Home() {
  return (
    <PageTransition>
  {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0 z-20">
    <video
      src="/videos/restaurant-hero2.mp4" // 👉 আপনার ভিডিও ফাইল public/videos ফোল্ডারে রাখুন
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    ></video>

   
  </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-yellow-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where Culinary
              <span className="block text-accent text-rose-400">Dreams Come True</span>
            </h1>
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservation">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Reserve Your Table
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" size="lg" className="border-white text-green-400 hover:bg-white hover:text-yellow-400">
                  View Our Menu
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="font-serif text-3xl font-bold">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Signature Dishes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our most celebrated creations, crafted with the finest ingredients 
              and presented with artistic flair.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <MenuCard key={dish.id} item={dish} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/menu">
              <Button variant="outline" size="lg">
                View Full Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story of
                <span className="block text-primary">Culinary Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For over two decades, Bella Café has been a cornerstone of fine dining, 
                where traditional techniques meet innovative flavors. Our passionate team 
                of chefs creates memorable experiences through exceptional cuisine.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every ingredient is carefully selected, every dish thoughtfully prepared, 
                and every meal served with pride. This is more than dining—this is a 
                celebration of culinary artistry.
              </p>
              <Link href="/about">
                <Button>
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Chef preparing food"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold">20+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Book your table today and embark on a culinary journey that will tantalize 
              your taste buds and create lasting memories.
            </p>
            <Link href="/reservation">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Reserve Your Table Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
