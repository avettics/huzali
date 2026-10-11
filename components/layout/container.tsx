import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div">;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-360 px-5 sm:px-6 lg:px-8 xl:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
