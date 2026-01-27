import { useParams } from "react-router-dom";

const pageContent: Record<
  string,
  { title: string; content: string }
> = {
  "shop-all": {
    title: "Shop All",
    content: "Explore all our handcrafted crochet collections.",
  },
  "new-arrivals": {
    title: "New Arrivals",
    content: "Discover our latest handmade crochet pieces.",
  },
  "bestsellers": {
    title: "Bestsellers",
    content: "Our most loved and popular crochet creations.",
  },
  "about-us": {
    title: "About Us",
    content:
      "Sada Simpal is a handcrafted crochet brand focused on simplicity, quality, and timeless design.",
  },
  blog: {
    title: "Blog",
    content: "Read stories, care tips, and crochet inspirations.",
  },
  "shipping-&-returns": {
    title: "Shipping & Returns",
    content:
      "We ship across India. Returns accepted within 7 days of delivery.",
  },
  "size-guide": {
    title: "Size Guide",
    content: "Refer to our size guide to find your perfect fit.",
  },
  "care-instructions": {
    title: "Care Instructions",
    content:
      "Hand wash gently. Do not bleach. Dry flat to maintain shape.",
  },
  faqs: {
    title: "FAQs",
    content:
      "Find answers to the most commonly asked questions about our products.",
  },
  "contact-us": {
    title: "Contact Us",
    content:
      "Reach us at sadasimpalbysakshi@gmail.com or WhatsApp us anytime.",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content:
      "Your privacy matters to us. We never share your personal data.",
  },
  terms: {
    title: "Terms of Service",
    content:
      "By using our website, you agree to our terms and conditions.",
  },
};

const StaticPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const page = slug ? pageContent[slug] : null;

  if (!page) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-display mb-4">Page not found</h1>
        <p className="text-muted-foreground">
          This page is under construction.
        </p>
      </div>
    );
  }

  return (
    <div className="py-24 px-6 lg:px-12 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl mb-6">
        {page.title}
      </h1>
      <p className="text-muted-foreground leading-relaxed">
        {page.content}
      </p>
    </div>
  );
};

export default StaticPage;
