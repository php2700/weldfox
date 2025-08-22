import { useState, useEffect, useRef, RefObject } from "react";

function useScrollAnimation<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
}

export default useScrollAnimation;
