import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import SearchParams from "./SearchParams";
import Details from "./Details";



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

const App = () => {
  return(
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
    
     <Routes>
      <Route path="/details/:id" element={<Details/>}></Route>
      <Route path="/" element={<SearchParams/>}></Route>
     </Routes>

  </BrowserRouter>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)
