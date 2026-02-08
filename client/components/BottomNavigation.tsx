import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavButton {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
}

interface BottomNavigationProps {
  buttons: BottomNavButton[];
  showHelpButton?: boolean;
}

export function BottomNavigation({ buttons, showHelpButton = true }: BottomNavigationProps) {
  return (
    <div className="h-16 border-t border-neutral-gray-10 bg-white flex items-center justify-end px-6 gap-3 sticky bottom-0">
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          className={
            button.variant === "outline"
              ? "border-action-secondary text-action-secondary hover:bg-neutral-gray-5 font-semibold text-sm"
              : "bg-action-primary hover:bg-action-primary/90 text-white font-semibold"
          }
        >
          {button.label}
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
