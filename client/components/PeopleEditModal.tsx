import { useState } from "react";
import { Button } from "@/components/dls/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/dls/Input";

interface PersonData {
  id: string;
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
  people?: PersonData[];
}

const DEFAULT_PEOPLE: PersonData[] = [
  {
    id: "1",
    name: "Elliot McMahon",
    badge: "Named insured",
    gender: "Male",
    dob: "09/12/1990",
    phone: "(876) 456-8762",
    email: "elliot@gmail.com",
  },
  {
    id: "2",
    name: "Jennifer McMahon",
    badge: "On the deed",
    gender: "Female",
    dob: "02/02/1990",
    phone: "(876) 334-8762",
    email: "jennmac@gmail.com",
  },
  {
    id: "3",
    name: "Kris McMahon",
    badge: "On the deed",
    gender: "Female",
    dob: "02/20/1990",
    phone: "(876) 334-8762",
    email: "jenmac@g.mail.com",
  },
];

export function PeopleEditModal({
  open,
  onOpenChange,
  people = DEFAULT_PEOPLE,
}: PeopleEditModalProps) {
  const [selectedPerson, setSelectedPerson] = useState<PersonData>(people[0]);
  const [formData, setFormData] = useState<PersonData>(people[0]);

  const handlePersonChange = (person: PersonData) => {
    setSelectedPerson(person);
    setFormData(person);
  };

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
      <DialogContent className="max-w-3xl p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b border-neutral-gray-10">
          <DialogTitle className="text-lg font-bold">Edit Person</DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="flex max-h-[600px] overflow-hidden">
          {/* Left Sidebar - People List */}
          <div className="w-48 border-r border-neutral-gray-10 bg-neutral-gray-5 overflow-y-auto">
            <div className="p-4 space-y-2">
              {people.map((person) => (
                <button
                  key={person.id}
                  onClick={() => handlePersonChange(person)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    selectedPerson.id === person.id
                      ? "bg-action-primary text-white"
                      : "hover:bg-neutral-gray-10"
                  }`}
                >
                  <div
                    className={`font-semibold text-sm ${selectedPerson.id === person.id ? "text-white" : "text-text-muted"}`}
                  >
                    {person.name}
                  </div>
                  <div
                    className={`text-xs ${selectedPerson.id === person.id ? "text-white/80" : "text-text-muted"}`}
                  >
                    {person.badge}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              {/* Name */}
              <div className="col-span-2">
                <Input
                  id="name"
                  label="Full Name"
                  labelLayout="top"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>

              {/* Badge/Role */}
              <div className="col-span-2">
                <label
                  htmlFor="badge"
                  className="text-sm font-semibold mb-2 block"
                >
                  Role
                </label>
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
                <label
                  htmlFor="gender"
                  className="text-sm font-semibold mb-2 block"
                >
                  Gender
                </label>
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
                <Input
                  id="dob"
                  label="Date of Birth"
                  labelLayout="top"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleChange("dob", e.target.value)}
                />
              </div>

              {/* Phone */}
              <div>
                <Input
                  id="phone"
                  label="Phone"
                  labelLayout="top"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <Input
                  id="email"
                  label="Email"
                  labelLayout="top"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-gray-10 flex items-center justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
