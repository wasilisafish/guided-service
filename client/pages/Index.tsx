import { useState } from "react";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
  const [activeTab, setActiveTab] = useState("policies");

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Left Navigation Sidebar */}
      <div className="w-[60px] bg-gradient-to-b from-[#330E80] to-[#156EEA] flex-shrink-0 flex flex-col items-center py-4">
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
          <h1 className="text-lg font-semibold -tracking-[0.3px]">Elliot McMahon</h1>
          <Badge className="bg-violet text-white border-none rounded px-2.5 py-0.5 text-xs font-semibold">
            Roundpoint
          </Badge>
          <div className="w-px h-8 bg-neutral-gray-10" />
          <button className="flex items-center gap-1 text-action-secondary font-semibold text-sm px-3 py-2 hover:bg-neutral-gray-5 rounded transition-colors">
            See all leads
            <ChevronRight className="w-4 h-4 rotate-90" />
          </button>
          <div className="flex-1" />
          <button className="w-8 h-8 border border-action-secondary rounded flex items-center justify-center hover:bg-neutral-gray-5 transition-colors">
            <Mail className="w-4 h-4 text-action-secondary" />
          </button>
          <button className="w-8 h-8 border border-action-secondary rounded flex items-center justify-center hover:bg-neutral-gray-5 transition-colors">
            <Phone className="w-4 h-4 text-action-secondary" />
          </button>
          <Button variant="outline" className="border-action-secondary text-action-secondary hover:bg-neutral-gray-5 text-sm font-semibold">
            Schedule follow-up
            <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
          </Button>
          <Button className="bg-action-primary hover:bg-action-primary/90 text-white text-sm font-semibold">
            Service
          </Button>
        </div>

        {/* Activity Banner */}
        <div className="h-8 bg-[#F3FAF6] border-b border-neutral-gray-10 flex items-center px-5 gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.99984 8.66665V1.33331L13.3332 3.99998L7.99984 6.66665M13.7071 6.81457C14.0619 7.908 14.0951 9.08032 13.8028 10.1921C13.5104 11.3038 12.9049 12.3082 12.0582 13.0857C11.2114 13.8632 10.1592 14.3811 9.02661 14.5778C7.89402 14.7745 6.72877 14.6417 5.66949 14.1952C4.61021 13.7487 3.70149 13.0073 3.05145 12.0592C2.4014 11.1111 2.03739 9.9962 2.00273 8.84719C1.96807 7.69817 2.26421 6.56338 2.85592 5.57783C3.44764 4.59227 4.31001 3.79745 5.34045 3.2879M5.33443 6.66469C5.00037 7.10938 4.78289 7.63058 4.7018 8.18082C4.62071 8.73106 4.67859 9.29285 4.87017 9.81499C5.06175 10.3371 5.38094 10.803 5.79865 11.1703C6.21637 11.5375 6.71933 11.7944 7.26172 11.9175C7.80411 12.0406 8.36868 12.026 8.904 11.8751C9.43932 11.7242 9.92836 11.4417 10.3266 11.0534C10.7248 10.6651 11.0195 10.1834 11.1839 9.65204C11.3483 9.12071 11.3771 8.55669 11.2678 8.01136" stroke="black" strokeWidth="0.667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-semibold">Last time customer spoke to CST Elijah Sweet, 12 minutes ago</span>
        </div>


        {/* Main Content Grid */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Info Panel */}
          <div className="w-[440px] flex-shrink-0 overflow-y-auto p-6 space-y-6">
            <CustomerInfoSection />
            <AssetsSection />
            <LoansSection />
          </div>

          {/* Center Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                <Badge variant="secondary" className="bg-neutral-gray-5 text-neutral-gray-60 border-neutral-gray-60/30">4</Badge>
                <Button variant="outline" size="sm" className="ml-2 border-action-secondary text-action-secondary">
                  All policies
                </Button>
              </div>

              <TabsContent value="policies" className="mt-0">
                <PolicyCard />
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Info Sidebar */}
          <div className="w-[60px] border-l border-neutral-gray-10 flex-shrink-0">
            <RightSidebar />
          </div>
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

function CustomerInfoSection() {
  return (
    <Card className="border-neutral-gray-30 rounded-lg overflow-hidden">
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
              <Badge className="bg-azure-95 text-azure-50 border-azure-50/30 text-xs">Primary customer</Badge>
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
            <div className="text-sm">2000 Melrose Ave, Columbus, Ohio, 00000</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function AssetsSection() {
  return (
    <div className="space-y-0">
      <Card className="border-neutral-gray-30 rounded-t-lg border-b-0">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold -tracking-[0.3px]">Assets</h3>
          </div>
          
          <div className="flex items-start gap-2">
            <Home className="w-4 h-4 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold mb-1">Primary home</div>
              <div className="text-sm mb-3">2000 Melrose Ave, Columbus, Ohio</div>
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

      <Card className="border-neutral-gray-30 rounded-b-lg">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold">Vehicles</span>
            <Badge variant="secondary" className="bg-neutral-gray-5 text-neutral-gray-60 border-neutral-gray-60/30 text-xs">3</Badge>
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
    <Card className="border-neutral-gray-30 rounded-lg">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-bold -tracking-[0.3px]">Loans</h3>
          <Badge variant="secondary" className="bg-neutral-gray-5 text-neutral-gray-60 border-neutral-gray-60/30 text-xs">1</Badge>
        </div>
        
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <div className="font-semibold mb-1">Freedom Mortgage Corporation ISAOA/ATIMA</div>
            <div className="text-sm mb-2">For 2000 Melrose Ave, Columbus, Ohio</div>
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
    <Card className="border-neutral-gray-30 rounded-lg p-6 space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 border border-neutral-gray-10 rounded flex items-center justify-center">
          <Home className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-sm">Primary home</div>
          <div className="text-sm">2000 Melrose Ave, Columbus, OH 43215</div>
        </div>
        <Button variant="ghost" size="sm" className="text-action-secondary font-semibold">
          See prior policies
        </Button>
        <Button variant="outline" size="sm" className="border-action-secondary text-action-secondary font-semibold">
          Full info
        </Button>
      </div>

      <div className="bg-neutral-gray-5 border border-neutral-gray-30 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2">
            <div className="border border-neutral-gray-30 bg-white rounded px-2 py-1">
              <svg width="84" height="21" viewBox="0 0 84 21" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M64.8117 8.20243C64.8022 8.20967 64.7913 8.21388 64.7795 8.21388C64.7465 8.21388 64.7207 8.18532 64.7207 8.14948C64.7207 8.13907 64.723 8.1302 64.7261 8.12137L64.7289 8.11671C66.3546 4.07928 70.0559 1.26001 74.3605 1.26001C78.6669 1.26001 82.3691 4.08239 83.993 8.12192L83.9949 8.12658C83.998 8.13491 83.9998 8.14323 83.9998 8.15206C83.9998 8.1879 83.9736 8.21646 83.9424 8.21646C83.931 8.21646 83.9215 8.21284 83.9129 8.20918L83.9048 8.20556C83.1589 7.72658 82.1179 7.42945 80.9652 7.42945C79.6337 7.42945 78.451 7.82583 77.7006 8.43986L77.6979 8.44294C77.6875 8.45127 77.6753 8.45593 77.6613 8.45593C77.6477 8.45593 77.6355 8.45127 77.625 8.44294L77.6214 8.44036C76.8701 7.82578 75.6866 7.42945 74.3564 7.42945C73.0258 7.42945 71.8427 7.82578 71.0914 8.44036L71.0887 8.44244C71.0778 8.45127 71.0652 8.45593 71.0516 8.45593C71.0394 8.45593 71.0271 8.45231 71.019 8.44552L71.014 8.4414C70.2627 7.82633 69.0783 7.42945 67.7467 7.42945C66.6003 7.42945 65.5639 7.72345 64.8194 8.19827L64.8117 8.20243ZM74.9036 8.29096V17.6319C74.9036 18.796 74.0337 19.742 72.9661 19.742C72.1102 19.742 71.3815 19.1332 71.1267 18.2921L71.1249 18.2874C71.1127 18.2376 71.1054 18.1861 71.1054 18.1327C71.1054 17.8178 71.3417 17.5622 71.6314 17.5622C71.864 17.5622 72.0595 17.7254 72.1297 17.9529L72.1306 17.9539C72.2532 18.329 72.5813 18.5981 72.9661 18.5981C73.4544 18.5981 73.8522 18.1643 73.8522 17.6319L73.8513 8.27381L73.8522 8.27068C73.8522 8.24267 73.8717 8.21977 73.897 8.21669L73.9002 8.21615C74.0428 8.20008 74.1894 8.19171 74.3388 8.19171C74.5162 8.19171 74.6886 8.2047 74.8556 8.22547L74.8579 8.22601C74.8828 8.22914 74.9027 8.25145 74.9027 8.28005L74.9036 8.29096Z" fill="#E61616"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0971 14.0581C12.92 14.0581 13.4825 14.0243 13.6332 12.5246C13.7862 11.0133 13.1254 11.0845 12.3579 11.0845H10.776L10.4743 14.0581H12.0971ZM14.6677 19.7028H12.9066L11.7696 15.683H10.3141L9.90691 19.7028H8.16012L9.19326 9.45959H12.6368C14.6796 9.45959 15.656 9.99207 15.3919 12.5968C15.2127 14.3729 14.579 15.0861 13.4525 15.4352L14.6677 19.7028Z" fill="black"/>
              </svg>
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
            <span className="font-bold text-sm text-neutral-gray-80">Documents</span>
            <Badge variant="secondary" className="bg-neutral-gray-5 text-neutral-gray-60 border-neutral-gray-60/30 text-xs">2</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-action-secondary font-semibold h-8">
              See all documents
            </Button>
            <Button variant="outline" size="sm" className="border-action-secondary h-8 w-8 p-0">
              <Upload className="w-4 h-4 text-action-secondary" />
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          <DocumentItem label="DEC" name="Carrier_dec_page_Ellliot.pdf" status="sent" count="2 of 2" />
          <DocumentItem label="RCE" name="RCE_Ellliot.pdf" status="sent" count="2 of 2" />
          <DocumentItem label="Application" name="" status="pending" count="" isUpload />
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

function DocumentItem({ label, name, status, count, isUpload }: { label: string; name: string; status: string; count: string; isUpload?: boolean }) {
  return (
    <div className="border border-neutral-gray-30 rounded-lg p-2 flex items-center gap-3 bg-white">
      <div className="flex-1 flex items-center gap-2">
        {label && (
          <Badge className="bg-violet-96 text-violet border-violet/30 text-xs">{label}</Badge>
        )}
        <span className={`text-sm ${name ? 'font-semibold' : 'text-neutral-gray-60 italic'}`}>
          {name || 'Application'}
        </span>
        {isUpload && (
          <Button size="sm" className="bg-action-primary hover:bg-action-primary/90 text-white h-7 px-2 text-xs ml-auto">
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
      {status === 'pending' && (
        <div className="flex items-center gap-1 text-sm">
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-warning">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.94274 0.223066C9.3508 0.427096 9.68167 0.757973 9.8857 1.16603L15.7769 12.9485C16.2977 13.9901 15.8755 15.2566 14.834 15.7774C14.5412 15.9238 14.2183 16 13.891 16H2.10854C0.944025 16 0 15.056 0 13.8915C0 13.5641 0.0762133 13.2413 0.222604 12.9485L6.11384 1.16603C6.63462 0.124461 7.90116 -0.29772 8.94274 0.223066ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12ZM8 4C7.48716 4 7.06449 4.38604 7.00673 4.88338L7 5V9C7 9.55228 7.44772 10 8 10C8.51284 10 8.93551 9.61396 8.99327 9.11662L9 9V5C9 4.44772 8.55228 4 8 4Z" fill="currentColor"/>
          </svg>
          <span>Pending</span>
        </div>
      )}
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-0">
        <SidebarItem icon={<User />} label="Info" active />
        <SidebarItem icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 7.5H12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M7.5 10.5H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12.2411 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H16.25C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V12.2411C16.875 12.3232 16.8588 12.4045 16.8274 12.4803C16.796 12.5561 16.75 12.625 16.6919 12.6831L12.6831 16.6919C12.625 16.75 12.5561 16.796 12.4803 16.8274C12.4045 16.8588 12.3232 16.875 12.2411 16.875V16.875Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>} label="Notes" />
        <SidebarItem icon={<ClipboardCheck />} label="Tasks" />
        <SidebarItem icon={<Shield />} label="Policies" />
        <SidebarItem icon={<Clock />} label="Feed" />
        <SidebarItem icon={<DollarSign />} label="Loans" />
        <SidebarItem icon={<Paperclip />} label="Files" />
        <SidebarItem icon={<HelpCircle />} label="Help" />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`w-full py-2 px-1 flex flex-col items-center gap-1 text-sm hover:bg-neutral-gray-5 transition-colors ${active ? 'bg-white' : ''}`}>
      <div className="w-5 h-5">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
