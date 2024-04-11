// function handleMouseMove({clientX, clientY}) {
//   console.log(clientX, clientY);
// }

const frutas = ["Banana", "Uva"];

const [fruta1, fruta2] = frutas;

const useState = [
  "blue",
  function(color) {
    useState[0] = color;
  }
];

const [color, setColor] = useState;

setColor('branco')
console.log(useState)
// document.documentElement.addEventListener("mousemove", handleMouseMove);

