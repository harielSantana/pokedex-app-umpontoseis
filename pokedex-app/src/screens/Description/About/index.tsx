import { Detail } from "@components/Detail"
import React from "react"
import * as S from './styles'

interface AboutProps {
  type: any
}

export const About: React.FC<AboutProps> = ({type}: AboutProps) => {
  return (
    <>
      <S.DescriptionText>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</S.DescriptionText>
      <S.Title type={type}>Pokedex Data</S.Title>
      <Detail
        title="Species"
        detail="Seed Pokemon"
      />
    </>
  )
}


