import { motion } from "framer-motion";
import { Instagram, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToLookbook = () => {
    document.getElementById("lookbook")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blue animate-gradient" />
      
      {/* Floating blob elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pastel-mint rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pastel-peach rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4 tracking-tight">
            YOUR BRAND
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto"
        >
          Colorful fashion for the bold & beautiful
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button 
            onClick={scrollToLookbook}
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 font-body"
          >
            Explore Lookbook
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="rounded-full px-8 font-body border-foreground/20 hover:bg-foreground/5"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Follow Us
          </Button>
        </motion.div>
        
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6 text-muted-foreground"
        >
          <a href="#" className="hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <span className="text-sm font-body">@yourbrand</span>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
