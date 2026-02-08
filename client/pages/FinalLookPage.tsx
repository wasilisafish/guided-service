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
  Copy,
  FileText,
  CheckCircle,
  Building,
  Menu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { TopBreadcrumb } from "@/components/TopBreadcrumb";

export default function FinalLookPage() {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("final-look");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        {/* Top Header Bar with User Info and Breadcrumb */}
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
            className="text-sm font-semibold -tracking-[0.3px] hover:text-action-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            Elliot McMahon
          </button>
          <Badge className="bg-violet text-white border-none rounded px-2 py-0.5 text-xs font-semibold h-6">
            Roundpoint
          </Badge>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <TopBreadcrumb currentStep="finalize" />
          <Badge className="bg-orange-100 text-orange-700 border-none rounded px-3 py-1 text-sm font-semibold">
            Dispositions for service
          </Badge>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-64 border-r border-neutral-gray-10 bg-white overflow-y-auto p-6">
            <div className="space-y-6">
              <h2 className="font-bold text-base">Rewrite policy</h2>
              
              <RadioGroup value={selectedSection} onValueChange={setSelectedSection}>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="home" id="home-section" />
                  <Label htmlFor="home-section" className="font-normal cursor-pointer">Home</Label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="final-look" id="final-look-section" />
                  <Label htmlFor="final-look-section" className="font-normal cursor-pointer">Final look</Label>
                </div>
              </RadioGroup>

              <Button 
                variant="outline" 
                className="w-full border-action-secondary text-action-secondary hover:bg-action-secondary/10 font-semibold"
              >
                Add policy
              </Button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-4xl space-y-8">
              <h2 className="font-bold text-2xl">Final look</h2>

              {/* Policy Cancelled Section */}
              <div>
                <h3 className="font-bold text-lg mb-4">Policy cancelled</h3>
                
                <Card className="border-neutral-gray-30 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Home className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Home policy</h4>
                      <p className="text-sm text-text-muted mb-3">614 Basswood Dr, Spring, TX, 77386-1264</p>

                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-text-muted mb-1">Carrier</div>
                          <div className="font-semibold">AAA</div>
                        </div>
                        <div>
                          <div className="text-text-muted mb-1">Effective</div>
                          <div className="font-semibold">05/09/2024</div>
                        </div>
                        <div>
                          <div className="text-text-muted mb-1">Premium</div>
                          <div className="font-semibold">$5,063/y</div>
                        </div>
                        <div>
                          <div className="text-text-muted mb-1">Policy #</div>
                          <div className="flex items-center gap-1">
                            <span className="font-semibold">B257968262</span>
                            <button className="hover:bg-neutral-gray-5 rounded p-1">
                              <Copy className="w-3 h-3 text-text-muted" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>
                </Card>
              </div>

              {/* Policy Rewritten Section */}
              <div>
                <h3 className="font-bold text-lg mb-4">Policy rewritten</h3>
                
                <Card className="border-neutral-gray-30 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Home className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Home policy</h4>
                      <p className="text-sm text-text-muted mb-3">614 Basswood Dr, Spring, TX, 77386-1264</p>

                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-text-muted mb-1">Carrier</div>
                          <div className="font-semibold">Safeco</div>
                        </div>
                        <div>
                          <div className="text-text-muted mb-1">Effective</div>
                          <div className="font-semibold">05/09/2024</div>
                        </div>
                        <div>
                          <div className="text-text-muted mb-1">Premium</div>
                          <div className="font-semibold">$1,098/y</div>
                        </div>
                        <div>
                          <div className="text-text-muted mb-1">Policy #</div>
                          <div className="flex items-center gap-1">
                            <span className="font-semibold">MKA335473</span>
                            <button className="hover:bg-neutral-gray-5 rounded p-1">
                              <Copy className="w-3 h-3 text-text-muted" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>
                </Card>
              </div>

              {/* Documents You Collected Section */}
              <div>
                <h3 className="font-bold text-lg mb-4">Documents you collected</h3>
                
                <div className="space-y-2">
                  <DocumentItem 
                    name="Dec_elliot_87634242.pdf"
                    badge="Dec page"
                    size="0.5 MB"
                    uploader="Bertram Kuai"
                    date="10/08/2024"
                    status="not-sent"
                    amount="$0 of 2"
                  />
                  <DocumentItem 
                    name="Replacement_cost_Elliot_85636363.pdf"
                    badge="RCE"
                    size="0.1 MB"
                    uploader="Bertram Kuai"
                    date="10/08/2024"
                    status="not-sent"
                    amount="$0 of 2"
                  />
                  <DocumentItem 
                    name="LPL_Signed.pdf"
                    badge="LPR"
                    size="0.5 MB"
                    uploader="AMF"
                    date="10/08/2024"
                    status="completed"
                  />
                  <DocumentItem 
                    name="Application.pdf"
                    badge="App/Unsigned"
                    size="0.6 MB"
                    uploader="AMF"
                    date="10/08/2024"
                    status="not-sent"
                    amount="$0 of 2"
                  />
                </div>

                <button className="text-action-secondary text-sm font-semibold mt-3 hover:underline flex items-center gap-1">
                  <ChevronDown className="w-4 h-4" />
                  See all 8 documents
                </button>
              </div>

              {/* Review Primary Loan Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Review primary loan</h3>
                  <button className="text-action-secondary text-sm font-semibold hover:underline">
                    Select primary
                  </button>
                </div>
                
                <Card className="border-neutral-gray-30 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Freedom Mortgage Corporation ISAOA/ATIMA</h4>
                      <p className="text-sm text-text-muted mb-3">Mortgager Issue: 300 Market St 4t, Roanoke, VA, 24011-2134</p>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">3339473</span>
                        <button className="hover:bg-neutral-gray-5 rounded p-1">
                          <Copy className="w-3 h-3 text-text-muted" />
                        </button>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>
                </Card>

                <button className="text-action-secondary text-sm font-semibold mt-3 hover:underline flex items-center gap-1">
                  <ChevronDown className="w-4 h-4" />
                  See all 3 loans
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[60px] border-l border-neutral-gray-10 flex-shrink-0">
            <RightSidebar />
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="h-16 border-t border-neutral-gray-10 bg-white flex items-center justify-end px-6 gap-3">
          <Button className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold">
            Proceed
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

function DocumentItem({
  name,
  badge,
  size,
  uploader,
  date,
  status,
  amount
}: {
  name: string;
  badge: string;
  size: string;
  uploader: string;
  date: string;
  status: "not-sent" | "completed";
  amount?: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 border border-neutral-gray-30 rounded-lg hover:bg-neutral-gray-5 transition-colors">
      <FileText className="w-5 h-5 text-green-600 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-sm truncate">{name}</h4>
          <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-xs flex-shrink-0">
            {badge}
          </Badge>
        </div>
        <p className="text-xs text-text-muted">
          {size} · Uploaded by {uploader} · on {date}
        </p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        {status === "completed" ? (
          <div className="flex items-center gap-1">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-sm font-semibold">Completed</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold">Not sent yet</span>
              {amount && (
                <>
                  <span className="text-text-muted">({amount})</span>
                  <button className="hover:bg-neutral-gray-10 rounded p-1">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        <ChevronRight className="w-5 h-5 text-text-muted" />
      </div>
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
