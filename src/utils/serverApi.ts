import { DEFAULT_LANGUAGE, LOL_API_URL } from '@/constants/constants';
import { Champion } from '@/types/Champion';

// 최신 version 정보 가져오기
export const getLatestVersion = async (): Promise<string> => {
  const res = await fetch(`${LOL_API_URL}/api/versions.json`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error(`버전 정보 요청 실패: ${res.status}`);
  }
  const data: string[] = await res.json();
  return data[0];
};

// 챔피언 목록 가져오기 (ISR)
const ONE_DAY_SECONDS = 60 * 60 * 24;

export const fetchChampionList = async (): Promise<Champion[]> => {
  const version = await getLatestVersion();
  const res = await fetch(`${LOL_API_URL}/cdn/${version}/data/${DEFAULT_LANGUAGE}/champion.json`, {
    next: {
      revalidate: ONE_DAY_SECONDS,
    },
  });

  if (!res.ok) {
    throw new Error(`챔피언 목록 요청 실패: ${res.status}`);
  }

  const data = await res.json();
  // data.data는 객체를 반환, map을 사용하기 위해서 배열로 변환
  return Object.values(data.data);
};


