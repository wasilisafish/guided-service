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
  Upload,
  Calendar,
  Copy,
  RefreshCw,
  CheckCircle,
  Plus,
  Loader2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SageSureLogo } from "@/components/SageSureLogo";
import { RightSidebarPanel } from "@/components/RightSidebarPanel";

export default function Index() {
  const [activeTab, setActiveTab] = useState("policies");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

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
        {/* Top Header Bar */}
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
          <div className="w-px h-8 bg-neutral-gray-10 shrink-0" />
          <button className="flex items-center gap-1 text-action-secondary font-semibold text-sm px-3 py-2 hover:bg-neutral-gray-5 rounded transition-colors whitespace-nowrap shrink-0">
            See all leads
            <ChevronRight className="w-4 h-4 rotate-90 shrink-0" />
          </button>
          <div className="flex-1 min-w-0" />
          <Button
            variant="outline"
            className="border-action-secondary text-action-secondary hover:bg-action-secondary/5 rounded px-4 py-2 text-sm font-semibold h-9 whitespace-nowrap shrink-0"
            onClick={() => {}}
          >
            Schedule follow-up
            <Plus className="w-4 h-4 ml-1.5" />
          </Button>
          <Button variant="outline" size="icon" className="w-8 h-8 flex-shrink-0 border-action-secondary text-action-secondary hover:bg-action-secondary/5 rounded">
            <Mail className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="w-8 h-8 flex-shrink-0 border-action-secondary text-action-secondary hover:bg-action-secondary/5 rounded">
            <Phone className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => navigate("/comparison")}
            className="bg-action-primary hover:bg-action-primary/90 text-white text-sm font-semibold rounded px-4 py-2 h-9 whitespace-nowrap shrink-0"
          >
            Service
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Info Panel */}
          <div className="w-[440px] flex-shrink-0 overflow-y-auto p-6 space-y-6">
            <ActivitySummarySection />
            <CustomerInfoSection />
            <AssetsSection />
            <LoansSection />
          </div>

          {/* Center Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <TabsList className="h-auto p-0 bg-transparent border-b border-neutral-gray-30 rounded-none w-full justify-start mr-auto">
                  <TabsTrigger
                    value="policies"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-action-primary data-[state=active]:text-action-primary rounded-none pb-3 font-semibold"
                  >
                    Policies
                  </TabsTrigger>
                  <TabsTrigger
                    value="quotes"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-action-primary data-[state=active]:text-action-primary rounded-none pb-3 font-semibold text-text-muted"
                  >
                    Quotes
                  </TabsTrigger>
                  <TabsTrigger
                    value="activities"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-action-primary data-[state=active]:text-action-primary rounded-none pb-3 font-semibold text-text-muted"
                  >
                    Activities
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold">Recent policies</h2>
                <Badge
                  variant="secondary"
                  className="bg-neutral-gray-5 text-neutral-gray-60 border-neutral-gray-60/30"
                >
                  4
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2 border-action-secondary text-action-secondary"
                >
                  All policies
                </Button>
              </div>

              <TabsContent value="policies" className="mt-0">
                <div className="w-full lg:w-1/2">
                  <PolicyCard />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right sidebar - same on every page */}
          <RightSidebarPanel activeItem="info" />
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

const AI_TICKETS_SUMMARY_COPY =
  "We sent a reminder that the SL-2 form (needed for this renewal) was overdue and could lead to nonrenewal. We sent the form for signature and closed the ticket for a bit due to high volume, but kept tracking it. Once the signed form was uploaded, we sent it to underwriting. They approved it, we issued a reinstatement letter and attached it to the policy. The renewal documentation is now fully resolved.";

function ActivitySummarySection() {
  const [aiSummaryModalOpen, setAiSummaryModalOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAiSummaryClick = () => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setAiSummaryModalOpen(true);
    }, 1500);
  };

  return (
    <>
      <Card className="border border-neutral-gray-10 rounded-lg p-6 bg-white shadow-md">
        <div className="flex items-start gap-3 mb-4">
          <Clock className="w-6 h-6 flex-shrink-0 mt-1 text-neutral-gray-60" />
          <div className="flex-1">
            <div className="mb-3">
              <span className="font-bold text-base">Last interaction:</span>
              <span className="text-base ml-2">call 2 days ago</span>
            </div>

            <div className="mb-3">
              <span className="font-bold text-base">Primary Intent:</span>
              <span className="text-base ml-2">Price increase at renewal</span>
            </div>

            <div className="mb-4">
              <span className="font-bold text-base">Re-shop opportunity:</span>
              <span className="text-base ml-2">
                Very high | Last re-shop in 2023
              </span>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-base mb-3">Main activities:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-action-primary flex-shrink-0 mt-1.5" />
                  <span className="text-base">
                    Claim consultation (8/28/2025)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-action-primary flex-shrink-0 mt-1.5" />
                  <span className="text-base">
                    Renewal notice sent | +38% ( 1/21/2026)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-action-primary flex-shrink-0 mt-1.5" />
                  <span className="text-base">
                    Cancellation request received online
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full border-action-secondary text-action-secondary hover:bg-action-secondary/10 font-semibold text-base bg-white"
                onClick={handleAiSummaryClick}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                    Analyzing...
                  </>
                ) : (
                  "AI tickets summary"
                )}
              </Button>
            <Button
              variant="outline"
              className="w-full border-action-secondary bg-white text-neutral-gray-60 hover:bg-neutral-gray-5 hover:text-neutral-gray-80 font-semibold text-base"
            >
              Open last ticket
            </Button>
          </div>
        </div>
      </div>
    </Card>

      <Dialog open={aiSummaryModalOpen} onOpenChange={setAiSummaryModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">AI tickets summary</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-text-muted mb-4">
            Summary of the last tickets within 2 months.
          </p>
          <p className="text-sm text-neutral-gray-80 leading-relaxed whitespace-pre-wrap">
            {AI_TICKETS_SUMMARY_COPY}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}

function CustomerInfoSection() {
  return (
    <Card className="border border-neutral-gray-10 rounded-lg overflow-hidden bg-white shadow-md">
      <div className="p-4 border-b border-neutral-gray-30">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold -tracking-[0.3px]">People</h3>
          <ChevronRight className="w-5 h-5" />
        </div>

        <div className="flex items-start gap-2">
          <User className="w-4 h-4 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 flex-wrap mb-1">
              <span className="font-semibold">Elliot McMahon</span>
              <Badge className="bg-azure-95 text-azure-50 border-azure-50/30 text-xs">
                Primary customer
              </Badge>
            </div>
            <div className="flex items-center gap-2 flex-wrap text-sm">
              <span>05/12/1978</span>
              <div className="w-px h-5 bg-neutral-gray-10" />
              <span>(766)876-7652</span>
              <div className="w-px h-5 bg-neutral-gray-10" />
              <span className="truncate">El.mcmah.872@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start gap-2">
          <User className="w-4 h-4 mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-semibold mb-1">Jennifer McMahon</div>
            <div className="flex items-center gap-2 flex-wrap text-sm">
              <span>1/13/1992</span>
              <div className="w-px h-5 bg-neutral-gray-10" />
              <span>(766)416-2574</span>
              <div className="w-px h-5 bg-neutral-gray-10" />
              <span className="truncate">jenniferGarcia@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-neutral-gray-30">
        <div className="flex items-start gap-2">
          <Archive className="w-4 h-4 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <div className="font-semibold mb-1">Mailing address</div>
            <div className="text-sm">
              4545 Marlborough Dr, San Diego, CA, 92116-4737
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function AssetsSection() {
  return (
    <div className="space-y-0">
      <Card className="border border-neutral-gray-10 rounded-t-lg border-b-0 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold -tracking-[0.3px]">Assets</h3>
          </div>

          <div className="flex items-start gap-2">
            <Home className="w-4 h-4 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold mb-1">Primary home</div>
              <div className="text-sm mb-3">
                4545 Marlborough Dr, San Diego, CA, 92116-4737
              </div>
              <div className="flex items-center gap-2 flex-wrap text-sm">
                <span className="text-text-muted">Built in</span>
                <span className="font-semibold">2000</span>
                <div className="w-px h-5 bg-neutral-gray-10" />
                <span className="text-text-muted">Sqft:</span>
                <span className="font-semibold">4,800</span>
                <div className="w-px h-5 bg-neutral-gray-10" />
                <span className="text-text-muted">Roof updt:</span>
                <span className="font-semibold">2020</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </Card>

      <Card className="border border-neutral-gray-10 rounded-b-lg bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold">Vehicles</span>
            <Badge
              variant="secondary"
              className="bg-neutral-gray-5 text-neutral-gray-60 border-neutral-gray-60/30 text-xs"
            >
              3
            </Badge>
          </div>

          <div className="space-y-3">
            <VehicleItem name="2022 Toyota Tundra" vin="HJ825682568" />
            <VehicleItem name="2024 Mercedes-benz GLE53 amg" vin="9877225633" />
            <VehicleItem name="2022 Toyota Tundra" vin="209482082111" />
          </div>
        </div>
      </Card>
    </div>
  );
}

function VehicleItem({ name, vin }: { name: string; vin: string }) {
  return (
    <div className="flex items-start gap-2">
      <Car className="w-4 h-4 mt-1 flex-shrink-0" />
      <div className="flex-1">
        <div className="font-semibold mb-1">{name}</div>
        <div className="text-sm">
          <span className="text-text-muted">VIN:</span>{" "}
          <span className="font-semibold">{vin}</span>
        </div>
      </div>
    </div>
  );
}

function LoansSection() {
  return (
    <Card className="border border-neutral-gray-10 rounded-lg bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-bold -tracking-[0.3px]">Loans</h3>
          <Badge
            variant="secondary"
            className="bg-neutral-gray-5 text-neutral-gray-60 border-neutral-gray-60/30 text-xs"
          >
            1
          </Badge>
        </div>

        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <div className="font-semibold mb-1">
              Freedom Mortgage Corporation ISAOA/ATIMA
            </div>
            <div className="text-sm mb-2">
              For 4545 Marlborough Dr, San Diego, CA, 92116-4737
            </div>
            <div className="text-sm">
              <span className="text-text-muted">Loan number:</span>{" "}
              <span className="font-semibold">0153712484</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </Card>
  );
}

function PolicyCard() {
  return (
    <Card className="border border-neutral-gray-10 rounded-lg p-6 space-y-3 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border border-neutral-gray-10 rounded flex items-center justify-center">
          <Home className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-sm">Primary home</div>
          <div className="text-sm">4545 Marlborough Dr, San Diego, CA, 92116-4737</div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-action-secondary font-semibold"
        >
          See prior policies
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-action-secondary text-action-secondary font-semibold"
        >
          Full info
        </Button>
      </div>

      <div className="bg-neutral-gray-5 border border-neutral-gray-30 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2">
            <div className="border border-neutral-gray-30 bg-white rounded px-2 py-1">
              <SageSureLogo width={84} height={21} />
            </div>
            <button className="flex items-center gap-2 border border-neutral-gray-30 bg-white rounded px-2 py-1 text-sm font-semibold">
              BSNH3-2024-209765-01
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-action-primary" />
            <span className="font-semibold text-sm">Bound</span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 text-sm">
          <div>
            <div className="text-text-muted">Premium</div>
            <div className="font-semibold">$1,098.00</div>
          </div>
          <div>
            <div className="text-text-muted">Effective</div>
            <div className="font-semibold">09/13/2025</div>
          </div>
          <div>
            <div className="text-text-muted">Expiration</div>
            <div className="font-semibold">09/13/2026</div>
          </div>
          <div>
            <div className="text-text-muted">Coverage</div>
            <div className="font-semibold">$345,000</div>
          </div>
          <div>
            <div className="text-text-muted">Deductible</div>
            <div className="font-semibold">$1,000</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-neutral-gray-80">
              Documents
            </span>
            <Badge
              variant="secondary"
              className="bg-neutral-gray-5 text-neutral-gray-60 border-neutral-gray-60/30 text-xs"
            >
              2
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-action-secondary font-semibold h-8"
            >
              See all documents
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-action-secondary h-8 w-8 p-0"
            >
              <Upload className="w-4 h-4 text-action-secondary" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-neutral-gray-5 px-2 py-1 flex items-center gap-2 text-sm font-medium rounded">
        <Calendar className="w-5 h-5" />
        <span className="truncate">Sean Smith</span>
        <div className="w-px h-5 bg-neutral-gray-10" />
        <RefreshCw className="w-5 h-5" />
        <span className="truncate">Cancellation confirmation</span>
        <Calendar className="w-5 h-5" />
        <span>10/08/2024</span>
      </div>
    </Card>
  );
}

function DocumentItem({
  label,
  name,
  status,
  count,
  isUpload,
}: {
  label: string;
  name: string;
  status: string;
  count: string;
  isUpload?: boolean;
}) {
  return (
    <div className="border border-neutral-gray-30 rounded-lg p-2 flex items-center gap-3 bg-white">
      <div className="flex-1 flex items-center gap-2">
        {label && (
          <Badge className="bg-violet-96 text-violet border-violet/30 text-xs">
            {label}
          </Badge>
        )}
        <span
          className={`text-sm ${name ? "font-semibold" : "text-neutral-gray-60 italic"}`}
        >
          {name || "Application"}
        </span>
        {isUpload && (
          <Button
            size="sm"
            className="bg-action-primary hover:bg-action-primary/90 text-white h-7 px-2 text-xs ml-auto"
          >
            <Upload className="w-3 h-3 mr-1" />
            Upload
          </Button>
        )}
      </div>
      {!isUpload && (
        <div className="flex items-center gap-1 text-sm">
          <CheckCircle className="w-5 h-5 text-success" />
          <span>Sent</span>
          <span className="font-semibold">({count})</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </div>
      )}
      {status === "pending" && (
        <div className="flex items-center gap-1 text-sm">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="text-warning"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.94274 0.223066C9.3508 0.427096 9.68167 0.757973 9.8857 1.16603L15.7769 12.9485C16.2977 13.9901 15.8755 15.2566 14.834 15.7774C14.5412 15.9238 14.2183 16 13.891 16H2.10854C0.944025 16 0 15.056 0 13.8915C0 13.5641 0.0762133 13.2413 0.222604 12.9485L6.11384 1.16603C6.63462 0.124461 7.90116 -0.29772 8.94274 0.223066ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12ZM8 4C7.48716 4 7.06449 4.38604 7.00673 4.88338L7 5V9C7 9.55228 7.44772 10 8 10C8.51284 10 8.93551 9.61396 8.99327 9.11662L9 9V5C9 4.44772 8.55228 4 8 4Z"
              fill="currentColor"
            />
          </svg>
          <span>Pending</span>
        </div>
      )}
    </div>
  );
}

