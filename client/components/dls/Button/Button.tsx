import React from "react";
import { Loader2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  ButtonVariant as VariantEnum,
  buttonVariantTheme,
  buttonDestructiveTheme,
  type ButtonState,
} from "./buttonTheme";
import "./Button.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  destructive?: boolean;
  loading?: boolean;
  iconLeading?: LucideIcon;
  iconTrailing?: LucideIcon;
  icon?: LucideIcon;
}

const variantToEnum: Record<ButtonVariant, VariantEnum> = {
  primary: VariantEnum.Primary,
  secondary: VariantEnum.Secondary,
  outline: VariantEnum.Outline,
  ghost: VariantEnum.Ghost,
  link: VariantEnum.Link,
};

function getThemeColors(
  variant: ButtonVariant,
  state: ButtonState,
  destructive: boolean
): [string, string, string] {
  const v = variantToEnum[variant];
  const theme =
    destructive && buttonDestructiveTheme[v]
      ? buttonDestructiveTheme[v]!
      : buttonVariantTheme[v];
  return theme[state];
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      destructive = false,
      loading = false,
      disabled = false,
      iconLeading: IconLeading,
      iconTrailing: IconTrailing,
      icon: Icon,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const isIconOnly = size === "icon";
    const isDisabled = disabled || loading;

    const state: ButtonState = isDisabled
      ? loading
        ? "loading"
        : "disabled"
      : "base";

    const [bg, border, text] = getThemeColors(variant, state, destructive);
    const [bgHover, borderHover, textHover] =
      state === "base"
        ? getThemeColors(variant, "hover", destructive)
        : [bg, border, text];

    const themeStyle = {
      "--btn-bg": bg,
      "--btn-border": border,
      "--btn-color": text,
      "--btn-bg-hover": bgHover,
      "--btn-border-hover": borderHover,
      "--btn-color-hover": textHover,
    } as React.CSSProperties;

    const classes = [
      "amp-btn",
      `amp-btn--${variant}`,
      `amp-btn--${size}`,
      destructive ? "amp-btn--destructive" : "",
      loading ? "amp-btn--loading" : "",
      isDisabled ? "amp-btn--disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        style={themeStyle}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading && <Loader2 className="amp-btn__spinner" size={16} />}
        {!loading && IconLeading && !isIconOnly && (
          <IconLeading size={16} />
        )}
        {isIconOnly && Icon && !loading && <Icon size={16} />}
        {!isIconOnly && <span className="amp-btn__label">{children}</span>}
        {!loading && IconTrailing && !isIconOnly && (
          <IconTrailing size={16} />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
