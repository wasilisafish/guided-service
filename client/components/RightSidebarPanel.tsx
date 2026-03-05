import {
  User,
  StickyNote,
  ListChecks,
  Shield,
  Rss,
  Landmark,
  Paperclip,
  HelpCircle,
} from "lucide-react";
import { Tab, TabList } from "@/components/dls/Tab";

const ITEMS = [
  { id: "info", icon: User, label: "Info" },
  { id: "notes", icon: StickyNote, label: "Notes" },
  { id: "tasks", icon: ListChecks, label: "Tasks" },
  { id: "policies", icon: Shield, label: "Policies" },
  { id: "feed", icon: Rss, label: "Feed" },
  { id: "loans", icon: Landmark, label: "Loans" },
  { id: "files", icon: Paperclip, label: "Files" },
  { id: "help", icon: HelpCircle, label: "Help" },
] as const;

export type RightSidebarItemId = (typeof ITEMS)[number]["id"];

export interface RightSidebarPanelProps {
  /** Which item to show as active (e.g. "info"). Optional. */
  activeItem?: RightSidebarItemId;
}

export function RightSidebarPanel({ activeItem }: RightSidebarPanelProps) {
  return (
    <div className="border-l border-neutral-gray-10 flex-shrink-0 bg-white">
      <TabList orientation="vertical">
        {ITEMS.map(({ id, icon, label }) => (
          <Tab
            key={id}
            label={label}
            icon={icon}
            orientation="vertical"
            active={activeItem === id}
          />
        ))}
      </TabList>
    </div>
  );
}
