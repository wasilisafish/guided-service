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
  Copy,
  Edit,
  AlertTriangle,
  ExternalLink,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TopBreadcrumb } from "@/components/TopBreadcrumb";
import { EligibilityModal } from "@/components/EligibilityModal";
import { PeopleEditModal } from "@/components/PeopleEditModal";
import { HomeProfilingModal } from "@/components/HomeProfilingModal";
import { RightSidebarPanel } from "@/components/RightSidebarPanel";

export default function VerificationPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [eligibilityModalOpen, setEligibilityModalOpen] = useState(false);
  const [peopleModalOpen, setPeopleModalOpen] = useState(false);
  const [homeProfilingModalOpen, setHomeProfilingModalOpen] = useState(false);
  const [homeDetailsExpanded, setHomeDetailsExpanded] = useState(false);
  const [eligibilityExpanded, setEligibilityExpanded] = useState(false);
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
            <TopBreadcrumb currentStep="data-verification" />
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
          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-6xl p-8 space-y-8">
              {/* People Section - one card */}
              <Card className="border border-neutral-gray-10 rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="font-bold text-xl">People</h2>
                    <button
                      onClick={() => setPeopleModalOpen(true)}
                      className="ml-auto"
                    >
                      <Edit className="w-5 h-5 text-action-secondary" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PersonCard
                      name="Elliot McMahon"
                      badge="Named insured"
                      badgeColor="bg-azure-95 text-azure-50"
                      gender="Male"
                      dob="09/12/1990"
                      phone="(876) 456-8762"
                      email="elliot@gmail.com"
                      driverLicense="CA DL 0A12345"
                      isPrimary
                    />
                    <PersonCard
                      name="Jennifer McMahon"
                      badge="On the deed"
                      badgeColor="bg-blue-50 text-blue-600"
                      gender="Female"
                      dob="02/02/1990"
                      phone="(876) 334-8762"
                      email="jennmac@gmail.com"
                      driverLicense="CA DL 0B98765"
                    />
                    <PersonCard
                      name="Kris McMahon"
                      badge="On the deed"
                      badgeColor="bg-blue-50 text-blue-600"
                      gender="Female"
                      dob="02/20/1990"
                      phone="(876) 334-8762"
                      email="jenmac@g.mail.com"
                      driverLicense="CA DL 0C55555"
                    />
                  </div>
                </div>
              </Card>

              {/* Asset Card - Home Profiling */}
              <Card className="border border-neutral-gray-10 rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="p-6 space-y-6">
                  {/* 1. Verification Control Panel (Top) */}
                  <div className="pb-4 border-b border-neutral-gray-10">
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
                      <h2 className="font-bold text-xl">4545 Marlborough Dr, San Diego, CA, 92116-4737</h2>
                      <button onClick={() => setHomeProfilingModalOpen(true)}>
                        <Edit className="w-5 h-5 text-action-secondary" />
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="font-semibold">Duplex</span>
                      <span className="font-semibold">· 3200 sqft</span>
                      <span className="font-semibold">· Built 1931</span>
                      <span className="font-semibold">· Frame</span>
                      <span className="font-semibold">· Roof 2014 (12 yrs)</span>
                      <span className="font-semibold">· Plumbing 2000</span>
                    </div>
                  </div>

                  {/* Home details (collapsible, collapsed by default) */}
                  <div className="border border-neutral-gray-10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setHomeDetailsExpanded(!homeDetailsExpanded)}
                      className="w-full flex items-center justify-between gap-4 p-4 hover:bg-neutral-gray-5 text-left"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-semibold text-sm">Home details snapshot</span>
                        <span className="text-sm text-text-muted">
                          Collected by: <span className="font-semibold text-foreground">Sales Agent John Snow</span> (8 months ago)
                        </span>
                      </span>
                      {homeDetailsExpanded ? <ChevronUp className="w-4 h-4 text-text-muted shrink-0" /> : <ChevronDown className="w-4 h-4 text-text-muted shrink-0" />}
                    </button>
                    {homeDetailsExpanded && (
                      <div className="border-t border-neutral-gray-10 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <ul className="space-y-1">
                              <li>• Duplex</li>
                              <li>• 3200 sqft</li>
                              <li>• 4 full bath</li>
                              <li>• Slab foundation</li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-1">
                              <li>• Built: 1931</li>
                              <li>• 2 stories</li>
                              <li>• Frame + Stucco</li>
                              <li>• 2-car attached garage</li>
                            </ul>
                          </div>
                          <div>
                            <ul className="space-y-1">
                              <li>• Frame</li>
                              <li>• Foundation Slab</li>
                              <li>• Exterior siding Stucco</li>
                              <li>• Other structures None</li>
                              <li className="text-text-muted">• On the deed: Lisa J Babcock, Nicolo Munna</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Eligibility */}
                  <Card className="border-neutral-gray-20 rounded-lg p-4 bg-[#F0F9F4]">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-base">Eligibility</h4>
                      <button onClick={() => setEligibilityModalOpen(true)}>
                        <Edit className="w-5 h-5 text-action-secondary" />
                      </button>
                    </div>
                    <button
                      onClick={() => setEligibilityExpanded(!eligibilityExpanded)}
                      className="w-full flex items-center gap-2 text-sm text-left"
                    >
                      {eligibilityExpanded ? <ChevronUp className="w-4 h-4 text-action-secondary shrink-0" /> : <ChevronDown className="w-4 h-4 text-action-secondary shrink-0" />}
                      <span className="font-semibold text-action-secondary">{eligibilityExpanded ? "Hide eligibility factors" : "No concerns about everything else"}</span>
                    </button>
                    {eligibilityExpanded && (
                      <div className="mt-4 pt-4 border-t border-neutral-gray-20 space-y-3 text-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-text-muted">Do you have any open claims?</span>
                          <span className="font-semibold shrink-0">No</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-text-muted">Do you run a business out of your home?</span>
                          <span className="font-semibold shrink-0">No</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-text-muted">Do you have any pets?</span>
                          <span className="font-semibold shrink-0">Yes · Dog · Other · No bite history</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-text-muted">Do you have any livestock or hooved animals on the property?</span>
                          <span className="font-semibold shrink-0">No</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-text-muted">Do you have a pool?</span>
                          <span className="font-semibold shrink-0">No</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                          <span className="text-text-muted">Do you have a trampoline?</span>
                          <span className="font-semibold shrink-0">No</span>
                        </div>
                      </div>
                    )}
                  </Card>

                  {/* 5. Aging Systems & Discounts (2 columns) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-base mb-2">Aging Systems</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b border-neutral-gray-10">
                          <span className="font-medium">Plumbing</span>
                          <span className="text-text-muted">2000 <span className="text-[#EA4D72]">(25 yrs)</span></span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-neutral-gray-10">
                          <span className="font-medium">Electrical</span>
                          <span className="text-text-muted">2000 <span className="text-[#EA4D72]">(25 yrs)</span></span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-neutral-gray-10">
                          <span className="font-medium">Roof</span>
                          <span className="text-text-muted">2014 <span className="text-[#EA4D72]">(12 yrs)</span></span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="font-medium">Heating & air</span>
                          <span className="text-text-muted">2016 (10 yrs)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-2">Discounts</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b border-neutral-gray-10">
                          <span className="font-medium">Security system?</span>
                          <span className="text-text-muted">No</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="font-medium">Smoke detector?</span>
                          <span className="text-text-muted">Yes · Regular</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Google Street View - 4545 Marlborough Dr, San Diego */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-base">Google Street View</h3>
                      <a
                        href="https://maps.app.goo.gl/cATT84uPDmXwcRZp9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-action-secondary hover:underline"
                      >
                        4545 Marlborough Dr, San Diego, CA →
                      </a>
                    </div>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-gray-10 border border-neutral-gray-10">
                      {import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY ? (
                        <iframe
                          title="Street view of 4545 Marlborough Dr"
                          src={`https://www.google.com/maps/embed/v1/streetview?key=${import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY}&location=32.7598322,-117.1061675&pano=RoxLHJ54QO0fPKhai_6_aw&heading=105&pitch=0&fov=90`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0 w-full h-full"
                        />
                      ) : (
                        <a
                          href="https://maps.app.goo.gl/cATT84uPDmXwcRZp9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 group"
                        >
                          <img
                            src="/street-view-preview.png"
                            alt="Street view preview"
                            className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                          />
                          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white font-medium text-sm drop-shadow">View Street View on Google Maps</span>
                            <span className="text-white/90 text-xs">Click to open</span>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right sidebar - same on every page */}
          <RightSidebarPanel activeItem="info" />
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation
          buttons={[
            { label: "Finalize" },
            {
              label: "Request quotes",
              onClick: () => navigate("/quoting"),
            },
          ]}
        />
      </div>

      {/* Modals */}
      <EligibilityModal
        open={eligibilityModalOpen}
        onOpenChange={setEligibilityModalOpen}
        address="4545 Marlborough Dr, San Diego, CA, 92116-4737"
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
  email,
  driverLicense,
  isPrimary,
}: {
  name: string;
  badge: string;
  badgeColor: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
  driverLicense?: string;
  isPrimary?: boolean;
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

      {/* Contact info - one line; DOB visible for primary */}
      <p className="text-sm font-semibold mb-3 truncate" title={`${phone} · ${email}`}>
        {phone} · {email}
        {isPrimary && <span className="text-text-muted font-normal"> · DOB {dob}</span>}
      </p>

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
          {driverLicense && (
            <div>
              <p className="text-xs text-text-muted mb-1">Driver license</p>
              <p className="font-semibold text-sm">{driverLicense}</p>
            </div>
          )}
        </div>
      )}

      {/* Full Details (collapsed - archive/secondary info) */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-action-secondary text-sm flex items-center gap-1 mt-3"
      >
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        Full Details
      </button>
    </div>
  );
}

