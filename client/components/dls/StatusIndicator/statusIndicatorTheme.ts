/**
 * StatusIndicator theme config — color → [bg, bgHover, dotColor, textColor]
 * Follows team style: config object instead of CSS classes.
 *
 * Uses semantic tokens for all dot colors and hover backgrounds.
 */

export enum StatusColor {
  Green = "green",
  Orange = "orange",
  Red = "red",
  Grey = "grey",
  Purple = "purple",
}

/** [background, backgroundHover, dotColor, textColor] */
export type StatusColors = [string, string, string, string];

/* ── Token helpers ─────────────────────────────────────────────── */

const t = (name: string) => `var(--${name})`;

const colors = {
  transparent: "transparent",

  // Dot colors (semantic)
  greenDot: t("icon-success-accent"), // green.500
  orangeDot: t("icon-warning-accent"), // orange.400
  redDot: t("destructive-default"), // red.400
  greyDot: t("icon-neutral-foreground"), // neutral.400
  purpleDot: t("icon-info-accent"), // purple.400

  // Hover backgrounds (semantic)
  greenBg: t("surface-success-default"), // green.100
  orangeBg: t("surface-warning-default"), // orange.100
  redBg: t("surface-error-default"), // red.100
  greyBg: t("surface-hover"), // neutral.100
  purpleBg: t("surface-info-default"), // purple.50

  // Text
  textDefault: t("text-default-foreground"), // black
} as const;

/* ── Color map: color → [bg, bgHover, dot, text] ────────────── */

const theme: Record<StatusColor, StatusColors> = {
  [StatusColor.Green]: [
    colors.transparent,
    colors.greenBg,
    colors.greenDot,
    colors.textDefault,
  ],
  [StatusColor.Orange]: [
    colors.transparent,
    colors.orangeBg,
    colors.orangeDot,
    colors.textDefault,
  ],
  [StatusColor.Red]: [
    colors.transparent,
    colors.redBg,
    colors.redDot,
    colors.textDefault,
  ],
  [StatusColor.Grey]: [
    colors.transparent,
    colors.greyBg,
    colors.greyDot,
    colors.textDefault,
  ],
  [StatusColor.Purple]: [
    colors.transparent,
    colors.purpleBg,
    colors.purpleDot,
    colors.textDefault,
  ],
};

/* ── Public API ────────────────────────────────────────────────── */

export function getStatusColors(color: StatusColor): StatusColors {
  return theme[color];
}
