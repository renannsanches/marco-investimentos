import { useEffect, useState } from "react";

interface CarouselBgProps {
  /** Paths to background images. Pass an empty array to disable the carousel. */
  images: string[];
  /** Tailwind bg color+opacity class for the overlay, e.g. "bg-black/[0.55]" */
  overlay?: string;
  /** Interval in ms between slides (default 5000) */
  interval?: number;
}

export default function CarouselBg({
  images,
  overlay = "bg-black/[0.65]",
  interval = 5000,
}: CarouselBgProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className={`absolute inset-0 ${overlay}`} />
    </>
  );
}
