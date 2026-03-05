/**
 * Tab theme config — orientation × state → [background, text, icon, indicator]
 * Follows team style: config object instead of CSS classes.
 *
 * Figma source: Tab Trigger (Horizontal / Vertical × Default / Hover / Active / Disabled)
 */

export enum TabOrientation {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export enum TabState {
  Default = "default",
  Hover = "hover",
  Active = "active",
  Disabled = "disabled",
}

/** [background, text, icon, indicatorColor] */
export type TabColors = [string, string, string, string];

/* ── Token helpers ─────────────────────────────────────────────── */

const t = (name: string) => `var(--${name})`;

const colors = {
  transparent: "transparent",

  // Backgrounds
  surfaceHover: t("surface-hover"), // neutral.100

  // Text
  textMuted: t("text-default-muted-foreground"), // neutral.700
  textDefault: t("text-default-foreground"), // black
  textAction: t("text-action-secondary"), // blue.600
  textDisabled: t("text-disabled-foreground"), // neutral.400

  // Icons
  iconMuted: t("icon-default-muted-foreground"), // neutral.700
  iconDefault: t("icon-default-foreground"), // black
  iconDisabled: t("icon-disabled-foreground"), // neutral.400

  // Indicator
  borderAction: t("border-action"), // blue.400
} as const;

/* ── Theme: state → [background, text, icon, indicator] ───────── */

const theme: Record<TabState, TabColors> = {
  [TabState.Default]: [
    colors.transparent,
    colors.textMuted,
    colors.iconMuted,
    colors.transparent,
  ],
  [TabState.Hover]: [
    colors.surfaceHover,
    colors.textDefault,
    colors.iconDefault,
    colors.transparent,
  ],
  [TabState.Active]: [
    colors.transparent,
    colors.textAction,
    colors.textAction,
    colors.borderAction,
  ],
  [TabState.Disabled]: [
    colors.transparent,
    colors.textDisabled,
    colors.iconDisabled,
    colors.transparent,
  ],
};

/* ── Public API ────────────────────────────────────────────────── */

export function getTabColors(state: TabState): TabColors {
  return theme[state];
}
