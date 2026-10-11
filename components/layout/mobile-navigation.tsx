"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import {
  mainNavigation,
  navigationAction,
} from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-auto lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              size="sm"
              className="h-9 active:not-aria-[haspopup]:translate-y-0"
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" />
              <span>Menu</span>
            </Button>
          }
        />

        <SheetContent side="right" className="w-full sm:max-w-sm">
          <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
          <nav
            className="flex flex-1 flex-col overflow-y-auto px-4 pt-14 pb-6"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onNavigate={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <Button
                nativeButton={false}
                className="w-full font-semibold active:not-aria-[haspopup]:translate-y-0"
                render={
                  <Link
                    href={navigationAction.href}
                    onNavigate={() => setOpen(false)}
                  />
                }
              >
                {navigationAction.label}
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
