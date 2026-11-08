import type { Metadata } from "next";
import IntroEn from "@/components/intro/IntroEn";
import { KO_SITE } from "@/lib/site";

// 영문 첫 화면. 제목·설명·검색 공개 여부는 app/layout.tsx(lib/seo.ts). 한국어 첫 화면과 짝(hreflang)으로 알린다.
export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", ko: `${KO_SITE}/`, "x-default": `${KO_SITE}/` } },
};

export default function HomeEn() {
  return <IntroEn />;
}
