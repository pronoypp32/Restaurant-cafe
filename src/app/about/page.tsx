'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Clock, Heart } from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import { teamMembers } from '@/data/restaurant-data'

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Every dish is crafted with love and dedication to culinary excellence.'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We source only the finest ingredients from trusted local suppliers.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building connections through shared meals and memorable experiences.'
  },
  {
    icon: Clock,
    title: 'Tradition',
    description: 'Honoring classic techniques while embracing modern innovation.'
  }
]

const achievements = [
  { number: '20+', label: 'Years of Excellence' },
  { number: '5', label: 'Award-Winning Chefs' },
  { number: '10K+', label: 'Happy Customers' },
  { number: '4.9', label: 'Average Rating' }
]

export default function AboutPage() {
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
              Our Story
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A journey of passion, dedication, and culinary excellence that began over two decades ago.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Where It All
                <span className="block text-primary">Began</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bella Café was born from a simple dream: to create a place where exceptional food meets 
                warm hospitality. Founded in 2003 by Chef Marco Antonelli, our restaurant has grown from 
                a small neighborhood bistro to a celebrated dining destination.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our commitment to using only the finest ingredients, combined with innovative cooking 
                techniques and a passion for excellence, has earned us recognition from food critics 
                and loyal customers alike.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to honor our founding principles while constantly evolving to surprise 
                and delight our guests with new flavors and experiences.
              </p>
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
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Restaurant interior"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do, from selecting ingredients to serving our guests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The talented individuals who bring passion and expertise to every dish we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1577219491135-ce391730fb2c' : index === 1 ? '1594736797933-d0401ba87dd4' : '1556909114-f6e7ad7d3136'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80`}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-80 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and the trust our customers place in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/90 text-sm md:text-base">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}