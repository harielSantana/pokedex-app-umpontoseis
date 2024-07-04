import { api } from "../../services/api";

export async function getPokemonDetails(pokemonId: number) {
  try {
    // Fetch Pokemon details
    const pokemonResponse = await api.get(`pokemon/${pokemonId}`);
    const pokemonData = pokemonResponse.data;

    // Fetch Pokemon species details
    const pokemonSpeciesResponse = await api.get(`pokemon-species/${pokemonId}`);
    const pokemonSpeciesData = pokemonSpeciesResponse.data;

    // Fetch Pokemon type details
    const type = pokemonData.types[0].type.name;
    const pokemonTypeResponse = await api.get(`type/${type}`);
    const typeData = pokemonTypeResponse.data;

    // Extract relevant information
    const { id, name, abilities, stats, height, weight, base_experience } = pokemonData;
    const { flavor_text_entries, genera, growth_rate, capture_rate, gender_rate } = pokemonSpeciesData;
    const { damage_relations } = typeData;

    // Extract background color based on Pokemon type (assuming type is defined somewhere)
    const backgroundColor = type; // Assuming type is defined somewhere

    // Extract description
    const description = flavor_text_entries.find((entry: any) => entry.language.name === 'en').flavor_text.trim().replace(/\s+/g, ' ');

    // Construct the final object
    const pokemonDetails = {
      id,
      name,
      types: pokemonData.types,
      abilities: abilities.map((ability: any) => ability.ability.name),
      stats,
      description,
      color: backgroundColor,
      damage_relation: damage_relations,
      pokemonData: {
        species: genera.find((entry: any) => entry.language.name === 'en').genus,
        height,
        weight,
        weaknesses: damage_relations.double_damage_from.map((type: any) => type.name),
        growth_rate: growth_rate.name,
        capture_rate,
        base_experience,
        gender_rate
      }
    };

    return pokemonDetails;
  } catch (error) {
    throw error;
  }
}
