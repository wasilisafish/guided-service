import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopBreadcrumbProps {
  currentStep:
    | "establish-rapport"
    | "data-verification"
    | "quoting"
    | "proposal"
    | "finalize";
}

export function TopBreadcrumb({ currentStep }: TopBreadcrumbProps) {
  const navigate = useNavigate();

  const steps = [
    {
      id: "establish-rapport",
      label: "Establish rapport",
      path: "/comparison",
    },
    {
      id: "data-verification",
      label: "Data verification",
      path: "/verification",
    },
    { id: "quoting", label: "Quoting", path: "/quoting" },
    { id: "proposal", label: "Proposal", path: "/proposal" },
    { id: "finalize", label: "Finalize", path: "/finalize" },
  ];

  return (
    <div className="w-full h-16 border-b border-neutral-gray-10 bg-white flex items-center px-6 gap-3">
      <div className="flex items-center gap-1">
        <span className="text-sm">Lead: 676233</span>
        <ChevronDown className="w-4 h-4 text-text-muted" />
      </div>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-3">
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <button
            onClick={() => navigate(step.path)}
            className={`text-sm transition-colors ${
              currentStep === step.id
                ? "font-semibold text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            {step.label}
          </button>
        </div>
      ))}
      <div className="ml-auto flex items-center gap-4">
        <span className="text-sm text-text-muted">Re-shop in progress</span>
        <Button
          variant="outline"
          className="border-action-secondary text-action-secondary hover:bg-neutral-gray-5 text-sm font-semibold"
        >
          Schedule follow-up
          <ChevronDown className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
