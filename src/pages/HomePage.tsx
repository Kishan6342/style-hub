import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collections, products } from '@/data/products';

const HomePage = () => {
  const featuredProducts = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80)',
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
            Premium Linen Wear
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6"
          >
            Sadasahi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light mb-8 max-w-md mx-auto"
          >
            Timeless elegance woven into every thread
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground" asChild>
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
                <Link to={`/shop?collection=${collection.slug}`} className="group block">
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

      {/* Brand Story */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">Our Philosophy</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Crafted with Care</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            At Sadasahi, we believe in the beauty of simplicity. Our linen pieces are thoughtfully designed 
            for those who appreciate quality over quantity, comfort over trends, and sustainability over fast fashion.
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
