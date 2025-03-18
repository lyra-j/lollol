import { ChampionRotation } from '@/types/ChampionRotation';

// 챔피언 로테이션 목록 가져오기
export const getChampionRotation = async (): Promise<ChampionRotation> => {
  const res = await fetch('/api/rotation');
  if (!res.ok) {
    throw new Error(`Rotation API 요청 실패: ${res.status}`);
  }
  const data = await res.json();
  return data;
};
