"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageSlotProps {
  src?: string;
  alt: string;
  icon?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  chrome?: boolean;
  priority?: boolean;
}

export function ImageSlot({
  src,
  alt,
  icon = <ImageIcon className="w-6 h-6 text-core-accent/70" strokeWidth={1.5} />,
  className,
  imageClassName,
  chrome = false,
  priority = false,
}: ImageSlotProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-core-blue bg-core-navy shadow-2xl",
        className
      )}
    >
      {chrome && (
        <div className="absolute top-0 left-0 right-0 h-9 flex items-center gap-1.5 px-4 bg-white/[0.03] border-b border-core-blue z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
      )}

      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-[1.03]",
            chrome && "pt-9",
            imageClassName
          )}
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3",
            chrome && "pt-9"
          )}
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(37,99,235,0.12),transparent)]" />
          <div className="relative w-14 h-14 rounded-2xl bg-core-accent/10 border border-core-accent/20 flex items-center justify-center">
            {icon}
          </div>
          <span className="relative text-xs font-medium text-white/30 tracking-wide">
            Project preview coming soon
          </span>
        </div>
      )}
    </div>
  );
}
