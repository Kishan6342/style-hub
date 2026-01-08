import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the family! 🌈",
      description: "You'll be the first to know about new drops and exclusive offers.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pastel-mint via-pastel-blue to-pastel-lavender animate-gradient" />
      
      {/* Floating elements */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-pastel-yellow rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob" />
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-pastel-pink rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join the Family
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Be the first to know about new collections, exclusive drops, and special offers.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 px-6 rounded-full bg-background/80 backdrop-blur-sm border-border/50 font-body placeholder:text-muted-foreground/60 focus-visible:ring-primary"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-body"
          >
            {isSubmitting ? "Joining..." : "Subscribe"}
          </Button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-sm text-muted-foreground font-body"
        >
          No spam, ever. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default EmailSignup;
