'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare } from 'lucide-react'
import PageTransition from '@/components/layout/PageTransition'
import Button from '@/components/ui/Button'
import { ReservationData } from '@/types'

const timeSlots = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
]

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8]

export default function ReservationPage() {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
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
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        specialRequests: ''
      })
    }, 3000)
  }

  const handleInputChange = (field: keyof ReservationData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

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
              Reserve Your Table
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Book your dining experience at Bella Café. We can&apos;t wait to serve you our finest dishes 
              in our elegant atmosphere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Make a Reservation
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
                        Reservation Confirmed!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for your reservation. We&apos;ll send you a confirmation email shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <User className="inline w-4 h-4 mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          placeholder="Enter your full name"
                        />
                      </motion.div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">
                            <Mail className="inline w-4 h-4 mr-2" />
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

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">
                            <Phone className="inline w-4 h-4 mr-2" />
                            Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                            placeholder="+1 (555) 123-4567"
                          />
                        </motion.div>
                      </div>

                      {/* Date & Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">
                            <Calendar className="inline w-4 h-4 mr-2" />
                            Date *
                          </label>
                          <input
                            type="date"
                            required
                            min={minDate}
                            value={formData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">
                            <Clock className="inline w-4 h-4 mr-2" />
                            Time *
                          </label>
                          <select
                            required
                            value={formData.time}
                            onChange={(e) => handleInputChange('time', e.target.value)}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </motion.div>
                      </div>

                      {/* Guests */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Users className="inline w-4 h-4 mr-2" />
                          Number of Guests *
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                        >
                          {guestOptions.map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </motion.div>

                      {/* Special Requests */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <MessageSquare className="inline w-4 h-4 mr-2" />
                          Special Requests
                        </label>
                        <textarea
                          value={formData.specialRequests}
                          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
                          placeholder="Dietary restrictions, special occasions, seating preferences..."
                        />
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
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
                              Processing...
                            </div>
                          ) : (
                            'Confirm Reservation'
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Reservation Information
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>• Reservations are confirmed upon receipt of this form</p>
                    <p>• We hold tables for 15 minutes past reservation time</p>
                    <p>• For parties larger than 8, please call us directly</p>
                    <p>• Cancellations require 24-hour notice</p>
                    <p>• Special dietary requirements can be accommodated with advance notice</p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-3" />
                      <span className="text-muted-foreground">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-3" />
                      <span className="text-muted-foreground">reservations@bellacafe.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-2xl p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground">Tuesday - Thursday</span>
                      <span className="text-muted-foreground">5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Friday</span>
                      <span className="text-muted-foreground">5:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Saturday</span>
                      <span className="text-muted-foreground">12:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Sunday</span>
                      <span className="text-muted-foreground">12:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Monday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}