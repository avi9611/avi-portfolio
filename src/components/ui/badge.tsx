import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import FramerWrapper from "../animation/FramerWrapper";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        secondary: "border-transparent bg-gray-700 text-white hover:bg-gray-800",
        destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
        outline: "text-white border-gray-500 hover:border-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => {
  return (
    <FramerWrapper y={0} scale={0.7}>
      <div className={cn(badgeVariants({ variant }), className)} {...props} />
    </FramerWrapper>
  );
};

export { Badge, badgeVariants };
