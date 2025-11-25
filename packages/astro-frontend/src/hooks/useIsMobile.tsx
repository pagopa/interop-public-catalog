import { useEffect, useState } from "react";

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    query.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => {
      query.removeEventListener("change", onChange);
    };
  }, [MOBILE_BREAKPOINT]);

  return !!isMobile;
}
