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
    <div className="w-[72px] border-l border-neutral-gray-10 flex-shrink-0 flex flex-col items-center py-4 bg-white">
      {ITEMS.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          type="button"
          className={`w-full py-2 px-1 flex flex-col items-center gap-1.5 transition-colors ${
            activeItem === id
              ? "text-action-primary bg-neutral-gray-5"
              : "text-neutral-gray-60 hover:text-action-primary hover:bg-neutral-gray-5"
          }`}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
}
