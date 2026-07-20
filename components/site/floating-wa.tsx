import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { waUrl } from "@/lib/whatsapp";

export function FloatingWA({ className }: { className?: string }) {
  return (
    <a
      href={waUrl("Chat CS", "consult")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat CS via WhatsApp"
      className={cn(
        "group fixed bottom-5 right-5 z-50 flex items-center gap-3",
        className
      )}
    >
      <span className="hidden rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm group-hover:inline-flex md:inline-flex">
        Chat CS
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/20 transition-transform hover:scale-105">
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40"
        />
        <MessageCircle className="relative size-6" strokeWidth={2.2} />
      </span>
    </a>
  );
}
