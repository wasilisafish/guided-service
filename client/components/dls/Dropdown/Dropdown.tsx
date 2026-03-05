import React, { useState, useRef, useEffect, useCallback } from "react";
import { Check, ChevronDown, Info } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./Dropdown.css";

/* ======================================================================
   Types
   ====================================================================== */

export type DropdownSize = "md" | "lg";

export interface DropdownOption {
  /** Unique value for the option */
  value: string;
  /** Display label */
  label: string;
  /** Whether this option is disabled */
  disabled?: boolean;
  /** Optional icon shown before label */
  iconLeft?: LucideIcon;
  /** Optional icon shown after label */
  iconRight?: LucideIcon;
}

export interface DropdownProps {
  /** Array of selectable options */
  options: DropdownOption[];
  /** Currently selected value(s) */
  value?: string | string[];
  /** Callback when selection changes */
  onChange?: (value: string | string[]) => void;
  /** Allow multiple selections */
  multiple?: boolean;
  /** Placeholder text when nothing is selected */
  placeholder?: string;
  /** Dropdown title shown at the top of the menu */
  title?: string;
  /** Size variant */
  size?: DropdownSize;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Optional label */
  label?: string;
  /** Label layout */
  labelLayout?: "none" | "top" | "inline";
  /** Show required asterisk */
  required?: boolean;
  /** Show info icon */
  showInfoIcon?: boolean;
  /** Callback for info icon click */
  onInfoClick?: () => void;
  /** Hint text below the field */
  hint?: string;
  /** Additional className */
  className?: string;
}

/* ======================================================================
   Component
   ====================================================================== */

export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      options,
      value,
      onChange,
      multiple = false,
      placeholder = "Select...",
      title,
      size = "md",
      disabled = false,
      error = false,
      label,
      labelLayout = "none",
      required = false,
      showInfoIcon = false,
      onInfoClick,
      hint,
      className = "",
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const setTriggerRef = useCallback(
      (el: HTMLButtonElement | null) => {
        triggerRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      },
      [ref],
    );

    /* Normalise value to array */
    const selectedValues: string[] = Array.isArray(value)
      ? value
      : value !== undefined && value !== ""
        ? [value]
        : [];

    const isSelected = (v: string) => selectedValues.includes(v);

    /* Display text */
    const displayText = (() => {
      if (selectedValues.length === 0) return "";
      if (selectedValues.length === 1) {
        const opt = options.find((o) => o.value === selectedValues[0]);
        return opt ? opt.label : selectedValues[0];
      }
      return `${selectedValues.length} selected`;
    })();

    const isFilled = displayText.length > 0;
    const hasAnyIcons = options.some((o) => o.iconLeft);

    /* Effective visual status */
    let triggerStatus: string;
    if (disabled) {
      triggerStatus = "disabled";
    } else if (error) {
      triggerStatus = "error";
    } else if (isFocused || isOpen) {
      triggerStatus = "focus";
    } else if (isHovered) {
      triggerStatus = "hover";
    } else {
      triggerStatus = "default";
    }

    /* Toggle / select */
    const toggleOpen = () => {
      if (disabled) return;
      setIsOpen((prev) => !prev);
    };

    const handleSelect = (optValue: string) => {
      if (!onChange) return;
      if (multiple) {
        const next = isSelected(optValue)
          ? selectedValues.filter((v) => v !== optValue)
          : [...selectedValues, optValue];
        onChange(next);
      } else {
        onChange(optValue);
        setIsOpen(false);
      }
    };

    /* Close on outside click */
    useEffect(() => {
      const onClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", onClickOutside);
      }
      return () => document.removeEventListener("mousedown", onClickOutside);
    }, [isOpen]);

    /* Keyboard */
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
          triggerRef.current?.focus();
        }
        if (e.key === "Enter" || e.key === " ") {
          if (!isOpen) {
            e.preventDefault();
            setIsOpen(true);
          }
        }
      },
      [isOpen],
    );

    /* Classes */
    const outerClasses = [
      "amp-dropdown-outer",
      label && labelLayout !== "none"
        ? `amp-dropdown-outer--${labelLayout}`
        : "",
    ]
      .filter(Boolean)
      .join(" ");

    const triggerClasses = [
      "amp-dropdown-trigger",
      `amp-dropdown-trigger--${triggerStatus}`,
      `amp-dropdown-trigger--${size}`,
      isFilled ? "amp-dropdown-trigger--filled" : "",
      isOpen ? "amp-dropdown-trigger--open" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    /* Label element */
    const labelEl =
      label && labelLayout !== "none" ? (
        <div
          className={`amp-input-label amp-input-label--${labelLayout}`}
        >
          <span className="amp-input-label__text">{label}</span>
          {required && (
            <span className="amp-input-label__required">*</span>
          )}
          {showInfoIcon && (
            <button
              type="button"
              className="amp-input-label__info"
              tabIndex={-1}
              onClick={onInfoClick}
              aria-label="More information"
            >
              <Info size={16} />
            </button>
          )}
        </div>
      ) : null;

    return (
      <div className={outerClasses} ref={containerRef}>
        {labelEl}

        <div className="amp-dropdown-wrapper">
          {/* Trigger (looks like Input field) */}
          <button
            ref={setTriggerRef}
            type="button"
            className={triggerClasses}
            onClick={toggleOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              /* delay close so menu click registers */
            }}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <span
              className={`amp-dropdown-trigger__text ${isFilled ? "" : "amp-dropdown-trigger__placeholder"}`}
            >
              {isFilled ? displayText : placeholder}
            </span>
            <ChevronDown className="amp-dropdown-trigger__chevron" size={16} />
          </button>

          {/* Hint */}
          {hint && (
            <p
              className={`amp-input__hint${error ? " amp-input__hint--error" : ""}`}
            >
              {hint}
            </p>
          )}

          {/* Menu */}
          {isOpen && (
            <div className="amp-dropdown-menu" role="listbox">
              {title && (
                <div className="amp-dropdown-menu__title">{title}</div>
              )}
              <div className="amp-dropdown-menu__list">
                {options.map((opt) => {
                  const itemSelected = isSelected(opt.value);
                  const itemDisabled = opt.disabled || false;

                  const itemState = itemDisabled
                    ? "disabled"
                    : "default";

                  const itemClasses = [
                    "amp-dropdown-item",
                    `amp-dropdown-item--${itemState}`,
                    `amp-dropdown-item--${size}`,
                    itemSelected ? "amp-dropdown-item--selected" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  const IconL = opt.iconLeft;
                  const IconR = opt.iconRight;

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
                      {/* Left slot: check or icon — hidden when no options use icons and item is unselected */}
                      {(hasAnyIcons || itemSelected) && (
                        <span className="amp-dropdown-item__left">
                          {itemSelected ? (
                            <Check
                              className="amp-dropdown-item__check"
                              size={16}
                            />
                          ) : IconL ? (
                            <IconL
                              className="amp-dropdown-item__icon"
                              size={16}
                            />
                          ) : (
                            <span className="amp-dropdown-item__icon-placeholder" />
                          )}
                        </span>
                      )}

                      <span className="amp-dropdown-item__label">
                        {opt.label}
                      </span>

                      {/* Right icon */}
                      {IconR && (
                        <IconR
                          className="amp-dropdown-item__icon amp-dropdown-item__icon--right"
                          size={size === "lg" ? 24 : 16}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";
