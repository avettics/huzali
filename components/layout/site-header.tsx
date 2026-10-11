import Link from "next/link";

import { Container } from "@/components/layout/container";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
      <Container className="flex h-16 items-center gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link
          href="/"
          className="shrink-0 justify-self-start font-heading text-[25px] font-medium leading-none tracking-[-0.02em] text-foreground"
          aria-label="Huzali home"
        >
          Huzali
        </Link>

        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
