import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import {
  TabState,
  getTabColors,
} from "./tabTheme";
import "./Tab.css";

/* =========================================================================
   Tab Trigger
   ========================================================================= */

export type TabOrientationProp = "horizontal" | "vertical";

export interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Tab label text */
  label: string;
  /** Visual orientation */
  orientation?: TabOrientationProp;
  /** Whether this tab is the active/selected tab */
  active?: boolean;
  /** Leading icon */
  icon?: LucideIcon;
  /** Show leading icon */
  showIcon?: boolean;
  /** Show dropdown chevron (horizontal only) */
  showDropdown?: boolean;
  /** Additional className */
  className?: string;
}

function deriveState(
  active: boolean,
  disabled: boolean,
  hovered: boolean
): TabState {
  if (disabled) return TabState.Disabled;
  if (active) return TabState.Active;
  if (hovered) return TabState.Hover;
  return TabState.Default;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      label,
      orientation = "horizontal",
      active = false,
      icon: IconComponent,
      showIcon = true,
      showDropdown = false,
      className = "",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);

    const state = deriveState(active, !!disabled, hovered);
    const [bg, text, icon, indicator] = getTabColors(state);

    const themeStyle = {
      "--tab-bg": bg,
      "--tab-color": text,
      "--tab-icon": icon,
      "--tab-indicator": indicator,
    } as React.CSSProperties;

    const isHorizontal = orientation === "horizontal";
    const orientClass = isHorizontal
      ? "amp-tab--horizontal"
      : "amp-tab--vertical";

    const classes = ["amp-tab", orientClass, className]
      .filter(Boolean)
      .join(" ");

    const iconSize = isHorizontal ? 16 : 20;

    return (
      <button
        ref={ref}
        className={classes}
        style={themeStyle}
        role="tab"
        aria-selected={active}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {/* Vertical: indicator comes first (left side) */}
        {!isHorizontal && (
          <span className="amp-tab__indicator" aria-hidden="true" />
        )}

        <span className="amp-tab__content">
          {showIcon && IconComponent && (
            <span className="amp-tab__icon">
              <IconComponent size={iconSize} />
            </span>
          )}
          <span className="amp-tab__label">{label}</span>
          {isHorizontal && showDropdown && (
            <span className="amp-tab__chevron" aria-hidden="true">
              <ChevronDown size={12} />
            </span>
          )}
        </span>

        {/* Horizontal: indicator at bottom */}
        {isHorizontal && (
          <span className="amp-tab__indicator" aria-hidden="true" />
        )}
      </button>
    );
  }
);

Tab.displayName = "Tab";

/* =========================================================================
   Tab List — container
   ========================================================================= */

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the tab list */
  orientation?: TabOrientationProp;
  /** Additional className */
  className?: string;
  children: React.ReactNode;
}

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ orientation = "horizontal", className = "", children, ...props }, ref) => {
    const orientClass =
      orientation === "horizontal"
        ? "amp-tab-list--horizontal"
        : "amp-tab-list--vertical";

    const classes = ["amp-tab-list", orientClass, className]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        className={classes}
        role="tablist"
        aria-orientation={orientation}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabList.displayName = "TabList";
