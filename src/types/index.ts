export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'starters' | 'mains' | 'desserts' | 'drinks'
  image: string
  isPopular?: boolean
  isVegetarian?: boolean
  isGlutenFree?: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface ContactInfo {
  address: string
  phone: string
  whatsapp?: string
  email: string
  hours: {
    [key: string]: string
  }
}

export interface ReservationData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  specialRequests?: string
}

export interface PageTransition {
  initial: { [key: string]: number | string | boolean }
  animate: { [key: string]: number | string | boolean }
  exit: { [key: string]: number | string | boolean }
  transition: { [key: string]: number | string | boolean }
}