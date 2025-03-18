import { ROTATION_CHAMPION_URL } from '@/constants/constants';
import { ChampionRotation } from '@/types/ChampionRotation';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(ROTATION_CHAMPION_URL, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
        'X-Riot-Token': process.env.RIOT_API_KEY || '',
      },
    });

    if (!res.ok) {
      throw new Error(`로테이션 API 호출 실패: ${res.status}`);
    }
    const data: ChampionRotation = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
