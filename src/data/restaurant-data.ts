import { MenuItem, TeamMember, ContactInfo } from '@/types'

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls filled with truffle cream and aged parmesan',
    price: 16,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isPopular: true,
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Coffee',
    description: 'Where every cup tells a story — roasted to perfection, served with love.',
    price: 22,
    category: 'starters',
    image: '/images/coffee.jpg',
    isPopular: true
  },
  {
    id: '3',
    name: 'Dry-Aged Ribeye',
    description: '12oz dry-aged ribeye with roasted bone marrow and red wine jus',
    price: 18,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  
  // Main Courses
  {
    id: '4',
    name: 'Pepperoni Pizza',
    description: 'A perfect blend of tangy sauce, gooey cheese, and bold pepperoni flavor.',
    price: 68,
    category: 'mains',
    image: '/images/pizza.jpg',
    isPopular: true
  },
  {
    id: '5',
    name: 'Lobster Risotto',
    description: 'Creamy arborio rice with fresh lobster, saffron, and microgreens',
    price: 45,
    category: 'mains',
    image: '/images/lobster.jpg',
    isPopular: true
  },
  {
    id: '6',
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg with cherry gastrique and roasted vegetables',
    price: 38,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '7',
    name: 'Wild Mushroom Gnocchi',
    description: 'Handmade gnocchi with wild mushrooms, truffle cream, and herbs',
    price: 32,
    category: 'mains',
    image: '/images/Wild Mushroom Gnocchi.jpg',
    isVegetarian: true
  },
  
  // Desserts
  {
    id: '8',
    name: 'Chocolate Soufflé',
    description: 'Warm dark chocolate soufflé with vanilla bean ice cream',
    price: 14,
    category: 'desserts',
    image: '/images/Chocolate Soufflé.jpg',
    isPopular: true,
    isVegetarian: true
  },
  {
    id: '9',
    name: 'Crème Brûlée Trio',
    description: 'Classic vanilla, lavender honey, and espresso crème brûlée',
    price: 12,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: '10',
    name: 'Tiramisu',
    description: 'Traditional Italian tiramisu with espresso-soaked ladyfingers',
    price: 11,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  
  // Drinks
  {
    id: '11',
    name: 'Old Fashioned',
    description: 'Premium bourbon with house-made simple syrup and orange bitters',
    price: 16,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '12',
    name: 'Espresso Martini',
    description: 'Fresh espresso, vodka, and coffee liqueur with a rich foam',
    price: 15,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '13',
    name: 'Sommelier Selection',
    description: 'Curated wine pairing recommended by our sommelier',
    price: 18,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  }
]

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Chef Marco Antonelli',
    role: 'Executive Chef',
    bio: 'With over 15 years of experience in Michelin-starred restaurants across Europe, Chef Marco brings authentic Italian flavors with a modern twist.',
    image: '/images/chef-marco.jpg'
  },
  {
    id: '2',
    name: 'Sofia Chen',
    role: 'Pastry Chef',
    bio: 'Award-winning pastry chef Sofia creates stunning desserts that are as beautiful as they are delicious, combining French techniques with Asian influences.',
    image: '/images/chef-sofia.jpg'
  },
  {
    id: '3',
    name: 'Antonio Rodriguez',
    role: 'Sommelier',
    bio: 'Certified sommelier Antonio curates our extensive wine collection, ensuring perfect pairings for every dish on our menu.',
    image: '/images/sommelier-antonio.jpg'
  }
]

export const contactInfo: ContactInfo = {
  address: '123 Culinary Street, Gourmet District, New York, NY 10001',
  phone: '+1 (555) 123-4567',
  whatsapp: '+8801614427870',
  email: 'reservations@bellacafe.com',
  hours: {
    'Monday': 'Closed',
    'Tuesday': '5:00 PM - 10:00 PM',
    'Wednesday': '5:00 PM - 10:00 PM',
    'Thursday': '5:00 PM - 10:00 PM',
    'Friday': '5:00 PM - 11:00 PM',
    'Saturday': '12:00 PM - 11:00 PM',
    'Sunday': '12:00 PM - 9:00 PM'
  }
}