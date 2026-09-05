import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={cn("brand", compact && "brand-compact")}>
      <Image src="/brand/knoeta-mark.png" alt="" width={36} height={36} />
      <span>Knoeta</span>
    </span>
  );
}

export function EnterLink({ className }: { className?: string }) {
  return (
    <a href={site.clinicalUrl} className={cn("button button-dark", className)}>
      Enter Knoeta <ArrowRight size={16} aria-hidden="true" />
    </a>
  );
}
