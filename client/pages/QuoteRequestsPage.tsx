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

export default function QuoteRequestsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showYearly, setShowYearly] = useState(true);
  const [eligibleExpanded, setEligibleExpanded] = useState(true);
  const [notEligibleExpanded, setNotEligibleExpanded] = useState(true);

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
          <button className="w-6 h-6 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-neutral-gray-30 rounded" />
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
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1400px] mx-auto p-8 space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="font-bold text-xl">Quote requests</h2>
                <span className="text-sm text-text-muted">10/12/2024 | 09:12 am</span>
              </div>
              <Button className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold">
                Get quotes
              </Button>
            </div>

            {/* Primary Home Section */}
            <div className="flex items-center gap-3">
              <Home className="w-5 h-5" />
              <h3 className="font-bold text-lg">Primary home</h3>
              <Badge variant="outline" className="text-xs">12</Badge>
              <span className="text-base">4-64 Beachcomber Ln, Lanark, IL, 61046-9301</span>
            </div>

            {/* Coverage Level */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-base">Coverage level: Match current insurance</h4>
                <button>
                  <Info className="w-4 h-4 text-text-muted" />
                </button>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm text-text-muted">Quoting parameters:</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm">
                    <span className="font-semibold">Dwelling</span> $230,000
                  </span>
                  <span className="text-sm">
                    <span className="font-semibold">Deductible</span> $1,000
                  </span>
                  <button>
                    <Edit className="w-4 h-4 text-action-secondary" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quotes Table Header */}
            <div className="border border-neutral-gray-30 rounded-lg overflow-hidden">
              <div className="bg-neutral-gray-5 grid grid-cols-[200px_200px_120px_80px_120px_120px_180px_140px] gap-4 px-4 py-3 text-sm font-semibold border-b border-neutral-gray-30">
                <div>Carrier</div>
                <div>Carrier response</div>
                <div>Premium</div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setShowYearly(!showYearly)}
                    className={`px-2 py-0.5 rounded ${showYearly ? 'bg-action-primary text-white' : 'text-text-muted'}`}
                  >
                    yr
                  </button>
                  <button 
                    onClick={() => setShowYearly(!showYearly)}
                    className={`px-2 py-0.5 rounded ${!showYearly ? 'bg-action-primary text-white' : 'text-text-muted'}`}
                  >
                    mo
                  </button>
                </div>
                <div>Coverage</div>
                <div>Deductible</div>
                <div className="flex items-center gap-2">
                  <span>Savings</span>
                  <span className="font-bold">Actual</span>
                  <span>| Predicted</span>
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
                  className="w-full flex items-center gap-2 px-4 py-3 bg-white hover:bg-neutral-gray-5 transition-colors border-b border-neutral-gray-10"
                >
                  {eligibleExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  <span className="font-semibold">Eligible and partly eligible</span>
                  <Badge variant="secondary" className="bg-neutral-gray-10 text-neutral-gray-60 text-xs">5</Badge>
                </button>

                {eligibleExpanded && (
                  <div className="divide-y divide-neutral-gray-10">
                    <QuoteRow
                      carrier="FOREMOST"
                      carrierSubtext="INSURANCE GROUP"
                      premium="$793"
                      coverage="$230,000"
                      deductible="$1,000"
                      savingsActual="$307"
                      savingsPredicted="$567"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="UPCIC"
                      carrierSubtext="INSURANCE"
                      warning="Manual quote required"
                      premium="$1,600"
                      coverage="$230,000"
                      deductible="$1,000"
                      savingsActual="$300"
                      savingsPredicted="$560"
                      actionButton="QuickBind"
                    />
                    <QuoteRow
                      carrier="SageSure"
                      hasCheckmark
                      premium="$860"
                      coverage="$250,000"
                      deductible="$2,500"
                      savingsActual="$240"
                      savingsPredicted="$367"
                      actionButton="QuickBind"
                    />
                    <QuoteRow
                      carrier="Safeco Insurance"
                      carrierSubtext="LIBERTY MUTUAL GROUP"
                      hasCheckmark
                      premium="$1,092"
                      bundle="Bundle: $1,000"
                      coverage="$250,000"
                      deductible="$1,000"
                      savingsActual="$100"
                      savingsPredicted="$260"
                      actionButton="QuickBind"
                    />
                    <QuoteRow
                      carrier="STATE AUTO"
                      carrierSubtext="INSURANCE COMPANIES"
                      premium="$1,044"
                      bundle="Bundle: $983"
                      coverage="$230,000"
                      deductible="$1,000"
                      savingsActual="No"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="Homesite"
                      warning="Manual quote required"
                      hasCheckmark
                      premium="$1,260"
                      coverage="$230,000"
                      deductible="$1,000"
                      savingsActual="No"
                      hasExternalLink
                    />
                    <QuoteRow
                      carrier="BRANCH"
                      warningType="error"
                      warning="Data not valid"
                      showDash
                    />
                  </div>
                )}
              </div>

              {/* Not eligible section */}
              <div>
                <button
                  onClick={() => setNotEligibleExpanded(!notEligibleExpanded)}
                  className="w-full flex items-center gap-2 px-4 py-3 bg-white hover:bg-neutral-gray-5 transition-colors border-b border-neutral-gray-10"
                >
                  {notEligibleExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  <span className="font-semibold">Not eligible</span>
                  <Badge variant="secondary" className="bg-neutral-gray-10 text-neutral-gray-60 text-xs">5</Badge>
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

        {/* Bottom Action Bar */}
        <div className="h-16 border-t border-neutral-gray-10 bg-white flex items-center justify-end px-6 gap-3">
          <Button className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold">
            Finalize
          </Button>
          <Button
            onClick={() => navigate('/proposal')}
            className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold"
          >
            Build proposal
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
}) {
  return (
    <div className="grid grid-cols-[200px_200px_120px_80px_120px_120px_180px_140px] gap-4 px-4 py-4 items-center hover:bg-neutral-gray-5 transition-colors">
      {/* Carrier */}
      <div>
        <div className="font-bold text-sm">{carrier}</div>
        {carrierSubtext && <div className="text-xs text-text-muted">{carrierSubtext}</div>}
      </div>

      {/* Carrier Response */}
      <div className="flex items-center gap-2">
        {error && (
          <>
            <XCircle className="w-4 h-4 text-[#EA4D72]" />
            <span className="text-sm text-[#EA4D72]">{error}</span>
          </>
        )}
        {warning && !error && (
          <>
            <AlertCircle className={`w-4 h-4 ${warningType === 'error' ? 'text-warning' : 'text-blue-600'}`} />
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
      <div className="flex items-center gap-2">
        {actionButton && (
          <Button 
            variant="outline" 
            size="sm"
            className="border-action-secondary text-action-secondary hover:bg-action-secondary/10 font-semibold text-xs"
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
