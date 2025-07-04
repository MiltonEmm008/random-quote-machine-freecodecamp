import { useEffect, useState } from "react";
import "./App.css";
import Quote from "./components/Quote";
import { selectRandomColors } from "./data/colors";
import { getPhrase } from "./data/phrases";

function App() {
  const [currIndex, setCurrIndex] = useState(0);
  const [phrase, setPhrase] = useState({});
  const [colors, setColors] = useState({});
  const [visible, setVisible] = useState(true);

  function nextQuote() {
    setVisible(false); // Empieza el fade-out
    setTimeout(() => {
      const nextPhrase = getPhrase(currIndex);
      setPhrase(nextPhrase.phrase);
      setCurrIndex(nextPhrase.index);
      setColors(selectRandomColors());
      setVisible(true); // Fade-in
    }, 500); // 500ms debe coincidir con la duración de la transición
  }

  useEffect(() => {
    const initialPhrase = getPhrase(currIndex);
    setPhrase(initialPhrase.phrase);
    setCurrIndex(initialPhrase.index);
    setColors(selectRandomColors());
  }, []);

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-8 transition-colors duration-500`}
      style={{ background: colors.backgroundColor }}
    >
      <div
        className={`w-full max-w-xl transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Quote
          bg={colors.backgroundColor}
          textColor={colors.color}
          phrase={phrase?.text}
          author={phrase?.author}
          onClick={nextQuote}
        />
        <p className="mt-2 text-center text-sm">
          Por{" "}
          <a target="_blank" href="https://github.com/MiltonEmm008">
            Milton
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
