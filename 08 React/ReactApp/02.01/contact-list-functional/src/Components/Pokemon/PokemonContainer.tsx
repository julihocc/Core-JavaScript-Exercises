import { Suspense } from "react";
import { Pokedex } from "./Pokedex.jsx";

export const PokemonContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Pokedex />
    </Suspense>
  );
};
