import { Image, ViewProps } from 'react-native';
import * as Styled from './styles';
import PokemonType from '../Type';
import { Pokemon } from '../../screens/Home/_types';

interface CardProps {
    value: Pokemon
}

const Card: React.FC<CardProps> = (value) => {
    const pokemon = value.value;
    return (
        <Styled.Card>
            <Styled.CardId>{pokemon.id}</Styled.CardId>
            <Styled.Name>{pokemon.name}</Styled.Name>
            <Image source={{ uri: pokemon.sprites}}/>
            <Styled.PokemonTypeContainer>
                <PokemonType type='grass'/>
                <PokemonType type='electric'/>
            </Styled.PokemonTypeContainer>
        </Styled.Card>
    )
}

export default Card;