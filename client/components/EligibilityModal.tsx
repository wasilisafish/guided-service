import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EligibilityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  address?: string;
}

interface EligibilityQuestion {
  id: string;
  question: string;
  answer: boolean | null;
}

export function EligibilityModal({ open, onOpenChange, address = "2000 Melrose Ave, Columbus, Ohio" }: EligibilityModalProps) {
  const [questions, setQuestions] = useState<EligibilityQuestion[]>([
    { id: "claims", question: "Do you have any open claims?", answer: null },
    { id: "business", question: "Do you run a business out of your home?", answer: null },
    { id: "pets", question: "Do you have any pets?", answer: null },
    { id: "livestock", question: "Do you have any livestock or hooved animals on the property?", answer: null },
    { id: "pool", question: "Do you have a pool?", answer: null },
    { id: "trampoline", question: "Do you have a trampoline?", answer: null },
  ]);

  const handleAnswer = (id: string, answer: boolean) => {
    setQuestions(prev =>
      prev.map(q => (q.id === id ? { ...q, answer } : q))
    );
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
    console.log("Confirmed:", questions);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b border-neutral-gray-10">
          <DialogTitle className="text-lg font-bold">Confirm eligibility</DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 py-6 space-y-6 max-h-[600px] overflow-y-auto">
          {/* Primary Residence */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-base">Primary residence</h3>
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-action-primary">
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-action-primary">
                  <path d="M8 2L2 6V14H6V10H10V14H14V6L8 2Z" fill="currentColor"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-red-500">
                  <rect x="2" y="2" width="12" height="12" rx="2" fill="currentColor"/>
                  <text x="8" y="11" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">R</text>
                </svg>
              </div>
            </div>
            <p className="text-sm text-text-muted">{address}</p>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.id} className="flex items-center justify-between py-3 border-b border-neutral-gray-10">
                <span className="text-base">{q.question}</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleAnswer(q.id, true)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                      q.answer === true
                        ? "bg-action-primary text-white"
                        : "hover:bg-neutral-gray-5"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={q.answer === true ? "text-white" : "text-success"}
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-medium">Yes</span>
                  </button>
                  <button
                    onClick={() => handleAnswer(q.id, false)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                      q.answer === false
                        ? "bg-action-primary text-white"
                        : "hover:bg-neutral-gray-5"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={q.answer === false ? "text-white" : "text-text-muted"}
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <line
                        x1="8"
                        y1="8"
                        x2="14"
                        y2="8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-sm font-medium">No</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-gray-10 flex items-center justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-action-secondary text-action-secondary hover:bg-neutral-gray-5 font-semibold"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
