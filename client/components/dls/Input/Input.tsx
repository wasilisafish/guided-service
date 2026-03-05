import React, { useState, useRef } from "react";
import { HelpCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./Input.css";

export type InputStatus = "default" | "hover" | "focus" | "error" | "disabled";
export type LabelLayout = "top" | "inline" | "none";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Visual status override (normally driven by interaction) */
  status?: InputStatus;
  /** Show error styling */
  error?: boolean;
  /** Hint / helper text below the field */
  hint?: string;
  /** Label text */
  label?: string;
  /** Label position: above the field, inline (left), or hidden */
  labelLayout?: LabelLayout;
  /** Show required asterisk next to label */
  required?: boolean;
  /** Show info icon next to label */
  showInfoIcon?: boolean;
  /** Callback when info icon is clicked */
  onInfoClick?: () => void;
  /** Icon rendered before the input text */
  iconLeft?: LucideIcon;
  /** First icon rendered after the input text */
  iconRight?: LucideIcon;
  /** Second trailing icon (e.g. dropdown chevron) */
  iconRightSecondary?: LucideIcon;
  /** Callback when iconRight is clicked */
  onIconRightClick?: () => void;
  /** Callback when iconRightSecondary is clicked */
  onIconRightSecondaryClick?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      status,
      error = false,
      hint,
      label,
      labelLayout = "none",
      required = false,
      showInfoIcon = false,
      onInfoClick,
      disabled = false,
      iconLeft: IconLeft,
      iconRight: IconRight,
      iconRightSecondary: IconRightSecondary,
      onIconRightClick,
      onIconRightSecondaryClick,
      className = "",
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || innerRef;

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [internalValue, setInternalValue] = useState(
      defaultValue?.toString() ?? "",
    );

    const controlledValue = value !== undefined ? value.toString() : undefined;
    const displayValue = controlledValue ?? internalValue;
    const isFilled = displayValue.length > 0;

    /* Derive effective status */
    let effectiveStatus: InputStatus;
    if (status) {
      effectiveStatus = status;
    } else if (disabled) {
      effectiveStatus = "disabled";
    } else if (error) {
      effectiveStatus = "error";
    } else if (isFocused) {
      effectiveStatus = "focus";
    } else if (isHovered) {
      effectiveStatus = "hover";
    } else {
      effectiveStatus = "default";
    }

    const fieldClasses = [
      "amp-input",
      `amp-input--${effectiveStatus}`,
      isFilled ? "amp-input--filled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const outerClasses = [
      "amp-input-outer",
      label && labelLayout !== "none" ? `amp-input-outer--${labelLayout}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (controlledValue === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    /* Label element */
    const labelEl =
      label && labelLayout !== "none" ? (
        <div className={`amp-input-label amp-input-label--${labelLayout}`}>
          <span className="amp-input-label__text">{label}</span>
          {required && <span className="amp-input-label__required">*</span>}
          {showInfoIcon && (
            <button
              type="button"
              className="amp-input-label__info"
              tabIndex={-1}
              onClick={onInfoClick}
              aria-label="More information"
            >
              <HelpCircle size={16} />
            </button>
          )}
        </div>
      ) : null;

    return (
      <div className={outerClasses}>
        {labelEl}

        <div className="amp-input-wrapper">
          <div
            className={fieldClasses}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => inputRef.current?.focus()}
          >
            {IconLeft && (
              <IconLeft className="amp-input__icon amp-input__icon--left" size={20} />
            )}

            <input
              ref={inputRef}
              className="amp-input__native"
              disabled={disabled}
              value={controlledValue}
              defaultValue={controlledValue === undefined ? defaultValue : undefined}
              onChange={handleChange}
              onFocus={(e) => {
                setIsFocused(true);
                props.onFocus?.(e);
              }}
              onBlur={(e) => {
                setIsFocused(false);
                props.onBlur?.(e);
              }}
              {...props}
            />

            {IconRight && (
              <button
                type="button"
                className="amp-input__icon-btn"
                tabIndex={-1}
                disabled={disabled}
                onClick={(e) => {
                  e.stopPropagation();
                  onIconRightClick?.();
                }}
              >
                <IconRight className="amp-input__icon amp-input__icon--right" size={20} />
              </button>
            )}

            {IconRightSecondary && (
              <button
                type="button"
                className="amp-input__icon-btn"
                tabIndex={-1}
                disabled={disabled}
                onClick={(e) => {
                  e.stopPropagation();
                  onIconRightSecondaryClick?.();
                }}
              >
                <IconRightSecondary
                  className="amp-input__icon amp-input__icon--right-secondary"
                  size={16}
                />
              </button>
            )}
          </div>

          {hint && (
            <p
              className={`amp-input__hint${error || effectiveStatus === "error" ? " amp-input__hint--error" : ""}`}
            >
              {hint}
            </p>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
