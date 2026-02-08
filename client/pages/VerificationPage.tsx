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
  Edit,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TopBreadcrumb } from "@/components/TopBreadcrumb";
import { EligibilityModal } from "@/components/EligibilityModal";
import { PeopleEditModal } from "@/components/PeopleEditModal";
import { HomeProfilingModal } from "@/components/HomeProfilingModal";

export default function VerificationPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eligibilityModalOpen, setEligibilityModalOpen] = useState(false);
  const [peopleModalOpen, setPeopleModalOpen] = useState(false);
  const [homeProfilingModalOpen, setHomeProfilingModalOpen] = useState(false);

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
            className="text-lg font-semibold -tracking-[0.3px] hover:text-action-primary transition-colors cursor-pointer whitespace-nowrap"
          >
            Elliot McMahon
          </button>
          <Badge className="bg-violet text-white border-none rounded px-2 py-1 text-xs font-semibold w-auto flex-grow-0">
            Roundpoint
          </Badge>
          <ChevronRight className="w-4 h-4 text-neutral-gray-30" />
          <TopBreadcrumb currentStep="data-verification" />
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto p-8 space-y-8">
              {/* People Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="font-bold text-xl">People</h2>
                  <button
                    onClick={() => setPeopleModalOpen(true)}
                    className="ml-auto"
                  >
                    <Edit className="w-5 h-5 text-action-secondary" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 border border-neutral-gray-30 rounded-lg">
                    <PersonCard
                      name="Elliot McMahon"
                      badge="Named insured"
                      badgeColor="bg-azure-95 text-azure-50"
                      gender="Male"
                      dob="09/12/1990"
                      phone="(876) 456-8762"
                      email="elliot@gmail.com"
                    />
                  </div>
                  <div className="p-4 border border-neutral-gray-30 rounded-lg">
                    <PersonCard
                      name="Jennifer McMahon"
                      badge="On the deed"
                      badgeColor="bg-blue-50 text-blue-600"
                      gender="Female"
                      dob="02/02/1990"
                      phone="(876) 334-8762"
                      email="jennmac@gmail.com"
                    />
                  </div>
                  <div className="p-4 border border-neutral-gray-30 rounded-lg">
                    <PersonCard
                      name="Kris McMahon"
                      badge="On the deed"
                      badgeColor="bg-blue-50 text-blue-600"
                      gender="Female"
                      dob="02/20/1990"
                      phone="(876) 334-8762"
                      email="jenmac@g.mail.com"
                    />
                  </div>
                </div>
              </div>

              {/* Home Profiling Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="font-bold text-xl">Home profiling</h2>
                  <button
                    onClick={() => setHomeProfilingModalOpen(true)}
                    className="ml-auto"
                  >
                    <Edit className="w-5 h-5 text-action-secondary" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Primary Home Header */}
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-lg">Primary home 614 Basswood Dr, Spring, TX, 77386-1264</h3>
                    <button className="text-action-secondary" />
                    <button className="text-action-secondary" />
                  </div>

                  <p className="text-base">
                    This home is <span className="font-semibold">single family detached</span> · 2457 sqft · 1 stories · 2ba · built in 1970 · detached 2-cars garage
                  </p>

                  <p className="text-base">
                    <span className="font-semibold">Home construction is</span> masonry · no basement · Brick Veneer or Brick on Frame · no other structures
                  </p>

                  <p className="text-base">
                    <span className="font-semibold">On the deed</span> Wesley Haney
                  </p>

                  {/* Eligibility Card */}
                  <Card className="border-neutral-gray-30 rounded-lg p-4 bg-[#F0F9F4]">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-bold text-base">Eligibility</h4>
                      <button onClick={() => setEligibilityModalOpen(true)}>
                        <Edit className="w-5 h-5 text-action-secondary" />
                      </button>
                    </div>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">Pets</span>
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-success">
                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="font-semibold">Yes</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">What type of pets?</span>
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-success">
                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="font-semibold">Dog, Cat</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">Breeds</span>
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-success">
                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="font-semibold">Other</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">Bite history</span>
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-success">
                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="font-semibold">No</span>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-sm">
                      <ChevronDown className="w-4 h-4" />
                      <span className="font-semibold">No concerns about everything else</span>
                    </button>
                  </Card>

                  {/* Three Column Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {/* Roof */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M3 10L10 3L17 10M5 8V16H15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h4 className="font-bold text-base">Roof</h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Updated year</span>
                          <span className="font-semibold">2021</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Material</span>
                          <span className="font-semibold">Composition</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Shape</span>
                          <span className="font-semibold">Gable</span>
                        </div>
                      </div>
                    </div>

                    {/* Updates & Renovations */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M14 8V6C14 4.89543 13.1046 4 12 4H8C6.89543 4 6 4.89543 6 6V8M3 8H17V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h4 className="font-bold text-base">Updates & Renovations</h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Heating & air year updt</span>
                          <span className="font-semibold">2018</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Plumbing year updt</span>
                          <span className="font-semibold">1970</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Electricity year updt</span>
                          <span className="font-semibold">1990</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Solar panels</span>
                          <span className="font-semibold">No</span>
                        </div>
                      </div>
                    </div>

                    {/* Discounts */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <h4 className="font-bold text-base">Discounts</h4>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Security system?</span>
                          <span className="font-semibold">No</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Smoke detector?</span>
                          <span className="font-semibold">Yes</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Smoke detector type</span>
                          <span className="font-semibold">Regular</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* House Image */}
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop" 
                      alt="House exterior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[60px] border-l border-neutral-gray-10 flex-shrink-0">
            <RightSidebar />
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation
          buttons={[
            { label: "Finalize" },
            {
              label: "Request quotes",
              onClick: () => navigate('/quoting')
            }
          ]}
        />
      </div>

      {/* Modals */}
      <EligibilityModal
        open={eligibilityModalOpen}
        onOpenChange={setEligibilityModalOpen}
        address="614 Basswood Dr, Spring, TX, 77386-1264"
      />
      <PeopleEditModal
        open={peopleModalOpen}
        onOpenChange={setPeopleModalOpen}
      />
      <HomeProfilingModal
        open={homeProfilingModalOpen}
        onOpenChange={setHomeProfilingModalOpen}
      />
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

function PersonCard({
  name,
  badge,
  badgeColor,
  gender,
  dob,
  phone,
  email
}: {
  name: string;
  badge: string;
  badgeColor: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <User className="w-5 h-5 flex-shrink-0" />
        <h3 className="font-bold text-base">{name}</h3>
        <Badge className={`${badgeColor} border-none text-xs ml-auto`}>
          {badge}
        </Badge>
      </div>

      {/* Info Row - Responsive */}
      <div className="flex flex-wrap items-center gap-6 mb-3 text-sm">
        <span className="font-semibold">{gender}</span>
        <span className="font-semibold">{dob}</span>
        <span className="font-semibold">{phone}</span>
        <span className="font-semibold">{email}</span>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-neutral-gray-10 space-y-3">
          <div>
            <p className="text-xs text-text-muted mb-1">Gender</p>
            <p className="font-semibold text-sm">{gender}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-1">Date of Birth</p>
            <p className="font-semibold text-sm">{dob}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-1">Phone</p>
            <p className="font-semibold text-sm">{phone}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted mb-1">Email</p>
            <p className="font-semibold text-sm break-all">{email}</p>
          </div>
        </div>
      )}

      {/* Full Profile Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-action-secondary text-sm flex items-center gap-1 mt-3"
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        Full profile
      </button>
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
