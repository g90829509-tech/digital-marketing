import { useEffect } from "react";

// Scroll reveal is progressive enhancement only: cards remain visible if the
// observer is unavailable or the browser does not fire an intersection event.
export default function useScrollReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll(".reveal-card, .rx-reveal");
    document.querySelectorAll(".rx-reveal").forEach((item) => item.classList.add("rx-reveal-pending"));
    const scrollItems = document.querySelectorAll(".scroll-on-view");
    if (!cards.length && !scrollItems.length) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      scrollItems.forEach((item) => item.classList.add("has-entered"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible", "has-entered");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px 80px 0px" });

    cards.forEach((card) => observer.observe(card));
    scrollItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}
