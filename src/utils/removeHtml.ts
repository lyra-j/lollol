// 정규식을 사용하여 HTML 태그를 제거하는 함수
export const removeHtmlAndSlice = (htmlString: string): string => {
  const removeHtml = htmlString.replace(/<\/?[^>]+(>|$)/g, '');
  // '바다뱀'문자열 앞부분만 남기기
  const str = removeHtml.indexOf('바다뱀');
  const strSlice = str !== -1 ? removeHtml.slice(0, str) : removeHtml;
  return strSlice.trim();
};
