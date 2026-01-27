import { useParams } from "react-router-dom";

const PAGE_CONTENT: Record<string, { title: string; content: string }> = {
  "about-us": {
    title: "About Us",
    content:
      "Sada Simpal celebrates handcrafted crochet made with care, simplicity, and timeless design.",
  },
  "shop-all": {
    title: "Shop All",
    content: "Explore all our handcrafted crochet collections.",
  },
  "new-arrivals": {
    title: "New Arrivals",
    content: "Discover our latest crochet creations.",
  },
  "bestsellers": {
    title: "Bestsellers",
    content: "Our most loved handcrafted crochet products.",
  },
  "blog": {
    title: "Blog",
    content: "Stories, care tips, and inspirations from Sada Simpal.",
  },
  "shipping-returns": {
    title: "Shipping & Returns",
    content: "Details about shipping timelines and return policies.",
  },
  "size-guide": {
    title: "Size Guide",
    content: "Find the perfect fit with our size guide.",
  },
  "care-instructions": {
    title: "Care Instructions",
    content: "How to care for your crochet products.",
  },
  "faqs": {
    title: "FAQs",
    content: "Frequently asked questions.",
  },
  "contact-us": {
    title: "Contact Us",
    content: "Reach out to us for any questions or support.",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content: "Your privacy matters to us.",
  },
  "terms-of-service": {
    title: "Terms of Service",
    content: "Terms and conditions for using our website.",
  },
};

const Page = () => {
  const { slug } = useParams<{ slug: string }>();

  const page = slug ? PAGE_CONTENT[slug] : null;

  if (!page) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-display">Page not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <h1 className="font-display text-4xl mb-6">{page.title}</h1>
      <p className="text-muted-foreground leading-relaxed">
        {page.content}
      </p>
    </div>
  );
};

export default Page;
