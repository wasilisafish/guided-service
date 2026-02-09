import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopBreadcrumbProps {
  currentStep:
    | "establish-rapport"
    | "data-verification"
    | "quoting"
    | "proposal"
    | "finalize";
}

const STEPS = [
  { id: "establish-rapport" as const, label: "Establish rapport", path: "/comparison" },
  { id: "data-verification" as const, label: "Data verification", path: "/verification" },
  { id: "quoting" as const, label: "Quoting", path: "/quoting" },
  { id: "proposal" as const, label: "Proposal", path: "/proposal" },
  { id: "finalize" as const, label: "Finalize", path: "/finalize" },
];

export function TopBreadcrumb({ currentStep }: TopBreadcrumbProps) {
  const navigate = useNavigate();
  const current = STEPS.find((s) => s.id === currentStep);

  return (
    <div className="w-full min-w-0 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-1 shrink-0">
        <span className="text-sm whitespace-nowrap">Lead: 676233</span>
        <ChevronDown className="w-4 h-4 text-text-muted shrink-0" />
      </div>

      {/* Small screens: current step + [..] dropdown */}
      <div className="flex items-center gap-2 shrink-0 md:hidden">
        <ChevronRight className="w-4 h-4 text-neutral-gray-30 shrink-0" />
        <span className="text-sm font-semibold text-text whitespace-nowrap">
          {current?.label ?? currentStep}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 rounded hover:bg-neutral-gray-5 text-neutral-gray-60 hover:text-text transition-colors shrink-0"
              aria-label="All steps"
            >
              <span className="text-sm font-medium">[..]</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[180px]">
            {STEPS.map((step) => (
              <DropdownMenuItem
                key={step.id}
                onClick={() => navigate(step.path)}
                className={step.id === currentStep ? "bg-neutral-gray-5 font-semibold" : ""}
              >
                {step.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Larger screens: full step list */}
      <div className="hidden md:flex items-center gap-3 shrink-0 flex-wrap">
        {STEPS.map((step) => (
          <div key={step.id} className="flex items-center gap-3 shrink-0">
            <ChevronRight className="w-4 h-4 text-neutral-gray-30 shrink-0" />
            <button
              type="button"
              onClick={() => navigate(step.path)}
              className={`text-sm transition-colors whitespace-nowrap ${
                currentStep === step.id
                  ? "font-semibold text-text"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {step.label}
            </button>
          </div>
        ))}
      </div>

      <div className="ml-auto shrink-0" />
    </div>
  );
}
