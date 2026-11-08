import type { Metadata, Viewport } from "next";
import NetworkNotice from "@/components/ui/NetworkNotice";
import AttributionCapture from "@/components/attribution/AttributionCapture";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import XPixel from "@/components/analytics/XPixel";
import { Gowun_Batang, Noto_Sans_KR, Noto_Sans_Symbols, Noto_Sans_Symbols_2 } from "next/font/google";
import "./globals.css";
import { SEO_DESCRIPTION, SEO_TITLE, SITE_URL } from "@/lib/seo";
import { enSiteEnabled } from "@/lib/i18n/lang";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  // 굵기 하나짜리 가변 글꼴(2026-10-18): 굵기 3개(400·500·700)를 따로 두면 글꼴 선언이 372개(압축해도 약 80KB)라
  // 화면을 그리기 전에 읽어야 하는 스타일이 커졌다. 가변 글꼴 하나로 모든 굵기를 낸다.
  // 미리 받기 끔(2026-10-18 첫 화면 속도): 한글 글꼴은 글자 범위별로 100개 가까운 조각이라, 미리 받기를 켜 두면
  // 첫 화면에서 쓰지 않는 조각까지 약 2MB를 먼저 받았다. 끄면 브라우저가 화면에 실제로 나온 글자 조각만 받는다.
  preload: false,
});

// 제목·요약 글꼴(프로토타입 --f-head). owner 결정 2026-10-10: HTML과 같게 명조 제목.
const gowunBatang = Gowun_Batang({ variable: "--font-gowun-batang", weight: ["400", "700"], subsets: ["latin"], preload: false });
// 휠의 행성·별자리 기호(프로토타입 --f-sym)
const notoSymbols = Noto_Sans_Symbols({ variable: "--font-noto-symbols", subsets: ["symbols"], preload: false });
const notoSymbols2 = Noto_Sans_Symbols_2({ variable: "--font-noto-symbols-2", weight: "400", subsets: ["symbols"], preload: false });

// 영문 사이트 기본 정보. 검색 공개 전(NEXT_PUBLIC_EN_SITE≠1)에는 모든 화면 noindex.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  robots: enSiteEnabled() ? undefined : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "SSOL Astro House",
    title: "SSOL Astro House",
    description: SEO_DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [{ url: "/og/share.jpg", width: 1774, height: 887, alt: "A sheep pointing at a ring of constellations in the night sky" }],
  },
  twitter: { card: "summary_large_image", title: "SSOL Astro House", description: SEO_DESCRIPTION, images: ["/og/share.jpg"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1e3f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSansKr.variable} ${gowunBatang.variable} ${notoSymbols.variable} ${notoSymbols2.variable} antialiased`}>
      <body>
        {/* 프로토타입과 같은 두 겹 별 입자 + 가운데 480px 기둥(.app) */}
        <div className="sky-dust" aria-hidden="true" />
        <div className="sky-dust b" aria-hidden="true" />
        <NetworkNotice />
        <AttributionCapture />
        <GoogleAnalytics />
        <XPixel />
        <div className="app flex flex-col">{children}</div>
      </body>
    </html>
  );
}
