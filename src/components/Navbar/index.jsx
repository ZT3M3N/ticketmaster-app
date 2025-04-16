import React, { useState, useEffect } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("onSearch cambió");
  }, [onSearch]);

  useEffect(() => {
    console.log("componente listo");
  }, []);

  useEffect(() => {
    console.log("search cambió");
  }, [search]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div>
      <p>Mi boletera</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </div>
  );
};

export default Navbar;
