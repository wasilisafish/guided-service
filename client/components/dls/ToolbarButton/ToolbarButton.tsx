import React, { useState, useRef, useEffect, useCallback } from "react";
import type { LucideIcon } from "lucide-react";
import { Filter, ChevronDown, Check } from "lucide-react";
import {
  ToolbarButtonState,
  toolbarButtonTheme,
  countBadgeColors,
  type ThemePhase,
} from "./toolbarButtonTheme";
import "./ToolbarButton.css";

export interface ToolbarButtonOption {
  /** Unique value for the option */
  value: string;
  /** Display label */
  label: string;
  /** Whether this option is disabled */
  disabled?: boolean;
}

export interface ToolbarButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "onChange"
  > {
  /** Button label text */
  label: string;
  /** Optional value shown after the label (e.g. "Date ascending") */
  value?: string;
  /** Active filter count — shows a badge pill when > 0 */
  count?: number;
  /** Whether a filter/selection is currently active */
  active?: boolean;
  /** Whether the associated dropdown is open (controlled) */
  open?: boolean;
  /** Show the trailing chevron icon */
  showChevron?: boolean;
  /** Leading icon component (defaults to Filter) */
  iconLeading?: LucideIcon;
  /** Hide the leading icon */
  hideIcon?: boolean;
  /** Dropdown options — when provided, clicking the button opens a menu */
  options?: ToolbarButtonOption[];
  /** Currently selected option value(s) */
  selected?: string | string[];
  /** Callback when an option is selected */
  onChange?: (value: string) => void;
  /** Allow multiple selections */
  multiple?: boolean;
  /** Optional title shown at the top of the dropdown menu */
  menuTitle?: string;
}

function resolveState(
  active: boolean,
  open: boolean,
  disabled: boolean
): ToolbarButtonState {
  if (disabled) return ToolbarButtonState.Disabled;
  if (open) return ToolbarButtonState.Open;
  if (active) return ToolbarButtonState.Active;
  return ToolbarButtonState.Default;
}

function getThemeColors(
  state: ToolbarButtonState,
  phase: ThemePhase
): [string, string, string] {
  return toolbarButtonTheme[state][phase];
}

export const ToolbarButton = React.forwardRef<
  HTMLButtonElement,
  ToolbarButtonProps
>(
  (
    {
      label,
      value,
      count,
      active = false,
      open: openProp,
      disabled = false,
      showChevron = true,
      iconLeading: IconLeading = Filter,
      hideIcon = false,
      options,
      selected,
      onChange,
      multiple = false,
      menuTitle,
      className = "",
      onClick,
      ...props
    },
    ref
  ) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const setBtnRef = useCallback(
      (el: HTMLButtonElement | null) => {
        btnRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref)
          (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      },
      [ref]
    );

    const hasMenu = options && options.length > 0;
    const isOpen = hasMenu ? menuOpen : (openProp ?? false);

    /* Normalise selected to array */
    const selectedValues: string[] = Array.isArray(selected)
      ? selected
      : selected !== undefined && selected !== ""
        ? [selected]
        : [];

    const isItemSelected = (v: string) => selectedValues.includes(v);

    /* Close on outside click */
    useEffect(() => {
      if (!menuOpen) return;
      const onClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setMenuOpen(false);
        }
      };
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }, [menuOpen]);

    /* Keyboard */
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          btnRef.current?.focus();
        }
      },
      [menuOpen]
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (hasMenu) {
        setMenuOpen((prev) => !prev);
      }
      onClick?.(e);
    };

    const handleSelect = (optValue: string) => {
      onChange?.(optValue);
      if (!multiple) {
        setMenuOpen(false);
      }
    };

    const state = resolveState(active, isOpen, disabled);
    const [bg, border, text] = getThemeColors(state, "base");
    const [bgHover, borderHover, textHover] =
      state !== ToolbarButtonState.Disabled
        ? getThemeColors(state, "hover")
        : [bg, border, text];

    const themeStyle = {
      "--tb-bg": bg,
      "--tb-border": border,
      "--tb-color": text,
      "--tb-bg-hover": bgHover,
      "--tb-border-hover": borderHover,
      "--tb-color-hover": textHover,
      "--tb-badge-bg": countBadgeColors.bg,
      "--tb-badge-color": countBadgeColors.text,
    } as React.CSSProperties;

    const showCount = typeof count === "number" && count > 0;

    const classes = [
      "amp-toolbar-btn",
      active ? "amp-toolbar-btn--active" : "",
      isOpen ? "amp-toolbar-btn--open" : "",
      disabled ? "amp-toolbar-btn--disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const button = (
      <button
        ref={setBtnRef}
        type="button"
        className={classes}
        style={themeStyle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup={hasMenu ? "listbox" : undefined}
        aria-pressed={active}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {!hideIcon && <IconLeading className="amp-toolbar-btn__icon" size={16} />}

        <span className="amp-toolbar-btn__label">{label}</span>

        {value && (
          <span className="amp-toolbar-btn__value">{value}</span>
        )}

        {showCount && (
          <span className="amp-toolbar-btn__badge">{count}</span>
        )}

        {showChevron && (
          <ChevronDown className="amp-toolbar-btn__chevron" size={16} />
        )}
      </button>
    );

    /* No dropdown — return just the button */
    if (!hasMenu) return button;

    /* With dropdown — wrap in positioned container */
    return (
      <div className="amp-toolbar-btn-wrapper" ref={containerRef}>
        {button}
        {menuOpen && (
          <div className="amp-dropdown-menu" role="listbox">
            {menuTitle && (
              <div className="amp-dropdown-menu__title">{menuTitle}</div>
            )}
            <div className="amp-dropdown-menu__list">
              {options.map((opt) => {
                const itemSelected = isItemSelected(opt.value);
                const itemDisabled = opt.disabled ?? false;
                const itemClasses = [
                  "amp-dropdown-item",
                  itemDisabled ? "amp-dropdown-item--disabled" : "amp-dropdown-item--default",
                  "amp-dropdown-item--md",
                  itemSelected ? "amp-dropdown-item--selected" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={itemSelected}
                    className={itemClasses}
                    disabled={itemDisabled}
                    onClick={() => handleSelect(opt.value)}
                  >
                    {itemSelected && (
                      <span className="amp-dropdown-item__left">
                        <Check className="amp-dropdown-item__check" size={16} />
                      </span>
                    )}
                    <span className="amp-dropdown-item__label">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
);

ToolbarButton.displayName = "ToolbarButton";
