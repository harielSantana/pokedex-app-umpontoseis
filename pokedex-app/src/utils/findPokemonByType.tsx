import BugTypeSvg from "@assets/types/bug.svg";
import DarkTypeSvg from "@assets/types/dark.svg";
import DragonTypeSvg from "@assets/types/dragon.svg";
import ElectricTypeSvg from "@assets/types/electric.svg";
import FairyTypeSvg from "@assets/types/fairy.svg";
import FightingTypeSvg from "@assets/types/fighting.svg";
import FireTypeSvg from "@assets/types/fire.svg";
import FlyingTypeSvg from "@assets/types/flying.svg";
import GhostTypeSvg from "@assets/types/ghost.svg";
import GrassTypeSvg from "@assets/types/grass.svg";
import GroundTypeSvg from "@assets/types/ground.svg";
import IceTypeSvg from "@assets/types/ice.svg";
import NormalTypeSvg from "@assets/types/normal.svg";
import PoisonTypeSvg from "@assets/types/poison.svg";
import PsychicTypeSvg from "@assets/types/psychic.svg";
import RockTypeSvg from "@assets/types/rock.svg";
import SteelTypeSvg from "@assets/types/steel.svg";
import WaterTypeSvg from "@assets/types/water.svg";

import ShortTypeSvg from "@assets/heights/short.svg";
import MediumTypeSvg from "@assets/heights/medium.svg";
import TallTypeSvg from "@assets/heights/tall.svg";

import { IPokemonType } from "@components/Type/_types";
import { IPokemonHeight } from "@components/Modals/Filter/_types";

// Mapeamento entre tipo de Pokémon e componente SVG correspondente
export const typeToSvg: Record<IPokemonType, React.FC> = {
  bug: BugTypeSvg,
  dark: DarkTypeSvg,
  dragon: DragonTypeSvg,
  electric: ElectricTypeSvg,
  fairy: FairyTypeSvg,
  fighting: FightingTypeSvg,
  fire: FireTypeSvg,
  flying: FlyingTypeSvg,
  ghost: GhostTypeSvg,
  grass: GrassTypeSvg,
  ground: GroundTypeSvg,
  ice: IceTypeSvg,
  normal: NormalTypeSvg,
  poison: PoisonTypeSvg,
  psychic: PsychicTypeSvg,
  rock: RockTypeSvg,
  steel: SteelTypeSvg,
  water: WaterTypeSvg,
};

export const heightToSVG: Record<IPokemonHeight, React.FC> = {
  short: ShortTypeSvg,
  medium: MediumTypeSvg,
  tall: TallTypeSvg,
};
