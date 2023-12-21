import { ViewProps } from 'react-native';
import * as Styled from './styles';
import PokemonType from '../Type';

interface CardProps extends ViewProps {}

const Card: React.FC<CardProps> = ({}) => {
    return (
        <Styled.Card>
            <Styled.CardId>#001</Styled.CardId>
            <Styled.Name>Bulbasaur</Styled.Name>
            <Styled.PokemonTypeContainer>
                <PokemonType type='grass'/>
                <PokemonType type='electric'/>
            </Styled.PokemonTypeContainer>
        </Styled.Card>
    )
}

export default Card;