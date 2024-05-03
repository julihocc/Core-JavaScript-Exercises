import useSWR from "swr";

export const Pokemon = ({ pokemonName }: PokemonProps) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  // error comes from the fetcher function
  if (error || data.error) {
    return <div>Error fetching Pokemon</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  const { id, name, sprites, types } = data;
  return (
    <div className="card">
      <img src={sprites.front_default} alt={name} />
      <div className="card-body">
        <h5 className="card-title">
          {id}. {name}
        </h5>
        <p className="card-text">
          {types.map((pokemonType: PokemonType) => (
            <span key={pokemonType.type.name} className="badge bg-primary me-1">
              {pokemonType.type.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
