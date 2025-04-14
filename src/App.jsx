import { useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  console.log(searchTerm, 10);

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <h2>Resultados para: "{searchTerm}"</h2>
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
