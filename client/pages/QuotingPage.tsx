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
  Edit,
  Car,
  Scale,
  FileText,
  RotateCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TopBreadcrumb } from "@/components/TopBreadcrumb";

export default function QuotingPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [primaryHomeChecked, setPrimaryHomeChecked] = useState(true);
  const [vehicleChecked, setVehicleChecked] = useState(true);
  const [selectedPeople, setSelectedPeople] = useState("elliot-jessica");
  const [policyType, setPolicyType] = useState("ho6");

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
          <TopBreadcrumb currentStep="quoting" />
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto p-8 space-y-8">
              <h2 className="font-bold text-2xl">Quoting configurations</h2>

              {/* Primary Home Section */}
              <div className="border-b border-neutral-gray-10 pb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Checkbox 
                    checked={primaryHomeChecked}
                    onCheckedChange={(checked) => setPrimaryHomeChecked(checked as boolean)}
                    className="w-5 h-5"
                  />
                  <h3 className="font-bold text-xl">Primary home</h3>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs font-semibold">
                    Renters (HO6)
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Badge>
                </div>

                {primaryHomeChecked && (
                  <div className="ml-8 space-y-4">
                    <p className="text-base">614 Basswood Dr, Spring, TX, 77386-1264</p>
                    
                    <div className="flex flex-col gap-3 text-base">
                      <div className="flex items-center gap-3">
                        <span className="text-text-muted w-40">Insured people</span>
                        <Select value={selectedPeople} onValueChange={setSelectedPeople}>
                          <SelectTrigger className="h-9 border-neutral-gray-10" style={{ width: '282px' }}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="elliot-jessica">
                              Elliot McMahon, Jessica McMahon
                            </SelectItem>
                            <SelectItem value="elliot">
                              Elliot McMahon
                            </SelectItem>
                            <SelectItem value="jessica">
                              Jessica McMahon
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-text-muted w-40">Policy type</span>
                        <Select value={policyType} onValueChange={setPolicyType}>
                          <SelectTrigger className="h-9 border-neutral-gray-10" style={{ width: '282px' }}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ho6">Renters (HO6)</SelectItem>
                            <SelectItem value="ho3">Renters (HO3)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-3">Quoting coverage</h4>
                      <div className="flex items-center mb-4">
                        <span className="text-text-muted w-40">Coverage level</span>
                        <span>Match current insurance</span>
                      </div>

                      <div className="flex items-center gap-8 border border-neutral-gray-30 rounded-lg p-4">
                        <div>
                          <div className="text-sm text-text-muted mb-1">Dwelling</div>
                          <div className="font-semibold text-lg">$230,000</div>
                        </div>
                        <div>
                          <div className="text-sm text-text-muted mb-1">Deductible</div>
                          <div className="font-semibold text-lg">$1,000</div>
                        </div>
                        <button className="ml-4">
                          <Edit className="w-5 h-5 text-action-secondary" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Vehicles Section */}
              <div className="space-y-6">
                <h3 className="font-bold text-xl">Vehicles</h3>

                <div>
                  <h4 className="font-semibold text-base mb-3">Drivers</h4>
                  <div className="flex items-center">
                    <span className="text-text-muted w-40">Included drivers</span>
                    <span>Elliot McMahon, Jessica McMahon</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Checkbox 
                      checked={vehicleChecked}
                      onCheckedChange={(checked) => setVehicleChecked(checked as boolean)}
                      className="w-5 h-5"
                    />
                    <h4 className="font-bold text-lg">2006 Ford Explorer</h4>
                  </div>

                  {vehicleChecked && (
                    <div className="ml-8 space-y-4">
                      <div className="flex items-center">
                        <span className="text-text-muted w-40">Level of protection</span>
                        <span>Better ($100K/$300K)</span>
                      </div>

                      <div className="bg-white border border-neutral-gray-30 rounded-lg overflow-hidden">
                        <div className="flex items-center border-b border-neutral-gray-10">
                          <button className="flex-1 px-4 py-3 text-left hover:bg-neutral-gray-5 transition-colors">
                            <ChevronRight className="w-5 h-5 inline" />
                          </button>
                          <div className="flex-1 px-4 py-3 font-semibold border-l border-neutral-gray-10">BI limits</div>
                          <div className="flex-1 px-4 py-3 font-semibold border-l border-neutral-gray-10">UM | UIM</div>
                          <div className="flex-1 px-4 py-3 font-semibold border-l border-neutral-gray-10">Property damage</div>
                          <div className="flex-1 px-4 py-3 font-semibold border-l border-neutral-gray-10">UMPD</div>
                          <div className="flex-1 px-4 py-3 font-semibold border-l border-neutral-gray-10">Med pay</div>
                          <div className="w-12 px-4 py-3 border-l border-neutral-gray-10">
                            <Edit className="w-5 h-5 text-action-secondary" />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex-1 px-4 py-3"></div>
                          <div className="flex-1 px-4 py-3 border-l border-neutral-gray-10">
                            <div className="text-sm">$100K person</div>
                            <div className="text-sm">$300K accident</div>
                          </div>
                          <div className="flex-1 px-4 py-3 border-l border-neutral-gray-10">
                            <div className="text-sm">$100K person</div>
                            <div className="text-sm">$300K accident</div>
                          </div>
                          <div className="flex-1 px-4 py-3 border-l border-neutral-gray-10">
                            <div className="text-sm">$100K property</div>
                          </div>
                          <div className="flex-1 px-4 py-3 border-l border-neutral-gray-10">
                            <div className="text-sm">$100K property</div>
                          </div>
                          <div className="flex-1 px-4 py-3 border-l border-neutral-gray-10">
                            <div className="text-sm">$2K</div>
                          </div>
                          <div className="w-12 px-4 py-3 border-l border-neutral-gray-10"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Current Insurance */}
          <div className="w-80 border-l border-neutral-gray-10 bg-white overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Primary Home Insurance */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Current insurance</h3>
                  <button>
                    <Edit className="w-5 h-5 text-action-secondary" />
                  </button>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Carrier</span>
                    <span className="font-semibold">AAA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Exp date</span>
                    <span className="font-semibold">12/01/2022</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Dwelling</span>
                    <span className="font-semibold">$230,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Deductible</span>
                    <span className="font-semibold">$2,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Premium</span>
                    <span className="font-semibold">$1,100</span>
                  </div>
                </div>
              </div>

              {/* Second Home Insurance */}
              <div className="pt-6 border-t border-neutral-gray-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Current insurance</h3>
                  <button>
                    <Edit className="w-5 h-5 text-action-secondary" />
                  </button>
                </div>
                <p className="text-sm text-text-muted italic">No information added</p>
              </div>

              {/* Vehicle Insurance */}
              <div className="pt-6 border-t border-neutral-gray-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Current insurance</h3>
                  <button>
                    <Edit className="w-5 h-5 text-action-secondary" />
                  </button>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Carrier</span>
                    <span className="font-semibold">Safeco</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Exp date</span>
                    <span className="font-semibold">05/09/2022</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">BI limits</span>
                    <span className="font-semibold">$100K/$300K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Premium</span>
                    <span className="font-semibold">$1,100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation
          buttons={[
            {
              children: (
                <>
                  Finalize
                  <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )
            },
            {
              label: "Request quotes",
              onClick: () => navigate('/quote-requests')
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
