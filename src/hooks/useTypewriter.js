import { useEffect, useRef, useState } from "react";

const useTypewriter = (text, speed = 50, enabled = true) => {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    indexRef.current = 0;
    setDisplayed("");

    const intervalId = setInterval(() => {
      const char = text.charAt(indexRef.current);
      indexRef.current += 1;

      setDisplayed((prev) => prev + char);

      if (indexRef.current >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, enabled]);

  return displayed;
};

export default useTypewriter;
