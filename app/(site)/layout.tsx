import type { ReactNode } from "react";

import { Footer } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">{children}</main>

      <Footer />
    </>
  );
}
