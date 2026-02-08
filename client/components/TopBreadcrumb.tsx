import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopBreadcrumbProps {
  currentStep: "establish-rapport" | "data-verification" | "quoting" | "proposal" | "finalize";
}

export function TopBreadcrumb({ currentStep }: TopBreadcrumbProps) {
  const steps = [
    { id: "establish-rapport", label: "Establish rapport" },
    { id: "data-verification", label: "Data verification" },
    { id: "quoting", label: "Quoting" },
    { id: "proposal", label: "Proposal" },
    { id: "finalize", label: "Finalize" },
  ];

  return (
    <div className="h-16 border-b border-neutral-gray-10 bg-white flex items-center px-6 gap-3">
      <div className="flex items-center gap-1">
        <span className="text-sm">Lead: 676233</span>
        <ChevronDown className="w-4 h-4 text-text-muted" />
      </div>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-3">
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <span
            className={`text-sm ${
              currentStep === step.id
                ? "font-semibold"
                : "text-text-muted"
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
      <div className="flex-1" />
      <span className="text-sm text-text-muted">Re-shop in progress</span>
      <Button
        variant="outline"
        className="border-action-secondary text-action-secondary hover:bg-neutral-gray-5 text-sm font-semibold"
      >
        Schedule follow-up
        <ChevronDown className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}
