// 검색엔진용 설정(영문 사이트). 공개 페이지만 사이트맵에 넣고, 개인 결과·결제·로그인·API·테스트 중간 화면은 막는다(robots.txt).
// 정식 공개 전(NEXT_PUBLIC_EN_SITE≠1)에는 화면마다 noindex라 사이트맵이 있어도 검색에 오르지 않는다.
import { EN_SITE } from "./site.ts";

export const SITE_URL = EN_SITE;

/** 사이트맵에 넣는 공개 경로 */
export const PUBLIC_PATHS = [
  "/",
  "/legal/terms",
  "/legal/privacy",
  "/legal/birth-details-consent",
  "/legal/cookies",
  "/legal/refund",
  "/legal/disclaimer",
  "/legal/consumer-health-data",
] as const;

/** 페이지 내용이 마지막으로 바뀐 날(sitemap lastmod) */
export const PAGE_UPDATED: Record<(typeof PUBLIC_PATHS)[number], string> = {
  "/": "2026-11-08",
  "/legal/terms": "2026-11-06",
  "/legal/privacy": "2026-11-06",
  "/legal/birth-details-consent": "2026-11-06",
  "/legal/cookies": "2026-11-06",
  "/legal/refund": "2026-11-06",
  "/legal/disclaimer": "2026-11-06",
  "/legal/consumer-health-data": "2026-11-06",
};

/** 검색엔진이 가져가지 않을 경로(앞부분 일치) */
export const DISALLOW_PATHS = ["/api/", "/results", "/checkout", "/login", "/start/", "/questions", "/cookie-settings", "/do-not-sell"] as const;

export const SEO_TITLE = "SSOL Astro House | Your birth chart star report";
export const SEO_DESCRIPTION =
  "Map your birth chart from your birth date and place, discover your sign, elements and type, and look back on 2026 with SSOL Wellness House.";
