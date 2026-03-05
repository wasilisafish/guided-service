import React from "react";
import "./DataToolbar.css";

export interface DataToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content — typically ToolbarButton instances */
  children: React.ReactNode;
}

/**
 * DataToolbar — horizontal container for ToolbarButton components.
 * Renders a flex row with consistent spacing between toolbar actions.
 *
 * Usage:
 * ```tsx
 * <DataToolbar>
 *   <ToolbarButton label="Filters" />
 *   <ToolbarButton label="Sort" />
 *   <ToolbarButton label="Group" />
 * </DataToolbar>
 * ```
 */
export const DataToolbar = React.forwardRef<HTMLDivElement, DataToolbarProps>(
  ({ children, className = "", ...props }, ref) => {
    const classes = ["amp-data-toolbar", className].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classes} role="toolbar" {...props}>
        {children}
      </div>
    );
  }
);

DataToolbar.displayName = "DataToolbar";
