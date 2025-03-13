// 챔피언 기본 정보 타입
export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampionImage;
  blurb: string;
  info: ChampionInfo;
  tags: string[];
  partype: string;
  stats: ChampionStats;
};

// 챔피언 이미지 정보 타입
export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 챔피언 기본 능력치 정보 타입
export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

// 챔피언 스테이터스 정보 타입
export type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

// 챔피언 상세 정보 타입
export type ChampionDetail = Champion & {
  lore: string;
  allytips: string[];
  enemytips: string[];
  skins: ChampionSkin[];
  spells: ChampionSpell[];
  passive: ChampionPassive;
};

// 챔피언 외형 정보 타입
export type ChampionSkin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

// 챔피언 스펠 정보 타입
export type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  // datavalues: {} // ???
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  // vars: []
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ChampionImage;
  resource: string;
};

// 챔피언 패시브 정보 타입
export type ChampionPassive = {
  name: string;
  description: string;
  image: ChampionImage;
};
