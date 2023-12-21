import React from "react";
import { Image } from "react-native";

import { PokemonTypeProps } from "./_types";
import { typeToSvg } from "../../utils/findPokemonByType";
import NormalTypeSvg from "../../assets/types/normal.svg";
import Bug from "../../assets/Bug.svg";
import * as Styled from "./styles";

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
    const SvgComponent = typeToSvg[type] || NormalTypeSvg; // Usar BugTypeSvg como padrão se o tipo não for encontrado

    return (
        <Styled.TypeContainer type={type}>
            <SvgComponent />
            <Styled.Text>{type}</Styled.Text>
        </Styled.TypeContainer>
    );
};


export default PokemonType;
