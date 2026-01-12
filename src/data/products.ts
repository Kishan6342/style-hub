export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  subcategory: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  material: string;
  care: string[];
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Summer Essentials',
    description: 'Light and breezy pieces for the warm days ahead',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    slug: 'summer-essentials',
  },
  {
    id: '2',
    name: 'Everyday Comfort',
    description: 'Timeless staples for your daily wardrobe',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
    slug: 'everyday-comfort',
  },
  {
    id: '3',
    name: 'Workwear Edit',
    description: 'Refined linen pieces for the modern professional',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    slug: 'workwear-edit',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Linen Shirt',
    price: 4500,
    originalPrice: 5500,
    description: 'Our signature linen shirt, crafted from 100% European flax. Features a relaxed fit with a classic collar, mother-of-pearl buttons, and a curved hem. The breathable fabric keeps you cool while looking effortlessly polished.',
    shortDescription: 'Relaxed fit linen shirt with classic collar',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
    ],
    category: 'shirts',
    subcategory: 'casual',
    colors: [
      { name: 'Natural', hex: '#E8E0D5' },
      { name: 'Sky Blue', hex: '#B8D4E3' },
      { name: 'Sage', hex: '#9CAF88' },
      { name: 'Sand', hex: '#C4B7A6' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% European Linen',
    care: ['Machine wash cold', 'Tumble dry low', 'Iron on medium heat', 'Do not bleach'],
    features: ['Breathable fabric', 'Relaxed fit', 'Mother-of-pearl buttons', 'Curved hem'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Wide Leg Linen Trousers',
    price: 5200,
    description: 'Elegant wide-leg trousers in soft, flowing linen. Features a high waist with a concealed zip closure, side pockets, and a relaxed silhouette that drapes beautifully. Perfect for both casual and formal occasions.',
    shortDescription: 'High-waist wide leg trousers in flowing linen',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    ],
    category: 'bottoms',
    subcategory: 'trousers',
    colors: [
      { name: 'Off White', hex: '#FAF8F5' },
      { name: 'Olive', hex: '#7D8471' },
      { name: 'Charcoal', hex: '#4A4A4A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% Organic Linen',
    care: ['Hand wash or machine wash gentle', 'Hang to dry', 'Steam or iron while damp'],
    features: ['High waist', 'Concealed zip', 'Side pockets', 'Wide leg silhouette'],
    inStock: true,
    isNew: true,
  },
  {
    id: '3',
    name: 'Relaxed Linen Dress',
    price: 6800,
    description: 'A timeless midi dress in lightweight linen. Features a flattering V-neckline, adjustable waist tie, and relaxed A-line silhouette. The perfect piece for warm weather that transitions effortlessly from day to evening.',
    shortDescription: 'V-neck midi dress with waist tie',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    ],
    category: 'dresses',
    subcategory: 'midi',
    colors: [
      { name: 'Terracotta', hex: '#C4A77D' },
      { name: 'Natural', hex: '#E8E0D5' },
      { name: 'Dusty Rose', hex: '#D4A5A5' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% French Linen',
    care: ['Dry clean recommended', 'Or hand wash cold', 'Iron while damp'],
    features: ['V-neckline', 'Adjustable waist tie', 'A-line silhouette', 'Midi length'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: '4',
    name: 'Linen Blazer',
    price: 8900,
    originalPrice: 10500,
    description: 'A refined unstructured blazer in premium linen. Features a relaxed fit, notched lapels, and patch pockets. Unlined for breathability, perfect for warmer months or as a layering piece.',
    shortDescription: 'Unstructured linen blazer with patch pockets',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
    ],
    category: 'outerwear',
    subcategory: 'blazers',
    colors: [
      { name: 'Navy', hex: '#2C3E50' },
      { name: 'Beige', hex: '#D4C5B9' },
      { name: 'Forest', hex: '#4A5D4A' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Italian Linen',
    care: ['Dry clean only', 'Steam to refresh', 'Store on padded hanger'],
    features: ['Unstructured', 'Notched lapels', 'Patch pockets', 'Unlined'],
    inStock: true,
  },
  {
    id: '5',
    name: 'Cropped Linen Top',
    price: 3200,
    description: 'A chic cropped top in soft linen. Features a square neckline, short sleeves, and a relaxed boxy fit. Perfect for pairing with high-waisted bottoms.',
    shortDescription: 'Square neck cropped top in soft linen',
    images: [
      'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    ],
    category: 'tops',
    subcategory: 'cropped',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Lavender', hex: '#B8A9C9' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    material: '100% Linen',
    care: ['Machine wash cold', 'Lay flat to dry', 'Iron on low'],
    features: ['Square neckline', 'Short sleeves', 'Boxy fit', 'Cropped length'],
    inStock: true,
    isNew: true,
  },
  {
    id: '6',
    name: 'Linen Shorts',
    price: 3800,
    description: 'Comfortable linen shorts with a relaxed fit. Features an elastic waist with drawstring, side pockets, and a tailored look that works for both casual and smart-casual occasions.',
    shortDescription: 'Relaxed fit shorts with elastic waist',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
    ],
    category: 'bottoms',
    subcategory: 'shorts',
    colors: [
      { name: 'Khaki', hex: '#C3B091' },
      { name: 'White', hex: '#FAFAFA' },
      { name: 'Navy', hex: '#2C3E50' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% Organic Linen',
    care: ['Machine wash cold', 'Tumble dry low', 'Iron on medium'],
    features: ['Elastic waist', 'Drawstring', 'Side pockets', 'Relaxed fit'],
    inStock: true,
  },
  {
    id: '7',
    name: 'Oversized Linen Tunic',
    price: 4800,
    description: 'A versatile oversized tunic in flowing linen. Features a mandarin collar, side slits, and a relaxed silhouette. Can be worn as a top or a beach cover-up.',
    shortDescription: 'Oversized tunic with mandarin collar',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    ],
    category: 'tops',
    subcategory: 'tunics',
    colors: [
      { name: 'Ocean', hex: '#6B8E9F' },
      { name: 'Sand', hex: '#D4C5B9' },
      { name: 'Coral', hex: '#E8A798' },
    ],
    sizes: ['One Size'],
    material: '100% Linen',
    care: ['Hand wash cold', 'Line dry', 'Iron while damp'],
    features: ['Mandarin collar', 'Side slits', 'Oversized fit', 'Versatile styling'],
    inStock: true,
  },
  {
    id: '8',
    name: 'Linen Jumpsuit',
    price: 7500,
    description: 'An elegant one-piece jumpsuit in premium linen. Features a wrap front, wide legs, and a self-tie belt. Perfect for making a statement with minimal effort.',
    shortDescription: 'Wrap front jumpsuit with wide legs',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    ],
    category: 'dresses',
    subcategory: 'jumpsuits',
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Ecru', hex: '#F5F5DC' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    material: '100% Belgian Linen',
    care: ['Dry clean recommended', 'Steam to refresh'],
    features: ['Wrap front', 'Wide legs', 'Self-tie belt', 'Side zip'],
    inStock: true,
    isBestseller: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Caring for Linen: A Complete Guide',
    excerpt: 'Discover the secrets to keeping your linen garments looking beautiful for years to come.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80',
    author: 'Priya Sharma',
    date: '2026-01-05',
    category: 'Care Tips',
    slug: 'caring-for-linen-guide',
  },
  {
    id: '2',
    title: 'Summer Styling: 5 Ways to Wear Linen',
    excerpt: 'From beach to boardroom, explore versatile ways to style your linen pieces this summer.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    author: 'Ananya Desai',
    date: '2025-12-28',
    category: 'Style Guide',
    slug: 'summer-linen-styling',
  },
  {
    id: '3',
    title: 'Why Choose Sustainable Linen?',
    excerpt: 'Learn about the environmental benefits of choosing linen and our commitment to sustainability.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80',
    author: 'Sadasahi Team',
    date: '2025-12-15',
    category: 'Sustainability',
    slug: 'sustainable-linen',
  },
  {
    id: '4',
    title: 'Building a Capsule Wardrobe with Linen',
    excerpt: 'Create a timeless wardrobe with just a few essential linen pieces.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    author: 'Riya Patel',
    date: '2025-12-08',
    category: 'Style Guide',
    slug: 'linen-capsule-wardrobe',
  },
];

export const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Shirts', slug: 'shirts' },
  { name: 'Tops', slug: 'tops' },
  { name: 'Dresses', slug: 'dresses' },
  { name: 'Bottoms', slug: 'bottoms' },
  { name: 'Outerwear', slug: 'outerwear' },
];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const colors = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#1A1A1A' },
  { name: 'Natural', hex: '#E8E0D5' },
  { name: 'Beige', hex: '#D4C5B9' },
  { name: 'Navy', hex: '#2C3E50' },
  { name: 'Olive', hex: '#7D8471' },
  { name: 'Sage', hex: '#9CAF88' },
];

export const priceRanges = [
  { label: 'Under ₹4,000', min: 0, max: 4000 },
  { label: '₹4,000 - ₹6,000', min: 4000, max: 6000 },
  { label: '₹6,000 - ₹8,000', min: 6000, max: 8000 },
  { label: 'Above ₹8,000', min: 8000, max: Infinity },
];
