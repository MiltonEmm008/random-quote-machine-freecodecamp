const colors = [
  {
    color: "#4A626A", // Azul grisáceo oscuro para el texto
    backgroundColor: "#D1E2E8", // Azul muy claro para el fondo
  },
  {
    color: "#6A5B4C", // Marrón suave para el texto
    backgroundColor: "#F5E4D7", // Beige rosado claro para el fondo
  },
  {
    color: "#4B6E4B", // Verde oscuro suave para el texto
    backgroundColor: "#DAF0D9", // Verde menta claro para el fondo
  },
  {
    color: "#6B546B", // Púrpura grisáceo para el texto
    backgroundColor: "#EDDDEE", // Lavanda muy claro para el fondo
  },
  {
    color: "#5E5D4C", // Marrón oliva oscuro para el texto
    backgroundColor: "#EDECE0", // Crema suave para el fondo
  },
  {
    color: "#4C606B", // Azul pizarra oscuro para el texto
    backgroundColor: "#D9E6EF", // Azul cielo muy claro para el fondo
  },
  {
    color: "#6A514B", // Rojo ladrillo suave para el texto
    backgroundColor: "#F2DDD9", // Salmón muy claro para el fondo
  },
  {
    color: "#4A6A5A", // Verde azulado oscuro para el texto
    backgroundColor: "#D0E8E1", // Aguamarina muy claro para el fondo
  },
  {
    color: "#655A6A", // Morado ciruela suave para el texto
    backgroundColor: "#E7DCEB", // Lila muy claro para el fondo
  },
  {
    color: "#5E6B4B", // Verde musgo oscuro para el texto
    backgroundColor: "#E4EDD9", // Verde pálido suave para el fondo
  },
];

export const selectRandomColors = () => {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
};