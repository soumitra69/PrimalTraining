import React, { useState, useRef, useEffect } from "react";

const SmoothImage = ({
  src,
  alt = "",
  className = "",
  containerClassName = "",
  eager = false,
  hoverZoom = true,
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-[#dfe3ff] group ${containerClassName}`}
    >
      {/* Shimmer skeleton while image loads */}
      {!loaded && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#dfe3ff] via-[#eef0ff] to-[#dfe3ff] animate-pulse z-10"
          aria-hidden="true"
        />
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`${className} transition-all duration-700 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        } ${hoverZoom ? "group-hover:scale-105 group-hover:brightness-105" : ""}`}
      />
    </div>
  );
};

export default SmoothImage;
