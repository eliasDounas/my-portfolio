import { useState, useRef } from "react";
import { useEffect } from "react";

const NameBio = () => {
  const [text, setText] = useState("Elias Dounas");
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const targetText = "Elias Dounas";

  const handleMouseOver = () => {
    if (isAnimating) return; // Prevent multiple animations

    let iteration = 0;
    setIsAnimating(true);

    intervalRef.current = setInterval(() => {
      setText((prev) =>
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(""),
      );

      if (iteration >= targetText.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-lg">
      <h1
        className="text-white text-5xl whitespace-nowrap -tracking-wide rounded-[clamp(0.4rem,0.75vw,1rem)] font-semibold"
        onMouseOver={handleMouseOver}
      >
        {text}
      </h1>

      <h2 className="text-white text-xl mt-3 -tracking-wide">
        Software Engineer in the making
      </h2>

      <h1 className="my-4 max-w-lg text-gray-400">
        I build software that bridges creativity and technical excellence.
      </h1>
    </div>
  );
};

export default NameBio;
