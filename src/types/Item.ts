import { ChampionImage } from './Champion';

// 아이템 목록 res 타입
export type ItemListRes = {
  type: string;
  version: string;
  // basic: {}
  data: {
    [key: string]: Item;
  };
  // groups: []
  // tree: []
};

// 아이템 기본 정보 타입
export type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: ChampionImage;
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
};
