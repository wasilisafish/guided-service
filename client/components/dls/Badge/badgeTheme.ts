/**
 * Badge theme config — variant × color → [background, border, text]
 * Follows team style: config object instead of CSS classes.
 *
 * Uses semantic tokens where available; primitives where semantic
 * tokens don't yet exist for that color family.
 */

export enum BadgeVariant {
  Default = "default",
  Secondary = "secondary",
  Outline = "outline",
}

export type BadgeColor =
  | "blue"
  | "red"
  | "green"
  | "orange"
  | "yellow"
  | "purple"
  | "neutral";

/** [background, border, text] */
export type BadgeColors = [string, string, string];

/* ── Token helpers ─────────────────────────────────────────────── */

const t = (name: string) => `var(--${name})`;

const colors = {
  white: t("color-base-white"),
  transparent: "transparent",

  // Semantic tokens (preferred)
  actionPrimaryDefault: t("action-primary-default"), // blue.400
  actionSecondaryDefault: t("action-secondary-default"), // blue.50
  destructiveDefault: t("destructive-default"), // red.400
  textOnColor: t("text-on-color-foreground"), // white
  textActionOutline: t("text-action-outline"), // blue.500
  textDefaultForeground: t("text-default-foreground"), // black
  textDefaultMuted: t("text-default-muted-foreground"), // neutral.700
  borderDefault: t("border-default"), // neutral.300
  surfaceInfoAccent: t("surface-info-accent"), // purple.400

  // Primitives (no semantic equivalent yet for badge use)
  blue200: t("color-blue-200"),
  red50: t("color-red-50"),
  red200: t("color-red-200"),
  red500: t("color-red-500"),
  green400: t("color-green-400"),
  green50: t("color-green-50"),
  green200: t("color-green-200"),
  green500: t("color-green-500"),
  orange400: t("color-orange-400"),
  orange50: t("color-orange-50"),
  orange200: t("color-orange-200"),
  orange500: t("color-orange-500"),
  yellow400: t("color-yellow-400"),
  yellow50: t("color-yellow-50"),
  yellow200: t("color-yellow-200"),
  yellow500: t("color-yellow-500"),
  yellow600: t("color-yellow-600"),
  purple50: t("color-purple-50"),
  purple200: t("color-purple-200"),
  purple500: t("color-purple-500"),
  neutral100: t("color-neutral-100"),
  neutral300: t("color-neutral-300"),
  neutral600: t("color-neutral-600"),
  neutral700: t("color-neutral-700"),
} as const;

/* ── Color map: color family → [bg, border, text] per variant ── */

type ColorMap = Record<BadgeColor, BadgeColors>;

const defaultColorMap: ColorMap = {
  blue: [colors.actionPrimaryDefault, colors.transparent, colors.textOnColor],
  red: [colors.destructiveDefault, colors.transparent, colors.textOnColor],
  green: [colors.green400, colors.transparent, colors.textOnColor],
  orange: [colors.orange400, colors.transparent, colors.textOnColor],
  yellow: [colors.yellow400, colors.transparent, colors.yellow600],
  purple: [colors.surfaceInfoAccent, colors.transparent, colors.textOnColor],
  neutral: [colors.neutral600, colors.transparent, colors.textOnColor],
};

const secondaryColorMap: ColorMap = {
  blue: [colors.actionSecondaryDefault, colors.transparent, colors.textActionOutline],
  red: [colors.red50, colors.transparent, colors.red500],
  green: [colors.green50, colors.transparent, colors.green500],
  orange: [colors.orange50, colors.transparent, colors.orange500],
  yellow: [colors.yellow50, colors.transparent, colors.yellow500],
  purple: [colors.purple50, colors.transparent, colors.purple500],
  neutral: [colors.neutral100, colors.transparent, colors.neutral700],
};

const outlineColorMap: ColorMap = {
  blue: [colors.transparent, colors.blue200, colors.textActionOutline],
  red: [colors.transparent, colors.red200, colors.red500],
  green: [colors.transparent, colors.green200, colors.green500],
  orange: [colors.transparent, colors.orange200, colors.orange500],
  yellow: [colors.transparent, colors.yellow200, colors.yellow500],
  purple: [colors.transparent, colors.purple200, colors.purple500],
  neutral: [colors.transparent, colors.neutral300, colors.textDefaultMuted],
};

/* ── Public API ────────────────────────────────────────────────── */

const DEFAULT_COLOR: BadgeColor = "blue";

export function getBadgeColors(
  variant: BadgeVariant,
  color?: BadgeColor,
): BadgeColors {
  const c = color ?? DEFAULT_COLOR;

  switch (variant) {
    case BadgeVariant.Default:
      return defaultColorMap[c];
    case BadgeVariant.Secondary:
      return secondaryColorMap[c];
    case BadgeVariant.Outline:
      return outlineColorMap[c];
  }
}
