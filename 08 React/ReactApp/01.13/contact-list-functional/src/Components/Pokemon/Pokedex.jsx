import { Suspense } from "react";
import useSWR from "swr";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { Pokemon } from "./Pokemon";

export const Pokedex = () => {
  const {
    data: { results },
  } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=10");
  return (
    <div className="container">
      <h1>Pokedex</h1>
      {results.map((pokemon) => (
        <Suspense key={pokemon.name} fallback={<LoadingSkeleton />}>
          <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
        </Suspense>
      ))}
    </div>
  );
};
