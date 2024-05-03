import { Suspense } from "react";
import { Pokedex } from "../Pokedex";

export const PokemonContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Pokedex />
    </Suspense>
  );
};
