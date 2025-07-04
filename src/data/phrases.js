const phrases = [
  {
    text: "La vida es aquello que te va sucediendo mientras estás ocupado haciendo otros planes.",
    author: "John Lennon",
  },
  {
    text: "El único modo de hacer un gran trabajo es amar lo que haces.",
    author: "Steve Jobs",
  },
  {
    text: "No te preguntes qué puede hacer tu país por ti, pregúntate qué puedes hacer tú por tu país.",
    author: "John F. Kennedy",
  },
  {
    text: "Dos cosas son infinitas: el universo y la estupidez humana; y no estoy seguro de lo primero.",
    author: "Albert Einstein",
  },
  {
    text: "Sé el cambio que quieres ver en el mundo.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Solo hay una felicidad en esta vida, amar y ser amado.",
    author: "George Sand",
  },
  {
    text: "La imaginación es más importante que el conocimiento.",
    author: "Albert Einstein",
  },
  {
    text: "Nunca, nunca, nunca te rindas.",
    author: "Winston Churchill",
  },
  {
    text: "Si puedes soñarlo, puedes hacerlo.",
    author: "Walt Disney",
  },
  {
    text: "El éxito no es definitivo, el fracaso no es fatal: es el coraje para continuar lo que cuenta.",
    author: "Winston Churchill",
  },
];

export const getPhrase = (pastIndex = 0) => {
  const filteredPhrases = phrases.filter((_, idx) => idx !== pastIndex);
  const randomIndex = Math.floor(Math.random() * filteredPhrases.length);

  return { phrase: filteredPhrases[randomIndex], index: randomIndex };
};
