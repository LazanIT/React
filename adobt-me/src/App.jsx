
import { createRoot } from "react-dom/client";
import Pet from "./Pet";




// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Luna",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Bird",
//       name: "Paper",
//       breed: "Cocktiel",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Doink",
//       breed: "Mixed",
//     }),
//   ]);
// };

const App = () =>{
  <div>
    <h1>Adopt Me!</h1>
    <Pet name = "Luna" animal="Dog" breed="Havenese" />
    <Pet name = "Paper" animal="Bird" breed="Cocktaiel" />
    <Pet name = "Doink" animal="Cat" breed="Mixed" />
  </div>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)
