// 정규식을 사용하여 HTML 태그를 제거하는 함수
export const withoutHtmlAndSlice = (htmlString: string): string => {
  const withoutHtml = htmlString.replace(/<\/?[^>]+(>|$)/g, '');
  // '바다뱀'문자열 앞부분만 남기기
  const str = withoutHtml.indexOf('바다뱀');
  const strSlice = str !== -1 ? withoutHtml.slice(0, str) : withoutHtml;
  return strSlice.trim();
};
