import React from "react";
import {
  StatusColor as ColorEnum,
  getStatusColors,
} from "./statusIndicatorTheme";
import "./StatusIndicator.css";

export type StatusIndicatorColor =
  | "green"
  | "orange"
  | "red"
  | "grey"
  | "purple";

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** Dot color and hover background tint */
  color?: StatusIndicatorColor;
  /** Status text displayed next to the dot */
  label: string;
  /** Additional className */
  className?: string;
}

const colorToEnum: Record<StatusIndicatorColor, ColorEnum> = {
  green: ColorEnum.Green,
  orange: ColorEnum.Orange,
  red: ColorEnum.Red,
  grey: ColorEnum.Grey,
  purple: ColorEnum.Purple,
};

export const StatusIndicator = React.forwardRef<
  HTMLSpanElement,
  StatusIndicatorProps
>(({ color = "grey", label, className = "", ...props }, ref) => {
  const [bg, bgHover, dot, text] = getStatusColors(colorToEnum[color]);

  const themeStyle = {
    "--cmp-bg": bg,
    "--cmp-bg-hover": bgHover,
    "--cmp-dot": dot,
    "--cmp-color": text,
  } as React.CSSProperties;

  const classes = ["amp-status-indicator", className].filter(Boolean).join(" ");

  return (
    <span
      ref={ref}
      className={classes}
      style={themeStyle}
      role="status"
      title={label}
      {...props}
    >
      <span className="amp-status-indicator__dot" aria-hidden="true" />
      <span className="amp-status-indicator__label">{label}</span>
    </span>
  );
});

StatusIndicator.displayName = "StatusIndicator";
