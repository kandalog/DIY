import Image from "next/image";
import { ArrowRight, Check, Clock, Lightbulb, Toolbox, X } from "lucide-react";

const BEFORE_ISSUES = [
  "作業スペースが狭い",
  "ゲーミングPCは机の下",
  "白一色で飽きた",
] as const;

const AFTER_IMPROVEMENTS = [
  "広々とした作業スペースで快適！",
  "ゲーミングPCをデスク上に配置可能に",
  "木の温もりが感じられるデザインに満足！",
] as const;

/** `public/` に置いた画像のパス */
const PROCESS_IMAGES: { src: string; alt: string; caption?: string }[] = [
  { src: "/image3.png", alt: "制作過程の写真（1／4）" },
  { src: "/image4.jpg", alt: "制作過程の写真（2／4）" },
  { src: "/image5.jpg", alt: "制作過程の写真（3／4）" },
  { src: "/image6.jpg", alt: "制作過程の写真（4／4）" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-[#333333]">
      <main className="flex-1">
        <article className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-14">
          <span className="inline-flex rounded-full bg-[#FFE8D6] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#c45f2a]">
            DIY
          </span>

          <h1 className="mt-4 text-[1.65rem] font-bold leading-snug tracking-tight md:text-4xl">
            DIYでデスクを作成しました！
          </h1>

          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#777777] md:text-base">
            狭くて作業のしづらかったデスクからDIYの大きなデスクに進化しました
          </p>

          <section
            aria-label="ビフォーアフター"
            className="relative mt-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-4"
          >
            <figure className="flex flex-col overflow-hidden rounded-[12px] border border-neutral-100 bg-white shadow-[0_12px_40px_-28px_rgba(0,0,0,0.35)]">
              <figcaption className="flex items-center gap-2 border-b border-neutral-100 px-5 py-4">
                <span className="rounded-full bg-neutral-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Before
                </span>
                <span className="text-[15px] font-semibold">以前のデスク</span>
              </figcaption>
              <div className="relative aspect-4/3 w-full shrink-0">
                <Image
                  src="/before.jpg"
                  alt="以前の狭く散らかったデスク"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <ul className="space-y-3 px-5 py-5">
                {BEFORE_ISSUES.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-[14px] leading-snug"
                  >
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#bdbdbd]">
                      <X
                        className="h-3 w-3 text-white"
                        aria-hidden
                        strokeWidth={3}
                      />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </figure>

            <div
              className="flex items-center justify-center lg:flex-col lg:justify-center lg:pb-24"
              aria-hidden
            >
              <ArrowRight className="h-8 w-8 text-neutral-400 lg:rotate-0 rotate-90" />
            </div>

            <figure className="flex flex-col overflow-hidden rounded-[12px] border border-neutral-100 bg-white shadow-[0_12px_40px_-28px_rgba(0,0,0,0.35)]">
              <figcaption className="flex items-center gap-2 border-b border-neutral-100 px-5 py-4">
                <span className="rounded-full bg-[#5BA366] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  After
                </span>
                <span className="text-[15px] font-semibold">今のデスク</span>
              </figcaption>
              <div className="relative aspect-4/3 w-full shrink-0">
                <Image
                  src="/after.jpg"
                  alt="DIYで作った明るく広い木製デスクとペグボード"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <ul className="space-y-3 px-5 py-5">
                {AFTER_IMPROVEMENTS.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-[14px] leading-snug"
                  >
                    <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#5BA366]">
                      <Check
                        className="h-3 w-3 text-white"
                        aria-hidden
                        strokeWidth={3}
                      />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </figure>
          </section>

          <aside className="mt-14 rounded-[12px] bg-[#FDF8F3] px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-wrap items-start gap-3 md:gap-4">
              <Lightbulb
                aria-hidden
                className="mt-1 h-6 w-6 shrink-0 text-amber-500"
              />
              <div className="min-w-0 flex-1 space-y-3">
                <h2 className="text-[17px] font-bold md:text-lg">
                  DIYにかかった金額😭
                </h2>
                <p className="text-[14px] leading-relaxed text-[#555555] md:text-[15px]">
                  <span className="font-bold">天板+脚 </span>
                  <span className="font-normal">19,000円</span>
                </p>
                <p className="text-[14px] leading-relaxed text-[#555555] md:text-[15px]">
                  <span className="font-bold">消耗品 </span>
                  <span className="font-normal">1,600円</span>
                </p>
                <p className="text-[14px] leading-relaxed text-[#555555] md:text-[15px]">
                  <span className="font-bold">道具 </span>
                  <span className="font-normal">18,000円</span>
                </p>
                <p className="text-[14px] leading-relaxed text-[#555555] md:text-[15px]">
                  <span className="font-bold">その他 </span>
                  <span className="font-normal">8,000円</span>
                </p>
              </div>
            </div>

            <dl className="mt-10 grid gap-8 border-t border-neutral-200/70 pt-8 sm:grid-cols-3">
              <div className="text-center">
                <dt className="flex justify-center gap-2 text-[14px] text-[#777777]">
                  <Clock className="h-4 w-4 shrink-0" aria-hidden />
                  <span>製作期間</span>
                </dt>
                <dd className="mt-2 text-lg font-bold text-[#333333]">
                  約3日間
                </dd>
              </div>
              <div className="text-center">
                <dt className="flex justify-center gap-2 text-[14px] text-[#777777]">
                  <Toolbox className="h-4 w-4 shrink-0" aria-hidden />
                  <span>総費用</span>
                </dt>
                <dd className="mt-2 text-lg font-bold text-[#333333]">
                  約47000円
                </dd>
              </div>
              <div className="text-center">
                <dt className="flex justify-center gap-2 text-[14px] text-[#777777]">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#5BA366] text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <span>難易度</span>
                </dt>
                <dd className="mt-2 text-lg font-bold text-[#333333]">簡単</dd>
              </div>
            </dl>
          </aside>

          <p className="mt-8 text-[15px] leading-relaxed text-[#555555] md:text-base">
            次は2万円くらいで作れそうだけど、初回なのでだいぶお金がかかった😭
          </p>

          <section
            aria-label="制作過程"
            className="mt-14 border-t border-neutral-100 pt-14"
          >
            <h2 className="text-[17px] font-bold md:text-lg">制作過程</h2>
            {PROCESS_IMAGES.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROCESS_IMAGES.map((img, i) => (
                  <figure
                    key={`${img.src}-${i}`}
                    className="overflow-hidden rounded-[12px] border border-neutral-100 bg-white shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]"
                  >
                    <div className="relative aspect-4/3 w-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {img.caption ? (
                      <figcaption className="px-4 py-3 text-[13px] leading-snug text-[#555555]">
                        {img.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </section>
        </article>
      </main>
    </div>
  );
}
