import Link from "next/link";
import SiteFooterEn from "@/components/SiteFooterEn";
import { ASTRO_DB_EN } from "@/lib/report/dbDataEn";
import { row } from "@/lib/report/db";

// 없는 주소 — 해석 DB B14 ERR_RESULT_NONE 영문 문구(번역이 없으면 아래 기본 영어)
export default function NotFound() {
  const r = row(ASTRO_DB_EN, "B14", "ERR_RESULT_NONE");
  return (
    <main className="flex w-full flex-1 flex-col gap-6 pb-8 pt-7" lang="en">
      <section className="screen on">
        <h1 className="big">{r?.title || "We couldn’t find this star map"}</h1>
        <p className="small">{r?.body || "The link may be old, or the reading may have been deleted."}</p>
        <div className="stack">
          <Link href="/" className="btn block">
            {r?.button || "Start again"}
          </Link>
        </div>
      </section>
      <SiteFooterEn />
    </main>
  );
}
