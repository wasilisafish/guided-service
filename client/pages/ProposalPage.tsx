import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  Home,
  User,
  Search,
  DollarSign,
  ClipboardCheck,
  Clock,
  Paperclip,
  HelpCircle,
  Grid3X3,
  Shield,
  Phone,
  Mail,
  FileText,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TopBreadcrumb } from "@/components/TopBreadcrumb";
import { SageSureLogo } from "@/components/SageSureLogo";
import { RightSidebarPanel } from "@/components/RightSidebarPanel";

export default function ProposalPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            className="w-6 h-6 flex-shrink-0 flex items-center justify-center hover:bg-neutral-gray-5 rounded transition-colors"
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
            className="text-lg font-semibold -tracking-[0.3px] hover:text-action-primary transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Elliot McMahon
          </button>
          <Badge className="rounded px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap shrink-0 bg-neutral-gray-10 text-neutral-gray-80 border border-neutral-gray-20">
            Roundpoint
          </Badge>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30 shrink-0" />
          <div className="min-w-0 flex-1">
            <TopBreadcrumb currentStep="proposal" />
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
          {/* Left Sidebar */}
          <div className="w-80 border-r border-neutral-gray-10 bg-white overflow-y-auto p-6">
            <div className="space-y-6">
              <h2 className="font-bold text-xl">Build proposal</h2>

              <div>
                <h3 className="font-bold text-base mb-4">
                  Your proposal summary
                </h3>

                <Card className="border border-neutral-gray-10 rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex items-start gap-2 mb-3">
                    <Home className="w-5 h-5 flex-shrink-0 mt-0.5 text-action-primary" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold mb-1">Primary home</div>
                      <p className="text-sm text-text-muted mb-3">
                        4545 Marlborough Dr, San Diego, CA, 92116-4737
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="border border-neutral-gray-10 bg-white rounded px-2 py-1.5">
                          <div className="font-bold text-sm">FOREMOST</div>
                          <div className="text-xs text-text-muted">INSURANCE GROUP</div>
                        </div>
                        <span className="font-bold text-lg">$1,669/yr</span>
                        <button className="p-1 rounded hover:bg-neutral-gray-5" aria-label="Options">
                          <ChevronDown className="w-5 h-5 text-text-muted" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="max-w-5xl mx-auto p-8 space-y-8">
              {/* Review your insurance offer - Figma */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-neutral-gray-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-gray-80">
                  Review your insurance offer
                </h1>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-start gap-6 flex-1">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base md:text-lg mb-4 text-neutral-gray-80">
                        I'm Maria, your{" "}
                        <span className="font-semibold">California</span>{" "}
                        licensed insurance advisor. I've helped{" "}
                        <span className="font-semibold">127</span> customers
                        protect their most important belongings.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-2">
                          <Phone className="w-5 h-5 text-action-primary shrink-0" />
                          <span className="font-semibold">653-7652-873</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-5 h-5 text-action-primary shrink-0" />
                          <span className="font-semibold">maria.su@matic.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 md:ml-4">
                    <svg
                      width="240"
                      height="160"
                      viewBox="0 0 240 160"
                      fill="none"
                    >
                      {/* House illustration */}
                      <rect
                        x="20"
                        y="60"
                        width="100"
                        height="80"
                        fill="#60A5FA"
                        rx="4"
                      />
                      <path d="M20 60L70 20L120 60" fill="#3B82F6" />
                      <rect
                        x="45"
                        y="90"
                        width="20"
                        height="30"
                        fill="#1E3A8A"
                      />
                      <rect
                        x="80"
                        y="90"
                        width="20"
                        height="30"
                        fill="#1E3A8A"
                      />
                      <rect
                        x="55"
                        y="110"
                        width="20"
                        height="30"
                        fill="#93C5FD"
                      />

                      {/* Car illustration */}
                      <ellipse
                        cx="180"
                        cy="130"
                        rx="40"
                        ry="20"
                        fill="#60A5FA"
                      />
                      <rect
                        x="150"
                        y="100"
                        width="60"
                        height="30"
                        fill="#3B82F6"
                        rx="8"
                      />
                      <circle cx="165" cy="130" r="8" fill="#1E3A8A" />
                      <circle cx="195" cy="130" r="8" fill="#1E3A8A" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Home insurance details - Figma with highlighted differences */}
              <Card className="border border-neutral-gray-10 rounded-lg overflow-hidden bg-white shadow-md">
                <div className="p-6">
                  <h2 className="font-bold text-2xl mb-2">Home insurance details</h2>
                  <p className="text-base text-text-muted mb-6">
                    4545 Marlborough Dr, San Diego, CA, 92116-4737
                  </p>

                  <div className="space-y-0">
                    {/* Header */}
                    <div className="grid grid-cols-3 gap-4 pb-3 border-b-2 border-neutral-gray-30">
                      <div />
                      <div className="text-center font-bold text-lg">Current</div>
                      <div className="text-center font-bold text-lg">Proposed</div>
                    </div>

                    {/* Carrier */}
                    <ProposalRow
                      label="Carrier"
                      proposed={
                        <div className="border border-neutral-gray-10 bg-white rounded px-3 py-2 inline-block">
                          <div className="font-bold text-sm">FOREMOST</div>
                          <div className="text-xs text-text-muted">INSURANCE GROUP</div>
                        </div>
                      }
                      current={
                        <div className="border border-neutral-gray-10 bg-white rounded px-2 py-1.5 inline-flex">
                          <SageSureLogo width={90} height={22} />
                        </div>
                      }
                    />

                    <div className="pt-4 pb-2">
                      <h3 className="font-bold text-lg">Policy Basics</h3>
                    </div>

                    <ProposalRow label="Policy Start Date" proposed="1/1/2026" current="1/1/2026" />
                    <ProposalRow label="Deductible" proposed="$1,000" current="$1,000" />

                    <div className="pt-4 grid grid-cols-3 gap-4 pb-2">
                      <div className="font-bold text-lg">Standard coverages</div>
                      <div />
                      <div className="text-right font-bold text-lg">Coverage Limit</div>
                    </div>

                    <ProposalRow label="Dwelling" proposed="$433,380" current="$350,000" highlight />
                    <ProposalRow label="Other structures" proposed="$43,380" current="$35,000" highlight />
                    <ProposalRow label="Personal property" proposed="$86,380" current="$70,000" highlight />
                    <ProposalRow label="Loss of use" proposed="$50,000" current="$50,000" />
                    <ProposalRow label="Personal liability" proposed="$10,000" current="$10,000" />
                    <ProposalRow label="Medical payment (to others)" proposed="$5,000" current="$5,000" />

                    <div className="pt-4 pb-2">
                      <h3 className="font-bold text-lg">Additional coverages</h3>
                    </div>
                    <ProposalRow label="Water back-up" proposed="$10,000" current="$5,000" highlight />
                    <ProposalRow label="Earthquake" proposed="Not Included" current="Not Included" />
                    <ProposalRow label="Mold property damage" proposed="Not Included" current="Not Included" />
                    <ProposalRow label="Mold liability" proposed="Not Included" current="Not Included" />

                    <ProposalRow label="Yearly Premium" proposed="$1,669.00" current="$5,710.00" highlight />
                  </div>
                </div>
              </Card>

              {/* Act now to secure your rate - Figma */}
              <div className="bg-amber-50/80 border border-amber-200/60 rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-xl mb-2 text-neutral-gray-80">Act now to secure your rate</h3>
                <p className="text-neutral-gray-80 mb-6">
                  Insurance rates can change. Contact your advisor to lock in this quote and complete your application.
                </p>
                <Button className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold px-6">
                  Contact Your Advisor
                </Button>
              </div>

              {/* Why customers choose Matic - Figma */}
              <div className="bg-violet-50/80 border border-violet-200/60 rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-neutral-gray-80">Why customers choose Matic</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="font-semibold text-action-primary mb-1">Ongoing support</div>
                    <p className="text-sm text-neutral-gray-80">We're here whenever you need us—claims, renewals, or questions.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-action-primary mb-1">Transparency</div>
                    <p className="text-sm text-neutral-gray-80">Clear pricing and no surprises. You'll always know what you're paying for.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-action-primary mb-1">Peace of mind</div>
                    <p className="text-sm text-neutral-gray-80">Your home and belongings protected by a policy that fits your life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar - same on every page */}
          <RightSidebarPanel />
        </div>

        {/* Bottom Navigation: Finalize = main CTA, Send proposal = secondary */}
        <div className="h-16 border-t border-neutral-gray-10 bg-white flex items-center justify-end gap-3 px-6 shrink-0">
          <Button
            variant="outline"
            onClick={() => {}}
            className="border-neutral-gray-30 text-neutral-gray-80 hover:bg-neutral-gray-5 font-semibold px-6"
          >
            Send proposal
          </Button>
          <Button
            onClick={() => navigate("/finalize")}
            className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold px-6"
          >
            Finalize
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

function ProposalRow({
  label,
  proposed,
  current,
  highlight,
}: {
  label: string;
  proposed: React.ReactNode;
  current: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-3 gap-4 py-3 items-center border-b border-neutral-gray-10 ${
        highlight ? "bg-blue-50/70" : ""
      }`}
    >
      <div className="text-sm font-medium">{label}</div>
      <div className="text-center text-sm flex items-center justify-center min-h-[2rem]">
        {current}
      </div>
      <div className="text-center text-sm flex items-center justify-center min-h-[2rem]">
        {proposed}
      </div>
    </div>
  );
}

