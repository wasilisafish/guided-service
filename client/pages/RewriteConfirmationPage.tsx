import { useNavigate } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RightSidebarPanel } from "@/components/RightSidebarPanel";

export default function RewriteConfirmationPage() {
  const navigate = useNavigate();
  const oldPremium = 5710;
  const newPremium = 1669;
  const delta = newPremium - oldPremium;
  const deltaPercent = Math.round((delta / oldPremium) * 100);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            {/* Merged card: success + carrier + premiums + reason + flags */}
            <Card className="border border-neutral-gray-10 rounded-lg p-6 bg-white mb-8">
              <div className="flex items-start gap-2 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h1 className="text-xl font-bold">Policy Rewritten Successfully</h1>
                  <p className="text-sm text-text-muted">
                    Carrier: Foremost · Effective: 03/23/2026
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-base mb-6 pb-6 border-b border-neutral-gray-10">
                <div>
                  <span className="text-text-muted">Old Premium: </span>
                  <span className="font-bold text-neutral-gray-80">${oldPremium.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-text-muted">New Premium: </span>
                  <span className="font-bold text-neutral-gray-80">${newPremium.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-neutral-gray-80">Δ </span>
                  <span className="font-bold text-green-600">
                    ${Math.abs(delta).toLocaleString()} ({deltaPercent}%)
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-base mb-2">Reason for rewrite:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>price increased at renewal</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Risk & Compliance Flags
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Plumbing 25 years – carrier may request inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>1931 construction – underwriting review possible</span>
                  </li>
                </ul>
              </div>
            </Card>

            <div className="flex gap-3">
              <Button
                onClick={() => navigate("/final-look")}
                variant="outline"
                className="border-action-secondary text-action-secondary"
              >
                Back to Final Look
              </Button>
              <Button
                onClick={() => navigate("/")}
                className="bg-action-primary hover:bg-action-primary/90 text-white"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <RightSidebarPanel activeItem="info" />
    </div>
  );
}
