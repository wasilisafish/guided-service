import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface HomeProfilingData {
  homeType: string;
  sqft: string;
  stories: string;
  bedrooms: string;
  bathrooms: string;
  yearBuilt: string;
  garageType: string;
  construction: string;
  basement: string;
  exterior: string;
  otherStructures: string;
  peopleOnDeed: string;
  roofYear: string;
  roofMaterial: string;
  roofShape: string;
  heatingYear: string;
  plumbingYear: string;
  electricityYear: string;
  solarPanels: string;
  securitySystem: string;
  securityType: string;
  smokeDetector: string;
  smokeDetectorType: string;
}

interface HomeProfilingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HomeProfilingModal({ open, onOpenChange }: HomeProfilingModalProps) {
  const [formData, setFormData] = useState<HomeProfilingData>({
    homeType: "Single family detached",
    sqft: "2856",
    stories: "2",
    bedrooms: "2",
    bathrooms: "1.5",
    yearBuilt: "2000",
    garageType: "Attached 2-cars garage",
    construction: "Frame",
    basement: "75% finished basement",
    exterior: "Brick Veneer or Brick on Frame",
    otherStructures: "No other structures",
    peopleOnDeed: "Elliot McMahon, Jennifer McMahon",
    roofYear: "2020",
    roofMaterial: "Composition",
    roofShape: "Hip",
    heatingYear: "2020",
    plumbingYear: "2020",
    electricityYear: "2020",
    solarPanels: "No",
    securitySystem: "Yes",
    securityType: "Central",
    smokeDetector: "Yes",
    smokeDetectorType: "Smart",
  });

  const handleChange = (field: keyof HomeProfilingData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saved:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b border-neutral-gray-10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-bold">Edit Home Profiling</DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="w-6 h-6 flex items-center justify-center hover:bg-neutral-gray-5 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 py-6 space-y-6 max-h-[600px] overflow-y-auto">
          {/* Home Details Section */}
          <div>
            <h3 className="font-bold text-base mb-4">Home Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="homeType" className="text-sm font-semibold mb-2 block">
                  Home Type
                </Label>
                <Input
                  id="homeType"
                  value={formData.homeType}
                  onChange={(e) => handleChange("homeType", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="sqft" className="text-sm font-semibold mb-2 block">
                  Square Footage
                </Label>
                <Input
                  id="sqft"
                  type="number"
                  value={formData.sqft}
                  onChange={(e) => handleChange("sqft", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="stories" className="text-sm font-semibold mb-2 block">
                  Stories
                </Label>
                <Input
                  id="stories"
                  type="number"
                  value={formData.stories}
                  onChange={(e) => handleChange("stories", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="bedrooms" className="text-sm font-semibold mb-2 block">
                  Bedrooms
                </Label>
                <Input
                  id="bedrooms"
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => handleChange("bedrooms", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="bathrooms" className="text-sm font-semibold mb-2 block">
                  Bathrooms
                </Label>
                <Input
                  id="bathrooms"
                  type="number"
                  step="0.5"
                  value={formData.bathrooms}
                  onChange={(e) => handleChange("bathrooms", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="yearBuilt" className="text-sm font-semibold mb-2 block">
                  Year Built
                </Label>
                <Input
                  id="yearBuilt"
                  type="number"
                  value={formData.yearBuilt}
                  onChange={(e) => handleChange("yearBuilt", e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="garageType" className="text-sm font-semibold mb-2 block">
                  Garage Type
                </Label>
                <Input
                  id="garageType"
                  value={formData.garageType}
                  onChange={(e) => handleChange("garageType", e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="construction" className="text-sm font-semibold mb-2 block">
                  Construction Material
                </Label>
                <Input
                  id="construction"
                  value={formData.construction}
                  onChange={(e) => handleChange("construction", e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="basement" className="text-sm font-semibold mb-2 block">
                  Basement
                </Label>
                <Input
                  id="basement"
                  value={formData.basement}
                  onChange={(e) => handleChange("basement", e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="exterior" className="text-sm font-semibold mb-2 block">
                  Exterior
                </Label>
                <Input
                  id="exterior"
                  value={formData.exterior}
                  onChange={(e) => handleChange("exterior", e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="otherStructures" className="text-sm font-semibold mb-2 block">
                  Other Structures
                </Label>
                <Input
                  id="otherStructures"
                  value={formData.otherStructures}
                  onChange={(e) => handleChange("otherStructures", e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="peopleOnDeed" className="text-sm font-semibold mb-2 block">
                  On the Deed
                </Label>
                <Input
                  id="peopleOnDeed"
                  value={formData.peopleOnDeed}
                  onChange={(e) => handleChange("peopleOnDeed", e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Roof Section */}
          <div>
            <h3 className="font-bold text-base mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10L10 3L17 10M5 8V16H15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Roof
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="roofYear" className="text-sm font-semibold mb-2 block">
                  Updated Year
                </Label>
                <Input
                  id="roofYear"
                  type="number"
                  value={formData.roofYear}
                  onChange={(e) => handleChange("roofYear", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="roofMaterial" className="text-sm font-semibold mb-2 block">
                  Material
                </Label>
                <select
                  id="roofMaterial"
                  value={formData.roofMaterial}
                  onChange={(e) => handleChange("roofMaterial", e.target.value)}
                  className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
                >
                  <option value="Composition">Composition</option>
                  <option value="Asphalt">Asphalt</option>
                  <option value="Metal">Metal</option>
                  <option value="Tile">Tile</option>
                </select>
              </div>
              <div>
                <Label htmlFor="roofShape" className="text-sm font-semibold mb-2 block">
                  Shape
                </Label>
                <select
                  id="roofShape"
                  value={formData.roofShape}
                  onChange={(e) => handleChange("roofShape", e.target.value)}
                  className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
                >
                  <option value="Hip">Hip</option>
                  <option value="Gable">Gable</option>
                  <option value="Flat">Flat</option>
                </select>
              </div>
            </div>
          </div>

          {/* Updates & Renovations Section */}
          <div>
            <h3 className="font-bold text-base mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14 8V6C14 4.89543 13.1046 4 12 4H8C6.89543 4 6 4.89543 6 6V8M3 8H17V16C17 17.1046 16.1046 18 15 18H5C3.89543 18 3 17.1046 3 16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Updates & Renovations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="heatingYear" className="text-sm font-semibold mb-2 block">
                  Heating & Air Year Update
                </Label>
                <Input
                  id="heatingYear"
                  type="number"
                  value={formData.heatingYear}
                  onChange={(e) => handleChange("heatingYear", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="plumbingYear" className="text-sm font-semibold mb-2 block">
                  Plumbing Year Update
                </Label>
                <Input
                  id="plumbingYear"
                  type="number"
                  value={formData.plumbingYear}
                  onChange={(e) => handleChange("plumbingYear", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="electricityYear" className="text-sm font-semibold mb-2 block">
                  Electricity Year Update
                </Label>
                <Input
                  id="electricityYear"
                  type="number"
                  value={formData.electricityYear}
                  onChange={(e) => handleChange("electricityYear", e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="solarPanels" className="text-sm font-semibold mb-2 block">
                  Solar Panels
                </Label>
                <select
                  id="solarPanels"
                  value={formData.solarPanels}
                  onChange={(e) => handleChange("solarPanels", e.target.value)}
                  className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Discounts Section */}
          <div>
            <h3 className="font-bold text-base mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Discounts
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="securitySystem" className="text-sm font-semibold mb-2 block">
                  Security System
                </Label>
                <select
                  id="securitySystem"
                  value={formData.securitySystem}
                  onChange={(e) => handleChange("securitySystem", e.target.value)}
                  className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <Label htmlFor="securityType" className="text-sm font-semibold mb-2 block">
                  Security System Type
                </Label>
                <select
                  id="securityType"
                  value={formData.securityType}
                  onChange={(e) => handleChange("securityType", e.target.value)}
                  className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
                  disabled={formData.securitySystem === "No"}
                >
                  <option value="Central">Central</option>
                  <option value="Local">Local</option>
                  <option value="Smart">Smart</option>
                </select>
              </div>
              <div>
                <Label htmlFor="smokeDetector" className="text-sm font-semibold mb-2 block">
                  Smoke Detector
                </Label>
                <select
                  id="smokeDetector"
                  value={formData.smokeDetector}
                  onChange={(e) => handleChange("smokeDetector", e.target.value)}
                  className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <Label htmlFor="smokeDetectorType" className="text-sm font-semibold mb-2 block">
                  Smoke Detector Type
                </Label>
                <select
                  id="smokeDetectorType"
                  value={formData.smokeDetectorType}
                  onChange={(e) => handleChange("smokeDetectorType", e.target.value)}
                  className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
                  disabled={formData.smokeDetector === "No"}
                >
                  <option value="Smart">Smart</option>
                  <option value="Battery">Battery</option>
                  <option value="Hardwired">Hardwired</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-gray-10 flex items-center justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-action-secondary text-action-secondary hover:bg-neutral-gray-5 font-semibold"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-action-primary hover:bg-action-primary/90 text-white font-semibold"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
