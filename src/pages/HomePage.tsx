import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collections, products } from '@/data/products';

import { useState } from "react";


const HomePage = () => {
  const featuredProducts = products.filter((p) => p.isBestseller).slice(0, 4);
 const websiteReviews = [
    {
      id: 1,
      name: "Ananya Sharma",
      rating: 5,
      text: "Absolutely loved the crochet bouquet. Quality is amazing!",
    },
    {
      id: 2,
      name: "Riya Patel",
      rating: 5,
      text: "Beautiful craftsmanship. Packaging felt very premium.",
    },
    {
      id: 3,
      name: "Neha Verma",
      rating: 4,
      text: "Loved the hair accessories. Will definitely order again.",
    },

      {
      id: 4,
      name: "Neha Verma",
      rating: 4,
      text: "Loved the hair accessories. Will definitely order again.",
    },

    {
      id: 5,
      name: "Neha Verma",
      rating: 4,
      text: "Loved the hair accessories. Will definitely order again.",
    },
  ]
const [reviews, setReviews] = useState([
  {
    id: 1,
    name: "Ananya Sharma",
    rating: 5,
    text: "Absolutely loved the crochet bouquet. Quality is amazing!",
  },
  {
    id: 2,
    name: "Riya Patel",
    rating: 5,
    text: "Beautiful craftsmanship. Packaging felt very premium.",
  },
  {
    id: 3,
    name: "Neha Verma",
    rating: 4,
    text: "Loved the hair accessories. Will definitely order again.",
  },
]);

  const instagramReviews = [
  "/style-hub/instagram/review1.jpg",
  "/style-hub/instagram/review2.jpg",
  "/style-hub/instagram/review3.jpg",
  "/style-hub/instagram/review4.jpg",
];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh]
  flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/style-hub/image1.png')",
          }}
        >
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="relative z-10 text-center text-background px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase mb-4"
          >
            Handcrafted Warmth & Style
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6"
          >
            सादा simpal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light mb-8 max-w-md mx-auto"
          >
            Explore Our Unique Chrochet Creations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
           <Button
  size="lg"
  variant="outline"
  className="border-[#2E2E2E] text-[#2E2E2E] bg-white/70 hover:bg-[#2E2E2E] hover:text-white transition-colors"
  asChild
>
  <Link to="/shop">Explore Collection</Link>
</Button>

          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/style-hub/collections/${collection.slug}`} className="group block">

                  <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-xl mb-1">{collection.name}</h3>
                  <p className="text-muted-foreground text-sm">{collection.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl">Bestsellers</h2>
            <Link to="/shop" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-3 bg-muted">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>






  {/* Website Reviews Slider */}
<motion.div
  className="flex gap-8"
  animate={{ x: ["0%", "-50%"] }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
>
  {[...reviews, ...reviews].map((review, index) => (
    <div
      key={index}
      className="min-w-[320px] bg-white p-8 rounded-sm shadow-sm"
    >
      <div className="flex justify-center mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        “{review.text}”
      </p>

      <p className="text-sm font-medium text-center">
        — {review.name}
      </p>
    </div>
  ))}
</motion.div>

{/* Add Review */}
<div className="max-w-xl mx-auto mb-16 bg-white p-8 rounded-sm shadow-sm">
  <h3 className="font-display text-xl mb-6 text-center">
    Leave a Review
  </h3>

  <form
    onSubmit={(e) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const name = (form.name as HTMLInputElement).value;
      const text = (form.text as HTMLTextAreaElement).value;
      const rating = Number((form.rating as HTMLSelectElement).value);

      if (!name || !text) return;

      setReviews((prev) => [
        {
          id: Date.now(),
          name,
          text,
          rating,
        },
        ...prev,
      ]);

      form.reset();
    }}
    className="space-y-4"
  >
    <input
      name="name"
      placeholder="Your name"
      className="w-full border px-4 py-2 text-sm"
      required
    />

    <textarea
      name="text"
      placeholder="Your review"
      className="w-full border px-4 py-2 text-sm"
      rows={3}
      required
    />

    <select
      name="rating"
      className="w-full border px-4 py-2 text-sm"
      defaultValue="5"
    >
      <option value="5">★★★★★ (5)</option>
      <option value="4">★★★★☆ (4)</option>
      <option value="3">★★★☆☆ (3)</option>
       <option value="2">★★☆☆☆ (2)</option>
    </select>

    <button
      type="submit"
      className="w-full bg-black text-white py-2 text-sm hover:opacity-90"
    >
      Submit Review
    </button>
  </form>
</div>



{/* Instagram Reviews Slider */}
<section className="py-24 px-6 lg:px-12 bg-background overflow-hidden">
  <div className="max-w-7xl mx-auto">

    <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
      Loved on Instagram
    </h2>

    <motion.div
      className="flex gap-6"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...instagramReviews, ...instagramReviews].map((img, index) => (
        <div
          key={index}
          className="min-w-[180px] md:min-w-[220px] overflow-hidden rounded-sm"
        >
          <img
            src={img}
            alt="Instagram review"
            className="w-full aspect-square object-cover"
          />
        </div>
      ))}
    </motion.div>

    <div className="text-center mt-10">
      <a
        href="https://www.instagram.com/sadasimpalbysakshi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline underline-offset-4 hover:text-primary"
      >
        View more on Instagram →
      </a>
    </div>

  </div>
</section>




      {/* Brand Story */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">Our Philosophy</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Crafted with Care</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            At Sada Simpal, we believe simplicity is an art form. Our crochet pieces are slow-crafted, stitch by stitch, for those who value the human touch over the machine, comfort over trends, and timeless quality over fast fashion.
          </p>
          <Button variant="outline" asChild>
            <Link to="/about">Discover Our Story</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
