// 영문 사이트(이 저장소)의 언어 규칙 — 2026-11-08 한국어 저장소에서 분리하며 단순화.
// 이 사이트는 모든 화면이 영문이다. 해외 접속자를 이리로 보내는 일은 한국어 사이트(ssol-astro-test)의 proxy가 맡는다.

export type Lang = "ko" | "en";

/**
 * 검색엔진 공개 스위치. 꺼져 있으면(기본) 모든 화면이 noindex — 해외 결제가 열리고 정식 공개할 때 Vercel에 NEXT_PUBLIC_EN_SITE=1.
 * process.env.NEXT_PUBLIC_EN_SITE는 이 모양 그대로 써야 빌드 때 값이 박힌다.
 */
export function enSiteEnabled(value: string | undefined = process.env.NEXT_PUBLIC_EN_SITE): boolean {
  return value === "1";
}
