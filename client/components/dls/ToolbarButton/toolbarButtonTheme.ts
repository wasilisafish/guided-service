/**
 * ToolbarButton theme config — state → base/hover → [background, border, text]
 * Matches team style: enum states with color token arrays
 *
 * Figma source: Data Toolbar / Toolbar Button (6 state variants)
 * Icon color always matches text color, so [bg, border, text] covers both.
 */

export enum ToolbarButtonState {
  Default = "default",
  Active = "active",
  Open = "open",
  Disabled = "disabled",
}

/** Color tokens — camelCase referencing CSS custom properties */
const colors = {
  /* surfaces */
  surfaceDefault: "var(--surface-default)",
  surfaceHover: "var(--surface-hover)",
  surfaceDisabled: "var(--surface-disabled-default)",

  /* action */
  actionSecondaryDefault: "var(--action-secondary-default)",
  actionSecondaryHover: "var(--action-secondary-hover)",
  actionPrimaryDefault: "var(--action-primary-default)",

  /* text */
  textDefault: "var(--text-default-foreground)",
  textActionSecondary: "var(--text-action-secondary)",
  textDisabled: "var(--text-disabled-foreground)",

  /* border */
  borderDefault: "var(--border-default)",
  borderSubtle: "var(--border-subtle)",
  borderAction: "var(--border-action)",
} as const;

export type ThemePhase = "base" | "hover";

/** [background, border, text/icon] per phase */
export type StateColors = [string, string, string];

export type StateTheme = Record<ThemePhase, StateColors>;

/**
 * Maps each visual state → base + hover colors.
 *
 * Figma states:
 *   Default      → base styling, dropdown closed, no active filter
 *   Hover        → CSS :hover of Default
 *   Active       → a filter is applied / selected
 *   Active Hover → CSS :hover of Active
 *   Open         → dropdown is open
 *   Disabled     → non-interactive
 */
export const toolbarButtonTheme: Record<ToolbarButtonState, StateTheme> = {
  [ToolbarButtonState.Default]: {
    base: [colors.surfaceDefault, colors.borderDefault, colors.textDefault],
    hover: [colors.surfaceHover, colors.borderDefault, colors.textDefault],
  },
  [ToolbarButtonState.Active]: {
    base: [
      colors.actionSecondaryDefault,
      colors.actionPrimaryDefault,
      colors.textActionSecondary,
    ],
    hover: [
      colors.actionSecondaryHover,
      colors.actionPrimaryDefault,
      colors.textActionSecondary,
    ],
  },
  [ToolbarButtonState.Open]: {
    base: [colors.surfaceDefault, colors.borderAction, colors.actionPrimaryDefault],
    hover: [colors.surfaceDefault, colors.borderAction, colors.actionPrimaryDefault],
  },
  [ToolbarButtonState.Disabled]: {
    base: [colors.surfaceDisabled, colors.borderSubtle, colors.textDisabled],
    hover: [colors.surfaceDisabled, colors.borderSubtle, colors.textDisabled],
  },
};

/** Count badge colors — always the same regardless of state */
export const countBadgeColors = {
  bg: colors.actionPrimaryDefault,
  text: "var(--text-on-color-foreground)",
} as const;
