// 하단 '한국어' 링크: 한국어 사이트로 가면서 ?lang=ko를 붙인다 — 한국어 사이트가 이 선택을 쿠키로 기억해
// 해외 접속이어도 다시 영문으로 보내지 않는다(owner 2026-11-08 예외 ②).
import { KO_SITE_SWITCH } from "@/lib/site";

export default function LangLink() {
  return (
    <a href={KO_SITE_SWITCH} lang="ko" hrefLang="ko" className="underline">
      한국어
    </a>
  );
}
