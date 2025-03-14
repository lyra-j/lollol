export const LOL_API_URL = 'https://ddragon.leagueoflegends.com';
export const LOADING_IMG_URL = `${LOL_API_URL}/cdn/img/champion/loading`;
export const SPLASH_IMG_URL = `${LOL_API_URL}/cdn/img/champion/splash`;

export const DEFAULT_LANGUAGE = 'ko_KR';

// 챔피언 썸네일 이미지 블러오기
export const championSquareImgUrl = (version: string) => `${LOL_API_URL}/cdn/${version}/img/champion`;

// 챔피언 패시브 스킬 이미지 불러오기
export const passiveImgUrl = (version: string, passiveImg: string) =>
  `${LOL_API_URL}/cdn/${version}/img/passive/${passiveImg}`;

// 챔피언 스펠 이미지 불러오기
export const spellImgUrl = (version: string, spellImg: string) => `${LOL_API_URL}/cdn/${version}/img/spell/${spellImg}`;

// 아이템 이미지 불러오기
export const itemImgUrl = (version: string, itemImg: string) => `${LOL_API_URL}/cdn/${version}/img/item/${itemImg}`;
