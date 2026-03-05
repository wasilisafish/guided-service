/**
 * Button theme config — variant → state → [background, border, text]
 * Matches team style: enum variants with color token arrays per state
 */

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Outline = "outline",
  Ghost = "ghost",
  Link = "link",
}

/** Color tokens — camelCase to match team convention */
export const colors = {
  white: "var(--color-base-white)",
  black: "var(--color-base-black)",
  transparent: "transparent",

  neutral100: "var(--color-neutral-100)",
  neutral200: "var(--color-neutral-200)",
  neutral400: "var(--color-neutral-400)",
  neutral500: "var(--color-neutral-500)",
  neutral600: "var(--color-neutral-600)",

  blue50: "var(--color-blue-50)",
  blue100: "var(--color-blue-100)",
  blue200: "var(--color-blue-200)",
  blue300: "var(--color-blue-300)",
  blue400: "var(--color-blue-400)",
  blue500: "var(--color-blue-500)",
  blue600: "var(--color-blue-600)",

  red200: "var(--color-red-200)",
  red300: "var(--color-red-300)",
  red400: "var(--color-red-400)",
} as const;

export type ButtonState = "base" | "hover" | "disabled" | "loading";

/** [background, border, text] per state */
export type StateColors = [string, string, string];

export type VariantTheme = Record<ButtonState, StateColors>;

export const buttonVariantTheme: Record<ButtonVariant, VariantTheme> = {
  [ButtonVariant.Primary]: {
    base: [colors.blue400, colors.transparent, colors.white],
    hover: [colors.blue300, colors.transparent, colors.white],
    disabled: [colors.neutral200, colors.transparent, colors.neutral400],
    loading: [colors.neutral200, colors.transparent, colors.neutral400],
  },
  [ButtonVariant.Secondary]: {
    base: [colors.blue50, colors.blue50, colors.blue500],
    hover: [colors.neutral500, colors.neutral500, colors.blue600],
    disabled: [colors.white, colors.white, colors.neutral400],
    loading: [colors.blue50, colors.blue50, colors.blue500],
  },
  [ButtonVariant.Outline]: {
    base: [colors.white, colors.blue400, colors.blue500],
    hover: [colors.blue50, colors.blue500, colors.blue500],
    disabled: [colors.transparent, colors.neutral200, colors.neutral400],
    loading: [colors.transparent, colors.neutral200, colors.neutral400],
  },
  [ButtonVariant.Ghost]: {
    base: [colors.transparent, colors.transparent, colors.blue600],
    hover: [colors.blue100, colors.transparent, colors.blue600],
    disabled: [colors.transparent, colors.transparent, colors.neutral400],
    loading: [colors.transparent, colors.transparent, colors.neutral400],
  },
  [ButtonVariant.Link]: {
    base: [colors.transparent, colors.transparent, colors.blue400],
    hover: [colors.transparent, colors.transparent, colors.blue300],
    disabled: [colors.transparent, colors.transparent, colors.neutral400],
    loading: [colors.transparent, colors.transparent, colors.neutral400],
  },
};

/** Destructive overrides for Primary and Outline */
export const buttonDestructiveTheme: Partial<Record<ButtonVariant, VariantTheme>> = {
  [ButtonVariant.Primary]: {
    base: [colors.red400, colors.transparent, colors.white],
    hover: [colors.red300, colors.transparent, colors.white],
    disabled: [colors.neutral200, colors.transparent, colors.neutral400],
    loading: [colors.neutral200, colors.transparent, colors.neutral400],
  },
  [ButtonVariant.Outline]: {
    base: [colors.white, colors.red400, colors.red400],
    hover: [colors.transparent, colors.red300, colors.red300],
    disabled: [colors.transparent, colors.neutral200, colors.neutral400],
    loading: [colors.transparent, colors.neutral200, colors.neutral400],
  },
};
