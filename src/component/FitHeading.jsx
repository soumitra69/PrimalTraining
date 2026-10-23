import React, { useRef, useLayoutEffect, useEffect, useCallback } from "react";

const FitHeading = ({
  as: Tag = "h1",
  children,
  className = "",
  containerClassName = "w-full px-3 md:px-4 py-2",
  initialVw = 8.85,
  fillRatio = 0.995,
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const fit = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const style = window.getComputedStyle(container);
    const padX =
      parseFloat(style.paddingLeft || "0") +
      parseFloat(style.paddingRight || "0");
    const availableWidth = (container.clientWidth - padX) * fillRatio;
    if (availableWidth <= 0) return;

    text.style.fontSize = "100px";
    const measuredWidth = text.getBoundingClientRect().width;
    if (measuredWidth > 0) {
      const exactSize = (availableWidth / measuredWidth) * 100;
      text.style.fontSize = `${exactSize}px`;
    }
  }, [fillRatio]);

  useLayoutEffect(() => {
    fit();
  }, [fit, children]);

  useEffect(() => {
    fit();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit);
    }
    let ro;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      ro = new ResizeObserver(() => fit());
      ro.observe(containerRef.current);
    }
    window.addEventListener("resize", fit);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [fit]);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden ${containerClassName}`}
    >
      <Tag
        ref={textRef}
        style={{ fontSize: `${initialVw}vw` }}
        className={`inline-block whitespace-nowrap font-black tracking-[-0.05em] leading-none select-none ${className}`}
      >
        {children}
      </Tag>
    </div>
  );
};

export default FitHeading;
