"use client";

import Image from "next/image";
import { X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

export type ProcessImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ProcessImageGalleryProps = {
  images: ProcessImageItem[];
};

export function ProcessImageGallery({ images }: ProcessImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [enter, setEnter] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (openIndex === null) return;
    const id = requestAnimationFrame(() => setEnter(true));
    return () => cancelAnimationFrame(id);
  }, [openIndex]);

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    },
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openIndex]);

  const close = useCallback(() => {
    setEnter(false);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
      closeTimeoutRef.current = null;
    }, 280);
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close]);

  useEffect(() => {
    if (openIndex === null || !enter) return;
    closeBtnRef.current?.focus();
  }, [openIndex, enter]);

  if (images.length === 0) return null;

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <figure
            key={`${img.src}-${i}`}
            className="overflow-hidden rounded-[12px] border border-neutral-100 bg-white shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]"
          >
            <button
              type="button"
              onClick={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setEnter(false);
                setOpenIndex(i);
              }}
              className="group relative block aspect-4/3 w-full cursor-pointer overflow-hidden text-left outline-none ring-[#c45f2a] transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-haspopup="dialog"
              aria-expanded={openIndex === i}
              aria-label={`${img.alt}を拡大表示`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
            {img.caption ? (
              <figcaption className="px-4 py-3 text-[13px] leading-snug text-[#555555]">
                {img.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="presentation"
        >
          <button
            type="button"
            aria-label="拡大表示を閉じる"
            className={`absolute inset-0 bg-black/65 transition-opacity duration-300 ease-out ${
              enter ? "opacity-100" : "opacity-0"
            }`}
            onClick={close}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`relative z-10 flex max-h-[min(92vh,1200px)] w-full max-w-[min(96vw,1400px)] flex-col overflow-hidden rounded-[14px] bg-neutral-900/40 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/15 backdrop-blur-[2px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              enter
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-2 scale-[0.97] opacity-0"
            }`}
          >
            <p id={titleId} className="sr-only">
              {active.alt}
            </p>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="閉じる"
            >
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>

            <div className="relative h-[min(88vh,1100px)] w-full min-h-[200px]">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="96vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
