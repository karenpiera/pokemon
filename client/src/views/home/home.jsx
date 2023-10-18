import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getPokemonByName } from "../../redux/action";
import Navbar from "../../component/navbar/navbar";
import Cards from "../../component/cards/cards";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const dispatch = useDispatch();

  const allPokemon = useSelector(state => state.allPokemon);
  const totalItems = allPokemon.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allPokemon.slice(indexOfFirstItem, indexOfLastItem);

  const [name, setName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonByName(name));
  }

  function nextPage() {
    if (indexOfLastItem < totalItems) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }

  useEffect(() => {
    // Llama a getPokemon con el número de página y tamaño de página
    dispatch(getPokemon(currentPage, itemsPerPage));
  }, [dispatch, currentPage, itemsPerPage]);

  return (
    <div>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="container">
        <button
          className="custom-cursor"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>{currentPage}</span>
        <button
          className="custom-cursor"
          onClick={nextPage}
          disabled={indexOfLastItem >= totalItems}
        >
          Next
        </button>
      </div>
      <Cards allPokemon={currentItems} />
      <div className="pagination"></div>
    </div>
  );
}
