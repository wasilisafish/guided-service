import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface BottomNavButton {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
}

interface BottomNavigationProps {
  buttons?: BottomNavButton[];
  primaryButton?: {
    label: string;
    onClick?: () => void;
  };
  showHelpButton?: boolean;
}

export function BottomNavigation({ buttons, primaryButton, showHelpButton = false }: BottomNavigationProps) {
  // If only primary button is provided, show centered layout
  if (primaryButton && (!buttons || buttons.length === 0)) {
    return (
      <div className="h-auto border-t border-neutral-gray-10 bg-white p-6 sticky bottom-0 flex justify-center">
        <Button
          onClick={primaryButton.onClick}
          className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold py-3 px-8 rounded-lg"
        >
          {primaryButton.label}
        </Button>
      </div>
    );
  }

  // Default layout with multiple buttons
  return (
    <div className="h-16 border-t border-neutral-gray-10 bg-white flex items-center justify-end px-6 gap-3 sticky bottom-0">
      {buttons?.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          className={
            button.variant === "outline"
              ? "border-action-secondary text-action-secondary hover:bg-neutral-gray-5 font-semibold text-sm"
              : "bg-action-primary hover:bg-action-primary/90 text-white font-semibold"
          }
        >
          {button.children || button.label}
        </Button>
      ))}
      {showHelpButton && (
        <button className="w-10 h-10 rounded-full bg-neutral-gray-10 flex items-center justify-center hover:bg-neutral-gray-30 transition-colors">
          <HelpCircle className="w-5 h-5 text-text-muted" />
        </button>
      )}
    </div>
  );
}
