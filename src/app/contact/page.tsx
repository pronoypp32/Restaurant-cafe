'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import Button from '@/components/ui/Button'
import { contactInfo } from '@/data/restaurant-data'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Whether you have questions, feedback, or special requests, 
              we&apos;re here to help make your dining experience exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Address
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {contactInfo.address}
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Phone
              </h3>
              <p className="text-muted-foreground">
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </p>
            </motion.div>

            {contactInfo.whatsapp && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground">
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition-colors"
                  >
                    {contactInfo.whatsapp}
                  </a>
                </p>
              </motion.div>
            )}

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Hours
              </h3>
              <p className="text-muted-foreground text-sm">
                Tue-Sun<br />
                <span className="text-xs">Closed Mondays</span>
              </p>
            </motion.div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 500 }}
                        className="text-green-600 text-2xl"
                      >
                        ✓
                      </motion.div>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                        placeholder="What&apos;s this about?"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
                        placeholder="Tell us what&apos;s on your mind..."
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Hours */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Google Maps integration would go here
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  {Object.entries(contactInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{day}</span>
                      <span 
                        className={hours === 'Closed' ? 'text-muted-foreground' : 'text-primary'}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary/10 rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  For urgent inquiries or same-day reservations, please call us directly.
                </p>
                <div className="space-y-2">
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.phone}
                  </a>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}