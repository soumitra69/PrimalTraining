import React, { useEffect, useRef, useState } from "react";

const Reveal = ({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  immediate = false,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (immediate) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const hiddenClasses = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-down": "opacity-0 -translate-y-6",
    "fade-left": "opacity-0 -translate-x-8",
    "fade-right": "opacity-0 translate-x-8",
    "zoom-in": "opacity-0 scale-95",
  }[variant] || "opacity-0 translate-y-8";

  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? visibleClasses : hiddenClasses
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
