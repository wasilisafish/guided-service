import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  User,
  Shield,
  Search,
  DollarSign,
  ClipboardCheck,
  Clock,
  Paperclip,
  HelpCircle,
  Grid3X3,
  Mail,
  Phone,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TopBreadcrumb } from "@/components/TopBreadcrumb";
import { RightSidebarPanel } from "@/components/RightSidebarPanel";

export default function ComparisonPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Left Navigation Sidebar */}
      <div
        className={`${sidebarOpen ? "w-[60px]" : "hidden"} bg-gradient-to-b from-[#330E80] to-[#156EEA] flex-shrink-0 flex flex-col items-center py-4`}
      >
        {/* Logo */}
        <div className="mb-8">
          <svg
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1541 4.60894C21.2376 4.54606 21.3328 4.5767 21.4509 4.69556L35.4028 18.738C35.6512 18.988 35.763 19.2809 35.5145 19.531L28.7282 26.3614C28.4798 26.6114 28.077 26.6114 27.8286 26.3614L20.9715 19.4597C20.7595 19.2463 20.7281 18.9152 20.8789 18.6609C23.9571 13.4703 22.5796 7.8946 21.104 4.92219C21.0308 4.77479 21.0704 4.67194 21.1541 4.60894Z"
              fill="#408DF6"
            />
            <path
              d="M19.4192 20.827C19.669 20.5525 19.9902 20.6407 20.2573 20.9095L26.7508 27.4452C26.9992 27.6952 27.111 27.9881 26.8626 28.2382L20.3307 34.8125C20.0823 35.0625 19.6795 35.0625 19.4311 34.8125L11.1912 26.5191C10.9948 26.3214 10.9648 26.0494 11.046 25.8229C11.1269 25.5972 11.322 25.4039 11.5906 25.3587C15.0769 24.7723 18.0216 22.3628 19.4192 20.827Z"
              fill="#66A4F7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6954 0.210833C16.6022 0.210833 21.3907 5.03041 21.3907 10.9757C21.3907 16.9209 16.6022 21.7405 10.6954 21.7405C4.78848 21.7405 -2.09311e-07 16.9209 -4.67509e-07 10.9757C-7.25707e-07 5.03041 4.78848 0.210834 10.6954 0.210833Z"
              fill="#EA4D72"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.305 -5.93705e-06C35.2119 -6.19693e-06 40.0004 4.81957 40.0004 10.7648C40.0004 13.3368 39.1038 15.6988 37.6084 17.5503C37.3239 17.9026 36.81 17.9066 36.5036 17.5982L22.5157 3.5195C22.2093 3.21111 22.2133 2.69383 22.5633 2.40747C24.4029 0.902328 26.7496 -5.82463e-06 29.305 -5.93705e-06Z"
              fill="#1E74EB"
            />
          </svg>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col gap-2 w-full">
          <NavItem icon={<Search className="w-5 h-5" />} label="Search" />
          <div className="w-[52px] h-px bg-white/20 mx-auto my-2" />
          <NavItem icon={<DollarSign className="w-5 h-5" />} label="Sales" />
          <NavItem
            icon={<ClipboardCheck className="w-5 h-5" />}
            label="Tasks"
          />
          <NavItem icon={<Shield className="w-5 h-5" />} label="Policies" />
          <NavItem icon={<User className="w-5 h-5" />} label="People" />
          <NavItem icon={<Clock className="w-5 h-5" />} label="Recent" />
        </nav>

        {/* Bottom Items */}
        <div className="flex flex-col gap-4 items-center">
          <button className="w-12 h-12 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
            <Grid3X3 className="w-5 h-5 text-white" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 relative">
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#6EE4D6] border-2 border-[#166DE8] rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar with User Info and Breadcrumb */}
        <div className="min-h-16 border-b border-neutral-gray-10 bg-white flex flex-wrap items-center px-6 gap-3 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-6 h-6 flex items-center justify-center hover:bg-neutral-gray-5 rounded transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2V14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
                stroke="#334155"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-8 h-8 flex items-center justify-center hover:bg-neutral-gray-5 rounded transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-lg font-semibold -tracking-[0.3px] hover:text-action-primary transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Elliot McMahon
          </button>
          <Badge className="rounded px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap shrink-0 bg-neutral-gray-10 text-neutral-gray-80 border border-neutral-gray-20">
            Roundpoint
          </Badge>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30 shrink-0" />
          <div className="min-w-0 flex-1">
            <TopBreadcrumb currentStep="establish-rapport" />
          </div>
          <Badge className="rounded px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap shrink-0 bg-action-primary/10 text-action-primary border border-action-primary/30">
            Re-shop in progress
          </Badge>
          <Button
            variant="outline"
            className="border-action-secondary text-action-secondary hover:bg-action-secondary/5 rounded px-4 py-2 text-sm font-semibold h-9 whitespace-nowrap shrink-0"
            onClick={() => {}}
          >
            Schedule follow-up
            <Plus className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Content Panel */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-8 space-y-8">
              {/* 1. Sticky Summary Bar */}
              <div className="sticky top-0 z-10 -mx-8 -mt-8 px-8 pt-8 pb-4 bg-gradient-to-b from-white via-white to-transparent">
                <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200/60">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-neutral-gray-80">
                      Premium ↑ $862 (+18%)
                    </span>
                  </div>
                  <span className="text-text-muted">|</span>
                  <span className="text-sm text-neutral-gray-80">
                    Primary cause: Coverage adjustments + roof age
                  </span>
                </div>
              </div>

              {/* 2. Page Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-gray-80 mb-2">
                  Why did the premium increase?
                </h1>
                <p className="text-base text-text-muted">
                  Premium increased from $4,848 → $5,710. Here are the main drivers.
                </p>
              </div>

              {/* 3. Primary Drivers */}
              <Card className="border border-neutral-gray-10 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="font-bold text-lg mb-4">Primary drivers</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-action-primary mb-1">
                      Coverage adjustments (+$520)
                    </div>
                    <ul className="list-disc list-inside text-sm text-neutral-gray-80 space-y-1">
                      <li>Dwelling +12%</li>
                      <li>Personal property +12%</li>
                      <li>Water backup +50%</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-action-primary mb-1">
                      Risk factors (+$290)
                    </div>
                    <ul className="list-disc list-inside text-sm text-neutral-gray-80 space-y-1">
                      <li>Roof age: 16 years</li>
                      <li>1 prior claim</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-action-primary mb-1">
                      Market inflation adjustment (+$52)
                    </div>
                  </div>
                </div>
              </Card>

              {/* 4. Impact Breakdown (Merged Log of Changes + Risk Factors) */}
              <Card className="border border-neutral-gray-10 rounded-lg overflow-hidden bg-white shadow-sm">
                <h3 className="font-bold text-lg p-4 pb-0">Impact breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-gray-10 bg-neutral-gray-5">
                        <th className="text-left py-3 px-4 font-semibold">Driver</th>
                        <th className="text-left py-3 px-4 font-semibold">Type</th>
                        <th className="text-left py-3 px-4 font-semibold">Impact</th>
                        <th className="text-left py-3 px-4 font-semibold">Controllable</th>
                        <th className="text-left py-3 px-4 font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-gray-10">
                        <td className="py-3 px-4 font-medium">Dwelling +12%</td>
                        <td className="py-3 px-4">Coverage</td>
                        <td className="py-3 px-4">High</td>
                        <td className="py-3 px-4">Yes</td>
                        <td className="py-3 px-4 text-text-muted">Inflation guard</td>
                      </tr>
                      <tr className="border-b border-neutral-gray-10">
                        <td className="py-3 px-4 font-medium">Water backup +50%</td>
                        <td className="py-3 px-4">Coverage</td>
                        <td className="py-3 px-4">Medium</td>
                        <td className="py-3 px-4">Yes</td>
                        <td className="py-3 px-4 text-text-muted">Increased limit</td>
                      </tr>
                      <tr className="border-b border-neutral-gray-10">
                        <td className="py-3 px-4 font-medium">Personal property +12%</td>
                        <td className="py-3 px-4">Coverage</td>
                        <td className="py-3 px-4">Medium</td>
                        <td className="py-3 px-4">Yes</td>
                        <td className="py-3 px-4 text-text-muted">Inflation guard</td>
                      </tr>
                      <tr className="border-b border-neutral-gray-10">
                        <td className="py-3 px-4 font-medium">Roof age 16 yrs</td>
                        <td className="py-3 px-4">Risk</td>
                        <td className="py-3 px-4">High</td>
                        <td className="py-3 px-4">No</td>
                        <td className="py-3 px-4 text-text-muted">Carrier sensitivity</td>
                      </tr>
                      <tr className="border-b border-neutral-gray-10">
                        <td className="py-3 px-4 font-medium">1 Claim</td>
                        <td className="py-3 px-4">Risk</td>
                        <td className="py-3 px-4">Medium</td>
                        <td className="py-3 px-4">No</td>
                        <td className="py-3 px-4 text-text-muted">Affects renewal tier</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Market inflation</td>
                        <td className="py-3 px-4">Market</td>
                        <td className="py-3 px-4">Medium</td>
                        <td className="py-3 px-4">No</td>
                        <td className="py-3 px-4 text-text-muted">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* 5. Fairness Assessment */}
              <Card className="border border-neutral-gray-10 rounded-lg p-6 bg-white shadow-sm border-l-4 border-l-success">
                <h3 className="font-bold text-lg mb-2">Is this increase fair?</h3>
                <div className="flex items-center gap-2 text-success font-semibold">
                  <span>✅</span>
                  <span>Within expected range for risk profile</span>
                </div>
                <p className="text-sm text-text-muted mt-2">
                  System assessment: Given the coverage increases and roof age, this 18% renewal is in line with typical market movement.
                </p>
              </Card>

              {/* 6. Collapsible Details */}
              <div className="border border-neutral-gray-10 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setDetailsExpanded(!detailsExpanded)}
                  className="w-full flex items-center justify-between p-4 hover:bg-neutral-gray-5 transition-colors text-left"
                >
                  <span className="font-semibold">Policy details</span>
                  {detailsExpanded ? (
                    <ChevronUp className="w-5 h-5 text-text-muted" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-muted" />
                  )}
                </button>
                {detailsExpanded && (
                  <div className="border-t border-neutral-gray-10 p-4 space-y-4 text-sm">
                    <div>
                      <span className="text-text-muted">Address</span>
                      <p className="font-medium">4545 Marlborough Dr, San Diego, CA, 92116-4737</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-text-muted block mb-1">Current policy</span>
                        <p className="font-medium">TCDX77887832 · Effective 03/23/2025 · Exp 03/23/2026</p>
                        <p className="text-text-muted">$4,848/yr · SageSure</p>
                      </div>
                      <div>
                        <span className="text-text-muted block mb-1">Renewal policy</span>
                        <p className="font-medium">TCDX77887833 · Effective 03/23/2026 · Exp 03/23/3027</p>
                        <p className="text-text-muted">$5,710/yr · SageSure</p>
                      </div>
                    </div>
                    <p className="text-text-muted text-xs">Co-insured Kris McMahon added</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right sidebar - same on every page */}
          <RightSidebarPanel />
        </div>

        {/* Sticky bottom bar with bottom line - Verify details */}
        <div className="h-16 border-t border-neutral-gray-10 bg-white flex items-center justify-end px-6 shrink-0">
          <Button
            onClick={() => navigate("/verification")}
            className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Verify details
          </Button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full py-2.5 px-1 flex flex-col items-center gap-1 text-white hover:bg-white/10 transition-colors text-sm">
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

