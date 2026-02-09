import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Home,
  User,
  Search,
  DollarSign,
  ClipboardCheck,
  Clock,
  Grid3X3,
  Shield,
  Edit,
  ExternalLink,
  Info,
  FileText,
  StickyNote,
  ListChecks,
  Rss,
  Landmark,
  Paperclip,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TopBreadcrumb } from "@/components/TopBreadcrumb";

export default function QuoteRequestsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showYearly, setShowYearly] = useState(true);
  const [eligibleExpanded, setEligibleExpanded] = useState(true);
  const [notEligibleExpanded, setNotEligibleExpanded] = useState(true);

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
            className="text-sm font-semibold -tracking-[0.3px] hover:text-action-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            Elliot McMahon
          </button>
          <Badge className="bg-violet text-white border-none rounded px-2 py-1 text-xs font-semibold">
            Roundpoint
          </Badge>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <TopBreadcrumb currentStep="quoting" />
        </div>

        {/* Main Content with Right Sidebar */}
        <div className="flex-1 flex overflow-hidden">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto bg-white">
            {/* Quote Requests Sub-header */}
            <div className="flex items-center gap-4 px-6 py-3 border-b border-neutral-gray-10">
              <span className="font-bold text-base">Quote requests</span>
              <div className="border border-neutral-gray-30 rounded px-3 py-1.5 text-sm text-text-muted">
                10/12/2024 | 09:12 am
              </div>
              <button className="text-sm text-action-primary font-medium hover:underline">
                Get quotes
              </button>
            </div>

            <div className="max-w-[1600px] mx-auto p-6">
              {/* Primary Home Header */}
              <div className="mb-2">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-5 h-5" />
                  <h3 className="font-bold text-base">Primary home</h3>
                  <Badge
                    variant="outline"
                    className="text-xs rounded-sm border-neutral-gray-30"
                  >
                    12
                  </Badge>
                  <span className="text-sm">
                    614 Basswood Dr, Spring, TX, 77386-1264
                  </span>
                </div>

                {/* Coverage Level Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm">
                      Coverage level: Match current insurance
                    </h4>
                    <button>
                      <Info className="w-4 h-4 text-text-muted" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span>Quoting parameters</span>
                    <div className="flex items-center gap-4">
                      <span>
                        <span className="font-semibold text-text">
                          Dwelling
                        </span>{" "}
                        $230,000
                      </span>
                      <span>
                        <span className="font-semibold text-text">
                          Deductible
                        </span>{" "}
                        $1,000
                      </span>
                      <button>
                        <Edit className="w-4 h-4 text-action-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quotes Table */}
              <div>
                {/* Table Header */}
                <div className="grid grid-cols-[1.2fr_1.5fr_1fr_0.8fr_0.8fr_1fr_0.6fr] gap-3 px-4 py-3 text-sm border-b border-neutral-gray-30">
                  <div className="text-text-muted font-normal">Carrier</div>
                  <div className="text-text-muted font-normal">
                    Carrier response
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-text-muted font-normal">
                      Premium
                    </span>
                    <div className="flex items-center gap-0.5">
                      <button
                        onClick={() => setShowYearly(true)}
                        className={`px-1.5 py-0.5 text-xs font-medium transition-colors ${showYearly ? "text-action-primary underline" : "text-text-muted hover:text-text"}`}
                      >
                        yr
                      </button>
                      <button
                        onClick={() => setShowYearly(false)}
                        className={`px-1.5 py-0.5 text-xs font-medium transition-colors ${!showYearly ? "text-action-primary underline" : "text-text-muted hover:text-text"}`}
                      >
                        mo
                      </button>
                    </div>
                  </div>
                  <div className="text-text-muted font-normal">Coverage</div>
                  <div className="text-text-muted font-normal">Deductible</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-text-muted font-normal">
                      Savings
                    </span>
                    <span className="font-semibold text-text">Actual</span>
                    <span className="text-text-muted font-normal">
                      | Predicted
                    </span>
                    <button>
                      <Info className="w-4 h-4 text-action-primary" />
                    </button>
                  </div>
                  <div></div>
                </div>

                {/* Eligible and partly eligible section */}
                <div>
                  <button
                    onClick={() => setEligibleExpanded(!eligibleExpanded)}
                    className="w-full flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-neutral-gray-5 transition-colors border-b border-neutral-gray-10"
                  >
                    {eligibleExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                    <span className="font-semibold text-sm">
                      Eligible and partly eligible
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-neutral-gray-10 text-neutral-gray-60 text-xs rounded-sm px-1.5 py-0"
                    >
                      14
                    </Badge>
                  </button>

                  {eligibleExpanded && (
                    <div className="divide-y divide-neutral-gray-10">
                      <QuoteRow
                        carrier="FOREMOST"
                        premium="$1,669"
                        bundle="Bundle: $4,830"
                        coverage="$441,000"
                        deductible="$1,000"
                        savingsActual="$41"
                        savingsPredicted="$726"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="UPC"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasCheckmark
                        premium="$6,134"
                        coverage="$468,633"
                        deductible="$2,000"
                        savingsActual="$300"
                        savingsPredicted="$560"
                        actionButton="QuickBind"
                      />
                      <QuoteRow
                        carrier="BRANCH"
                        dotColor="orange"
                        statusText="Data not valid"
                        badge="Partly eligible"
                        premium="$13,497"
                        coverage="$250,000"
                        coverageHighlight
                        deductible="$0"
                        deductibleHighlight
                      />
                      <QuoteRow
                        carrier="ECLECTIQUE"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="MODERN"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="AUROS"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="MARKEL"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="RICCARDO"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="[LOGO]"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="[LOGO]"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="FIVEFIT"
                        badge="Partly eligible"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="TRIUM"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="VMF"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                      <QuoteRow
                        carrier="[LOGO]"
                        dotColor="blue"
                        statusText="Manual quote required"
                        hasExternalLink
                      />
                    </div>
                  )}
                </div>

                {/* Not eligible section */}
                <div>
                  <button
                    onClick={() => setNotEligibleExpanded(!notEligibleExpanded)}
                    className="w-full flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-neutral-gray-5 transition-colors border-b border-neutral-gray-10"
                  >
                    {notEligibleExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                    <span className="font-semibold text-sm">Not eligible</span>
                    <Badge
                      variant="secondary"
                      className="bg-neutral-gray-10 text-neutral-gray-60 text-xs rounded-sm px-1.5 py-0"
                    >
                      7
                    </Badge>
                  </button>

                  {notEligibleExpanded && (
                    <div className="divide-y divide-neutral-gray-10">
                      <QuoteRow
                        carrier="STILLWATER"
                        dotColor="red"
                        statusText="Declined business"
                        premium="$1,109"
                        bundle="Bundle: $800"
                        coverage="$250,000"
                        deductible="$1,000"
                        savingsActual="$20"
                        savingsPredicted="$150"
                        hasExternalLink
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Vertical Icon Bar */}
          <div className="w-12 border-l border-neutral-gray-10 bg-white flex flex-col items-center py-3 gap-1 flex-shrink-0">
            <RightSidebarIcon
              icon={<User className="w-4 h-4" />}
              label="Info"
            />
            <RightSidebarIcon
              icon={<StickyNote className="w-4 h-4" />}
              label="Notes"
            />
            <RightSidebarIcon
              icon={<ListChecks className="w-4 h-4" />}
              label="Tasks"
            />
            <RightSidebarIcon
              icon={<Shield className="w-4 h-4" />}
              label="Policies"
            />
            <RightSidebarIcon
              icon={<Rss className="w-4 h-4" />}
              label="Feed"
            />
            <RightSidebarIcon
              icon={<Landmark className="w-4 h-4" />}
              label="Loans"
            />
            <RightSidebarIcon
              icon={<Paperclip className="w-4 h-4" />}
              label="Files"
            />
            <RightSidebarIcon
              icon={<HelpCircle className="w-4 h-4" />}
              label="Help"
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation
          buttons={[
            { label: "Finalize" },
            {
              label: "Build proposal",
              onClick: () => navigate("/proposal"),
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

function RightSidebarIcon({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="w-full py-2 flex flex-col items-center gap-0.5 text-neutral-gray-60 hover:text-text hover:bg-neutral-gray-5 transition-colors">
      {icon}
      <span className="text-[10px]">{label}</span>
    </button>
  );
}

function QuoteRow({
  carrier,
  dotColor,
  statusText,
  hasCheckmark,
  premium,
  bundle,
  coverage,
  coverageHighlight,
  deductible,
  deductibleHighlight,
  savingsActual,
  savingsPredicted,
  actionButton,
  hasExternalLink,
  badge,
}: {
  carrier?: string;
  dotColor?: "blue" | "green" | "orange" | "red";
  statusText?: string;
  hasCheckmark?: boolean;
  premium?: string;
  bundle?: string;
  coverage?: string;
  coverageHighlight?: boolean;
  deductible?: string;
  deductibleHighlight?: boolean;
  savingsActual?: string;
  savingsPredicted?: string;
  actionButton?: string;
  hasExternalLink?: boolean;
  badge?: string;
}) {
  const dotColors = {
    blue: "bg-action-primary",
    green: "bg-success",
    orange: "bg-warning",
    red: "bg-[#EA4D72]",
  };

  const textColors = {
    blue: "text-action-primary",
    green: "text-success",
    orange: "text-warning",
    red: "text-[#EA4D72]",
  };

  return (
    <div className="grid grid-cols-[1.2fr_1.5fr_1fr_0.8fr_0.8fr_1fr_0.6fr] gap-3 px-4 py-3.5 items-center hover:bg-neutral-gray-5/50 transition-colors">
      {/* Carrier */}
      <div>
        {carrier && (
          <>
            <div className="font-bold text-sm">{carrier}</div>
            {badge && (
              <div className="text-xs text-text-muted mt-0.5">• {badge}</div>
            )}
          </>
        )}
      </div>

      {/* Carrier Response */}
      <div className="flex items-center gap-2">
        {dotColor && !hasCheckmark && (
          <>
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColors[dotColor]}`}
            />
            {statusText && (
              <span className={`text-sm ${textColors[dotColor]}`}>
                {statusText}
              </span>
            )}
          </>
        )}
        {dotColor && hasCheckmark && (
          <>
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColors[dotColor]}`}
            />
            {statusText && (
              <span className={`text-sm ${textColors[dotColor]}`}>
                {statusText}
              </span>
            )}
            <svg
              className="w-4 h-4 text-success flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </>
        )}
        {hasCheckmark && !dotColor && (
          <svg
            className="w-4 h-4 text-success flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Premium */}
      <div>
        {premium && (
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">{premium}</span>
            {bundle && (
              <span className="text-xs text-success">{bundle}</span>
            )}
          </div>
        )}
      </div>

      {/* Coverage */}
      <div
        className={`text-sm ${coverageHighlight ? "bg-blue-50 px-2 py-1 rounded" : ""}`}
      >
        {coverage || ""}
      </div>

      {/* Deductible */}
      <div
        className={`text-sm ${deductibleHighlight ? "bg-blue-50 px-2 py-1 rounded" : ""}`}
      >
        {deductible || ""}
      </div>

      {/* Savings */}
      <div className="text-sm">
        {savingsActual && (
          <span>
            <span className="font-bold">{savingsActual}</span>
            {savingsPredicted && (
              <span className="text-text-muted">|{savingsPredicted}</span>
            )}
          </span>
        )}
        {!savingsActual && !savingsPredicted && premium && (
          <span className="text-text-muted">No</span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2">
        {actionButton && (
          <Button
            variant="outline"
            size="sm"
            className="border-action-primary text-action-primary hover:bg-action-primary/10 font-medium text-sm h-8 px-3"
          >
            {actionButton}
          </Button>
        )}
        {hasExternalLink && (
          <button className="w-8 h-8 flex items-center justify-center hover:bg-neutral-gray-10 rounded transition-colors">
            <ExternalLink className="w-4 h-4 text-action-secondary" />
          </button>
        )}
      </div>
    </div>
  );
}
