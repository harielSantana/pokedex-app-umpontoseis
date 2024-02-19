import React from "react";
import * as S from './styles';

interface DetailProps {
    title: string;
    detail: string;
}

export const Detail: React.FC<DetailProps> = ({title, detail}) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Detail>{detail}</S.Detail>
        </S.Container>
    )
}
