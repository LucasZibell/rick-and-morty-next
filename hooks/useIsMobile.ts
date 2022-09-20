import { useState, useEffect } from "react";

type screenSize = {
  screenWidth: number;
};

export default function useIsMobile() {
  const [screenSize, setScreenSize] = useState<number>(1281);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize <= 640;
}
