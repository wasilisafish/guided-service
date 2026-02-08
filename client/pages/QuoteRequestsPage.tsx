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
  Paperclip,
  HelpCircle,
  Grid3X3,
  Shield,
  Edit,
  CheckCircle,
  AlertCircle,
  XCircle,
  ExternalLink,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNavigation } from "@/components/BottomNavigation";

export default function QuoteRequestsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showYearly, setShowYearly] = useState(true);
  const [eligibleExpanded, setEligibleExpanded] = useState(true);
  const [notEligibleExpanded, setNotEligibleExpanded] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Left Navigation Sidebar */}
      <div className={`${sidebarOpen ? 'w-[60px]' : 'hidden'} bg-gradient-to-b from-[#330E80] to-[#156EEA] flex-shrink-0 flex flex-col items-center py-4`}>
        {/* Logo */}
        <div className="mb-8">
          <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.1541 4.60894C21.2376 4.54606 21.3328 4.5767 21.4509 4.69556L35.4028 18.738C35.6512 18.988 35.763 19.2809 35.5145 19.531L28.7282 26.3614C28.4798 26.6114 28.077 26.6114 27.8286 26.3614L20.9715 19.4597C20.7595 19.2463 20.7281 18.9152 20.8789 18.6609C23.9571 13.4703 22.5796 7.8946 21.104 4.92219C21.0308 4.77479 21.0704 4.67194 21.1541 4.60894Z" fill="#408DF6"/>
            <path d="M19.4192 20.827C19.669 20.5525 19.9902 20.6407 20.2573 20.9095L26.7508 27.4452C26.9992 27.6952 27.111 27.9881 26.8626 28.2382L20.3307 34.8125C20.0823 35.0625 19.6795 35.0625 19.4311 34.8125L11.1912 26.5191C10.9948 26.3214 10.9648 26.0494 11.046 25.8229C11.1269 25.5972 11.322 25.4039 11.5906 25.3587C15.0769 24.7723 18.0216 22.3628 19.4192 20.827Z" fill="#66A4F7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.6954 0.210833C16.6022 0.210833 21.3907 5.03041 21.3907 10.9757C21.3907 16.9209 16.6022 21.7405 10.6954 21.7405C4.78848 21.7405 -2.09311e-07 16.9209 -4.67509e-07 10.9757C-7.25707e-07 5.03041 4.78848 0.210834 10.6954 0.210833Z" fill="#EA4D72"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M29.305 -5.93705e-06C35.2119 -6.19693e-06 40.0004 4.81957 40.0004 10.7648C40.0004 13.3368 39.1038 15.6988 37.6084 17.5503C37.3239 17.9026 36.81 17.9066 36.5036 17.5982L22.5157 3.5195C22.2093 3.21111 22.2133 2.69383 22.5633 2.40747C24.4029 0.902328 26.7496 -5.82463e-06 29.305 -5.93705e-06Z" fill="#1E74EB"/>
          </svg>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col gap-2 w-full">
          <NavItem icon={<Search className="w-5 h-5" />} label="Search" />
          <div className="w-[52px] h-px bg-white/20 mx-auto my-2" />
          <NavItem icon={<DollarSign className="w-5 h-5" />} label="Sales" />
          <NavItem icon={<ClipboardCheck className="w-5 h-5" />} label="Tasks" />
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
        {/* Top Header Bar */}
        <div className="h-16 border-b border-neutral-gray-10 bg-white flex items-center px-6 gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-6 h-6 flex items-center justify-center hover:bg-neutral-gray-5 rounded transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2V14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z" stroke="#334155" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-lg font-semibold -tracking-[0.3px] hover:text-action-primary transition-colors cursor-pointer"
          >
            Elliot McMahon
          </button>
          <Badge className="bg-violet text-white border-none rounded px-2.5 py-0.5 text-xs font-semibold">
            Roundpoint
          </Badge>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <div className="flex items-center gap-1">
            <span className="text-sm">Lead: 676233</span>
            <ChevronDown className="w-4 h-4 text-text-muted" />
          </div>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <span className="text-sm text-text-muted">Data collection</span>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <span className="text-sm font-semibold">Quoting</span>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <span className="text-sm text-text-muted">Proposal</span>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <span className="text-sm text-text-muted">Finalize</span>
          <div className="flex-1" />
          <span className="text-sm text-text-muted">Re-shop in progress</span>
          <Button variant="outline" className="border-action-secondary text-action-secondary hover:bg-neutral-gray-5 text-sm font-semibold">
            Schedule follow-up
            <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-[1600px] mx-auto p-6">
            {/* Header Section */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <Home className="w-5 h-5" />
                <h3 className="font-bold text-base">Primary home</h3>
                <Badge variant="outline" className="text-xs rounded-sm border-neutral-gray-30">12</Badge>
                <span className="text-sm">4-64 Beachcomber Ln, Lanark, IL, 61046-9301</span>
              </div>

              {/* Coverage Level Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-base">Coverage level: Match current insurance</h4>
                  <button>
                    <Info className="w-4 h-4 text-text-muted" />
                  </button>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <span>Quoting parameters:</span>
                  <div className="flex items-center gap-4">
                    <span>
                      <span className="font-semibold text-text">Dwelling</span> $230,000
                    </span>
                    <span>
                      <span className="font-semibold text-text">Deductible</span> $1,000
                    </span>
                    <button>
                      <Edit className="w-4 h-4 text-action-secondary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quotes Table */}
            <div className="border border-neutral-gray-30 rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-neutral-gray-5 grid grid-cols-[1fr_1fr_0.8fr_0.5fr_0.8fr_0.7fr_1.2fr_0.8fr] gap-3 px-4 py-3 text-sm border-b border-neutral-gray-30">
                <div className="font-semibold">Carrier</div>
                <div className="font-semibold">Carrier response</div>
                <div className="font-semibold">Premium</div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setShowYearly(true)}
                    className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${showYearly ? 'bg-action-primary text-white' : 'text-text-muted hover:bg-neutral-gray-10'}`}
                  >
                    yr
                  </button>
                  <button 
                    onClick={() => setShowYearly(false)}
                    className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${!showYearly ? 'bg-action-primary text-white' : 'text-text-muted hover:bg-neutral-gray-10'}`}
                  >
                    mo
                  </button>
                </div>
                <div className="font-semibold">Coverage</div>
                <div className="font-semibold">Deductible</div>
                <div className="flex items-center gap-1.5">
                  <span className="font-normal">Savings</span>
                  <span className="font-bold">Actual</span>
                  <span className="font-normal">| Predicted</span>
                  <button>
                    <Info className="w-4 h-4 text-text-muted" />
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
                  {eligibleExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  <span className="font-semibold text-base">Eligible and partly eligible</span>
                  <Badge variant="secondary" className="bg-neutral-gray-10 text-neutral-gray-60 text-xs rounded-sm">14</Badge>
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
                      hasDetails
                    />
                    <QuoteRow
                      carrier="UPC"
                      hasCheckmark
                      premium="$6,134"
                      coverage="$468,633"
                      deductible="$2,000"
                      savingsActual="No"
                      savingsPredicted="$261"
                      actionButton="QuickBind"
                      hasDetails
                    />
                    <QuoteRow
                      carrier="BRANCH"
                      badge="Partly eligible"
                      premium="$13,497"
                      coverage="$250,000"
                      deductible="No | $0"
                      hasExternalLink
                      hasDetails
                    />
                    <QuoteRow
                      carrier="ECLECTIQUE"
                      warning="Manual quote required"
                      hasExternalLink
                      hasDetails
                    />
                    <QuoteRow
                      carrier="MODERN"
                      warning="Manual quote required"
                      hasExternalLink
                      hasDetails
                    />
                    <QuoteRow
                      carrier="AUROS"
                      warning="Manual quote required"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="MARKEL"
                      warning="Manual quote required"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="RICCARDO"
                      warning="Manual quote required"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="[LOGO]"
                      warning="Manual quote required"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="[LOGO]"
                      warning="Manual quote required"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="FIVEFIT"
                      badge="Partly eligible"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="TRIUM"
                      warning="Manual quote required"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="VMF"
                      warning="Manual quote required"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="[LOGO]"
                      warning="Manual quote required"
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
                  {notEligibleExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  <span className="font-semibold text-base">Not eligible (?)</span>
                  <Badge variant="secondary" className="bg-neutral-gray-10 text-neutral-gray-60 text-xs rounded-sm">7</Badge>
                </button>

                {notEligibleExpanded && (
                  <div className="divide-y divide-neutral-gray-10">
                    <QuoteRow
                      carrier="STILLWATER"
                      carrierSubtext="INSURANCE"
                      error="Declined business"
                      premium="$1,109"
                      bundle="Bundle: $800"
                      coverage="$250,000"
                      deductible="$1,000"
                      savingsActual="$20"
                      savingsPredicted="$150"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation
          buttons={[
            { label: "Finalize" },
            {
              label: "Build proposal",
              onClick: () => navigate('/proposal')
            }
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

function QuoteRow({
  carrier,
  carrierSubtext,
  warning,
  warningType = "warning",
  error,
  hasCheckmark,
  premium,
  bundle,
  coverage,
  deductible,
  savingsActual,
  savingsPredicted,
  actionButton,
  hasExternalLink,
  showDash,
  highlightRow,
  badge,
  hasDetails,
}: {
  carrier?: string;
  carrierSubtext?: string;
  warning?: string;
  warningType?: "warning" | "error";
  error?: string;
  hasCheckmark?: boolean;
  premium?: string;
  bundle?: string;
  coverage?: string;
  deductible?: string;
  savingsActual?: string;
  savingsPredicted?: string;
  actionButton?: string;
  hasExternalLink?: boolean;
  showDash?: boolean;
  highlightRow?: boolean;
  badge?: string;
  hasDetails?: boolean;
}) {
  return (
    <div className={`grid grid-cols-[1fr_1fr_0.8fr_0.5fr_0.8fr_0.7fr_1.2fr_0.8fr] gap-3 px-4 py-3.5 items-center hover:bg-neutral-gray-5 transition-colors ${highlightRow ? 'bg-blue-50/50' : ''}`}>
      {/* Carrier */}
      <div>
        {carrier && (
          <>
            <div className="font-bold text-sm">{carrier}</div>
            {carrierSubtext && <div className="text-xs text-text-muted uppercase">{carrierSubtext}</div>}
          </>
        )}
      </div>

      {/* Carrier Response */}
      <div className="flex items-center gap-2">
        {error && (
          <>
            <XCircle className="w-4 h-4 text-[#EA4D72] flex-shrink-0" />
            <span className="text-sm text-[#EA4D72]">{error}</span>
          </>
        )}
        {warning && !error && (
          <>
            <AlertCircle className={`w-4 h-4 flex-shrink-0 ${warningType === 'error' ? 'text-warning' : 'text-blue-600'}`} />
            <span className={`text-sm ${warningType === 'error' ? 'text-warning' : 'text-blue-600'}`}>{warning}</span>
          </>
        )}
        {hasCheckmark && !warning && !error && (
          <CheckCircle className="w-5 h-5 text-success" />
        )}
        {showDash && <span className="text-text-muted">-</span>}
      </div>

      {/* Premium */}
      <div>
        {premium && (
          <>
            <div className="font-semibold text-sm">{premium}</div>
            {bundle && <div className="text-xs text-success">{bundle}</div>}
          </>
        )}
        {showDash && <span className="text-text-muted">-</span>}
      </div>

      {/* yr/mo column - empty */}
      <div></div>

      {/* Coverage */}
      <div className="text-sm">{coverage || (showDash ? "-" : "")}</div>

      {/* Deductible */}
      <div className="text-sm">{deductible || (showDash ? "-" : "")}</div>

      {/* Savings */}
      <div className="flex items-center gap-2">
        {savingsActual && (
          <>
            <span className="font-bold text-sm">{savingsActual}</span>
            {savingsPredicted && (
              <>
                <span className="text-text-muted">|</span>
                <span className="text-sm">{savingsPredicted}</span>
              </>
            )}
          </>
        )}
        {showDash && <span className="text-text-muted">-</span>}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2">
        {actionButton && (
          <Button 
            variant="outline" 
            size="sm"
            className="border-action-secondary text-action-secondary hover:bg-action-secondary/10 font-semibold text-sm h-8 px-3"
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
