import Link from "next/link";

import {
  mainNavigation,
  navigationAction,
} from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationItemClassName =
  "inline-flex h-9 items-center justify-center rounded-md bg-transparent px-3 py-0 text-[13px] font-medium tracking-[0.01em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground";

export function DesktopNavigation() {
  return (
    <>
      <NavigationMenu
        className="hidden w-max max-w-none flex-none justify-self-center lg:flex"
        aria-label="Main navigation"
      >
        <NavigationMenuList className="items-center gap-1">
          {mainNavigation.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                render={<Link href={item.href} />}
                className={navigationItemClassName}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden shrink-0 items-center justify-self-end lg:flex">
        <Button
          nativeButton={false}
          size="sm"
          className="h-9 px-5 text-[13px] font-semibold shadow-sm active:not-aria-[haspopup]:translate-y-0"
          render={<Link href={navigationAction.href} />}
        >
          {navigationAction.label}
        </Button>
      </div>
    </>
  );
}
