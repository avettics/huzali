import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";

const footerNavigation = [
  {
    title: "Explore",
    items: [
      { title: "Academy", href: "/academy" },
      { title: "Campaigns", href: "/campaigns" },
      { title: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Get involved",
    items: [
      { title: "Join Huzali Academy", href: "/academy/join" },
      { title: "Book a Service", href: "/book" },
      { title: "Contact", href: "/contact" },
    ],
  },
] as const;

const socialNavigation = [
  { title: "Instagram", href: "#" },
  { title: "TikTok", href: "#" },
  { title: "Facebook", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <Container className="py-5 sm:py-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.8fr_repeat(3,1fr)] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block font-heading text-[26px] font-medium leading-none tracking-[-0.02em] text-foreground"
              aria-label="Huzali home"
            >
              Huzali
            </Link>

            <p className="mt-2.5 text-sm text-muted-foreground">
              Beauty. Skills. Opportunity. Growth.
            </p>
          </div>

          {footerNavigation.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-foreground">
                {group.title}
              </h2>

              <ul className="mt-2.5 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Social media">
            <h2 className="text-sm font-semibold text-foreground">Follow us</h2>

            <ul className="mt-2.5 space-y-1.5">
              {socialNavigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
                  >
                    <span>{item.title}</span>

                    <ArrowUpRight
                      className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-5 border-t border-border/60 pt-3">
          <div className="flex flex-col items-center gap-1.5 text-center text-[12px] text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
            <p>© 2026 Huzali. All rights reserved.</p>

            <p>
              Built by{" "}
              <Link
                href="https://avettics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
              >
                Avettics Limited
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
