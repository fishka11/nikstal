import { useLayoutEffect, useState } from "react";

export default function useWindowScrollY() {
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.scrollX);
    }
    window.addEventListener("scroll", updatePosition);
    // updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}
