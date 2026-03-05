import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeVariant as VariantEnum,
  getBadgeColors,
  type BadgeColor,
} from "./badgeTheme";
import "./Badge.css";

export type BadgeVariant = "default" | "secondary" | "outline";

export type { BadgeColor } from "./badgeTheme";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant */
  variant?: BadgeVariant;
  /** Color family from the Ampeniatko palette. */
  color?: BadgeColor;
  /** Optional icon rendered before the label */
  icon?: LucideIcon;
  /** Optional icon rendered after the label */
  iconRight?: LucideIcon;
  /** Additional className */
  className?: string;
}

const variantToEnum: Record<BadgeVariant, VariantEnum> = {
  default: VariantEnum.Default,
  secondary: VariantEnum.Secondary,
  outline: VariantEnum.Outline,
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      color,
      icon: IconLeft,
      iconRight: IconRight,
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const [bg, border, text] = getBadgeColors(variantToEnum[variant], color);

    const themeStyle = {
      "--cmp-bg": bg,
      "--cmp-border": border,
      "--cmp-color": text,
    } as React.CSSProperties;

    const classes = ["amp-badge", className].filter(Boolean).join(" ");

    return (
      <span ref={ref} className={classes} style={themeStyle} {...props}>
        {IconLeft && <IconLeft className="amp-badge__icon" size={12} />}
        {children}
        {IconRight && <IconRight className="amp-badge__icon" size={12} />}
      </span>
    );
  },
);

Badge.displayName = "Badge";
