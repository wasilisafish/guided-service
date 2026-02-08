import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Home,
  Archive,
  User,
  Car,
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
  Copy,
  ChevronDown,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TopBreadcrumb } from "@/components/TopBreadcrumb";

export default function ComparisonPage() {
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
        <div className="h-16 border-b border-neutral-gray-10 bg-white flex items-center px-6 gap-3">
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
            className="text-lg font-semibold -tracking-[0.3px] hover:text-action-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            Elliot McMahon
          </button>
          <Badge className="bg-violet text-white border-none rounded px-2 py-1 text-xs font-semibold w-auto flex-grow-0">
            Roundpoint
          </Badge>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <TopBreadcrumb currentStep="establish-rapport" />
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Content Panel */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto p-8 space-y-6">
              {/* This Case Section */}
              <div>
                <h2 className="font-bold text-base mb-1">This case:</h2>
                <p className="text-base">
                  Initiated renewal consultation for the customer
                </p>
              </div>

              {/* Renewal Comparison Section */}
              <div>
                <h2 className="font-bold text-2xl mb-6">Renewal comparison</h2>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Policy Renewal */}
                  <Card
                    className="border-neutral-gray-30 rounded-lg p-6"
                    style={{ marginLeft: "3px" }}
                  >
                    <h3 className="font-bold text-lg mb-4">Policy renewal</h3>

                    <div className="flex items-start gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-azure-95 flex items-center justify-center flex-shrink-0">
                        <Home className="w-5 h-5 text-azure-50" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">Home</span>
                          <span className="text-sm">TCDX77887833</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-text-muted"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                          <div className="flex items-center gap-2 ml-auto">
                            <div className="w-2 h-2 rounded-full bg-action-primary" />
                            <span className="text-sm font-semibold">Bound</span>
                          </div>
                          <button className="ml-auto" />
                        </div>
                        <p className="text-sm text-text-muted mb-2">
                          Primary home: 614 Basswood Dr, Spring, TX, 77386-1264
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                      <div>
                        <div className="text-text-muted mb-1">Carrier</div>
                        <div className="font-semibold">SURE</div>
                      </div>
                      <div>
                        <div className="text-text-muted mb-1">
                          Effective date
                        </div>
                        <div className="font-semibold">03/23/2026</div>
                      </div>
                      <div>
                        <div className="text-text-muted mb-1">
                          Expiration date
                        </div>
                        <div className="font-semibold">03/23/3027</div>
                      </div>
                      <div>
                        <div className="text-text-muted mb-1">Premium</div>
                        <div className="font-semibold">$5,710/yr</div>
                      </div>
                    </div>
                  </Card>

                  {/* Current Policy */}
                  <Card
                    className="border-neutral-gray-30 rounded-lg p-6"
                    style={{ marginLeft: "1px" }}
                  >
                    <h3 className="font-bold text-lg mb-4">Current policy</h3>

                    <div className="flex items-start gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-neutral-gray-10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-neutral-gray-60" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">Home</span>
                          <span className="text-sm">TCDX77887832</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-text-muted"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                          <div
                            className="flex items-center gap-2"
                            style={{ marginLeft: "114px" }}
                          >
                            <div className="w-2 h-2 rounded-full bg-success" />
                            <span className="text-sm font-semibold">
                              Renewed
                            </span>
                          </div>
                          <button className="ml-auto" />
                        </div>
                        <p className="text-sm text-text-muted mb-2">
                          Primary home: 614 Basswood Dr, Spring, TX, 77386-1264
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                      <div>
                        <div className="text-text-muted mb-1">Carrier</div>
                        <div className="font-semibold">SURE</div>
                      </div>
                      <div>
                        <div className="text-text-muted mb-1">
                          Effective date
                        </div>
                        <div className="font-semibold">03/23/2025</div>
                      </div>
                      <div>
                        <div className="text-text-muted mb-1">Term</div>
                        <div className="font-semibold">03/23/2026</div>
                      </div>
                      <div>
                        <div className="text-text-muted mb-1">Premium</div>
                        <div className="font-semibold">$4,848/yr</div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Log of Changes */}
                <div>
                  <h3 className="font-bold text-2xl mb-4">Log of changes</h3>

                  <div className="space-y-3">
                    <ChangeLogItem
                      label="Premium change"
                      oldValue="$4,848"
                      newValue="$5,710"
                      percentage={
                        <span style={{ color: "rgb(179, 8, 8)" }}>
                          +18%(862)
                        </span>
                      }
                      isIncrease
                    />
                    <ChangeLogItem label="Co-insured Kris McMahon added" />
                    <ChangeLogItem
                      label="Coverage change: dwelling"
                      oldValue="$350,000"
                      newValue="$433,380"
                      percentage="+12%"
                      isIncrease
                    />
                    <ChangeLogItem
                      label="Coverage change: other structures"
                      oldValue="$35,000"
                      newValue="$43,380"
                      percentage="+12%"
                      isIncrease
                    />
                    <ChangeLogItem
                      label="Coverage change: personal property"
                      oldValue="$70,000"
                      newValue="$86,380"
                      percentage="+12%"
                      isIncrease
                    />
                    <ChangeLogItem
                      label="Coverage change: water backup of sewers & drains"
                      oldValue="$5,000"
                      newValue="$10,000"
                      percentage="+50%"
                      isIncrease
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Risk Factors Sidebar */}
          <div className="w-[440px] border-l border-neutral-gray-10 flex-shrink-0 overflow-y-auto bg-neutral-gray-5 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="font-bold text-xl mb-2">
                  Risk factors impacting carrier premiums
                </h2>
                <p className="text-sm text-text-muted">
                  Below are some of the factors carriers may use when
                  determining customer's premium.
                </p>
              </div>

              <div className="space-y-4">
                <RiskFactorItem
                  label="Location"
                  value="43220"
                  risk="Low Risk"
                  impact="High Impact"
                  isLowRisk
                />
                <RiskFactorItem
                  label="Claims History"
                  value="No Claims"
                  risk="Low Risk"
                  impact="High Impact"
                  isLowRisk
                />
                <RiskFactorItem
                  label="Credit History"
                  value="Excellent"
                  risk="Low Risk"
                  impact="High Impact"
                  isLowRisk
                />
                <RiskFactorItem
                  label="Roof Condition"
                  value="16 years"
                  risk="High Risk"
                  impact="High Impact"
                  isHighRisk
                />
                <RiskFactorItem
                  label="Home Age"
                  value="45 years"
                  risk="Medium Risk"
                  impact="High Impact"
                  isMediumRisk
                />
                <RiskFactorItem
                  label="Pets"
                  value="None"
                  risk="Low Risk"
                  impact="High Impact"
                  isLowRisk
                />
                <RiskFactorItem
                  label="Safety Hazards"
                  value="None"
                  risk="Low Risk"
                  impact="High Impact"
                  isLowRisk
                />
                <RiskFactorItem
                  label="Heating Source"
                  value="Furnace"
                  risk="Moderate Risk"
                  impact="High Impact"
                  isMediumRisk
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation
          buttons={[
            {
              label: "Verify details",
              onClick: () => navigate("/verification"),
            },
          ]}
          showHelpButton={false}
        />
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

function ChangeLogItem({
  label,
  oldValue,
  newValue,
  percentage,
  isIncrease,
}: {
  label: string;
  oldValue?: string;
  newValue?: string;
  percentage?: string;
  isIncrease?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-neutral-gray-10">
      <span className="text-base">{label}</span>
      {oldValue && newValue && (
        <div className="flex items-center gap-2">
          <span className="text-base">
            {oldValue} → {newValue}
          </span>
          <span
            className={`text-sm font-semibold ${isIncrease ? "text-success" : "text-warning"}`}
          >
            {percentage}
          </span>
        </div>
      )}
    </div>
  );
}

function RiskFactorItem({
  label,
  value,
  risk,
  impact,
  isLowRisk,
  isMediumRisk,
  isHighRisk,
}: {
  label: string;
  value: string;
  risk: string;
  impact: string;
  isLowRisk?: boolean;
  isMediumRisk?: boolean;
  isHighRisk?: boolean;
}) {
  return (
    <div className="bg-white border border-neutral-gray-30 rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold">{label}</h4>
          <button>
            <Info className="w-4 h-4 text-text-muted" />
          </button>
        </div>
        <span className="font-bold">{value}</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1">
          <div
            className={`w-2 h-2 rounded-full ${
              isLowRisk
                ? "bg-success"
                : isMediumRisk
                  ? "bg-warning"
                  : isHighRisk
                    ? "bg-[#EA4D72]"
                    : "bg-neutral-gray-30"
            }`}
          />
          <span>{risk}</span>
        </div>
        <div className="w-px h-4 bg-neutral-gray-10" />
        <span>{impact}</span>
      </div>
    </div>
  );
}
