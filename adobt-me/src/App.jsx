import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query"
import AdoptedPetContext from "./AdoptedPetContext";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})


const App = () => {
  const adoptedPet = useState(null);
  return(
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
      <Routes>
          <Route path="/details/:id" element={<Details/>}></Route>
          <Route path="/" element={<SearchParams/>}></Route>
      </Routes>
      </AdoptedPetContext.Provider>
      </QueryClientProvider>
  </BrowserRouter>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)
