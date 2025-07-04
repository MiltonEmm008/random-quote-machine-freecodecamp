import React from "react";
import { FaXTwitter } from "react-icons/fa6";

function Quote({ phrase, author, bg, textColor, onClick }) {
  return (
    <div
      id="quote-box"
      className="p-6 bg-white"
    >
      <main className="mb-10 md:mb-14 lg:mb-16">
        <h2
          id="text"
          className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold italic"
          style={{ color: textColor }}
        >
          "{phrase}"
        </h2>
        <p
          id="author"
          className="float-right font-medium text-lg md:text-xl lg:text-2xl"
          style={{ color: textColor }}
        >
          {author}
        </p>
      </main>
      <footer className="flex items-center justify-between w-full">
        <div>
          <div className="p-3 rounded-sm" style={{ background: bg }}>
            <a
              id="tweet-quote"
              href={
                "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent(`${phrase} - ${author}`)
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: textColor }}
              className="font-bold text-lg md:text-xl lg:text-2xl"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <button
          id="new-quote"
          onClick={onClick}
          style={{ background: bg, color: textColor }}
          className="font-light text-lg md:text-xl lg:text-2xl py-2 px-3"
        >
          Siguiente Frase
        </button>
      </footer>
    </div>
  );
}

export default Quote;
