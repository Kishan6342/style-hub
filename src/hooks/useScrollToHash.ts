import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle HashRouter anchor scroll: #/#[id]
    const hash = location.hash?.split("#")[2];

    if (!hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    // wait for layout + images
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }, [location]);
};
