import React from "react";
import * as S from './styles';

interface DetailProps {
    title: string;
    detail?: string | string[];
    children?: React.ReactNode;
}

export const Detail: React.FC<DetailProps> = ({title, detail,children}) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            {!children && (detail && <S.DetailContainer>
                {Array.isArray(detail) ? detail.map((item, index) => (
                    <S.Detail key={index}>{item}, </S.Detail>
                    )) : <S.Detail>{detail}</S.Detail>}
            </S.DetailContainer>)}
            {children}
        </S.Container>
    )
}
