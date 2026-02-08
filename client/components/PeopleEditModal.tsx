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

interface PersonData {
  name: string;
  badge: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
}

interface PeopleEditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: PersonData;
}

export function PeopleEditModal({
  open,
  onOpenChange,
  initialData = {
    name: "Elliot McMahon",
    badge: "Named insured",
    gender: "Male",
    dob: "09/12/1990",
    phone: "(876) 456-8762",
    email: "elliot@gmail.com",
  },
}: PeopleEditModalProps) {
  const [formData, setFormData] = useState<PersonData>(initialData);

  const handleChange = (field: keyof PersonData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saved:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b border-neutral-gray-10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-bold">Edit Person</DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="w-6 h-6 flex items-center justify-center hover:bg-neutral-gray-5 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 py-6 space-y-4 max-h-[600px] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="col-span-2">
              <Label htmlFor="name" className="text-sm font-semibold mb-2 block">
                Full Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Badge/Role */}
            <div className="col-span-2">
              <Label htmlFor="badge" className="text-sm font-semibold mb-2 block">
                Role
              </Label>
              <select
                id="badge"
                value={formData.badge}
                onChange={(e) => handleChange("badge", e.target.value)}
                className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
              >
                <option value="Named insured">Named insured</option>
                <option value="On the deed">On the deed</option>
                <option value="Co-insured">Co-insured</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <Label htmlFor="gender" className="text-sm font-semibold mb-2 block">
                Gender
              </Label>
              <select
                id="gender"
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full border border-neutral-gray-30 rounded px-3 py-2 text-sm"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <Label htmlFor="dob" className="text-sm font-semibold mb-2 block">
                Date of Birth
              </Label>
              <Input
                id="dob"
                type="date"
                value={formData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-sm font-semibold mb-2 block">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-semibold mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full"
              />
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
