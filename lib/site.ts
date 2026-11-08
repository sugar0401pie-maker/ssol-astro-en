// 사이트 주소 한 곳(영문 사이트, 2026-11-08 한국어 저장소에서 분리).
// 영문 사이트 = 이 저장소, 한국어 사이트 = ssol-astro-test 저장소. 주소를 바꾸면 여기만 고친다.
export const EN_SITE = "https://en.astro.ssolwellnesshouse.com";
export const KO_SITE = "https://astro.ssolwellnesshouse.com";
/** 영문 사이트에서 한국어로 가는 링크 — ?lang=ko가 붙으면 한국어 사이트가 '한국어를 골랐다'고 기억하고 해외 접속이어도 영문으로 다시 보내지 않는다 */
export const KO_SITE_SWITCH = `${KO_SITE}/?lang=ko`;
