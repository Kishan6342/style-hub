import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", alt: "Fashion look 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", alt: "Fashion look 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80", alt: "Fashion look 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80", alt: "Fashion look 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80", alt: "Fashion look 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1485968579169-23422a8f75c5?w=800&q=80", alt: "Fashion look 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&q=80", alt: "Fashion look 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", alt: "Fashion look 8" },
];

const Lookbook = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section id="lookbook" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Lookbook
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Discover our latest collection through the lens
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 md:left-8 text-background/80 hover:text-background transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 text-background/80 hover:text-background transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background/80 font-body">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Lookbook;
