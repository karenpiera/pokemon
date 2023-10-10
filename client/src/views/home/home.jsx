/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/action";
import Navbar from "../../component/navbar/navbar";
import Cards from "../../component/cards/cards";

export default function home() {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.allPokemon);
  console.log("home", allPokemon);
  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Cards allPokemon={allPokemon} />
    </div>
  );
}
