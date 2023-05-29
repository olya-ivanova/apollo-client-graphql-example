import { Routes, Route } from "react-router-dom";

import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Search from "./pages/Search";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Rick and Morty GraphQL (Apollo Client) API 🚀</h1>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
