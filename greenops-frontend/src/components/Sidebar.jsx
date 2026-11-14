
import {
  LayoutDashboard,
  Server,
  BrainCircuit,
  Lightbulb,
  Leaf,
  FileBarChart,
  Cloud,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Overview", path: "/", icon: LayoutDashboard },
  { name: "Infrastructure", path: "/infrastructure", icon: Server },
  { name: "AI Insights", path: "/ai-insights", icon: BrainCircuit },
  { name: "Recommendations", path: "/recommendations", icon: Lightbulb },
  { name: "Sustainability", path: "/sustainability", icon: Leaf },
  { name: "Reports", path: "/reports", icon: FileBarChart },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#14251C] text-white flex flex-col shrink-0">

      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 p-2 rounded-xl">
            <Cloud size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold">GreenOps</h1>
            <p className="text-xs text-green-300">
              Sustainable Cloud
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">

        <p className="text-xs text-gray-400 uppercase tracking-wider px-3 mb-4">
          Main Menu
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`
              }
            >
              <Icon size={19} />

              <span className="text-sm font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}

      </nav>

      <div className="p-5 border-t border-white/10">
        <p className="text-xs text-gray-400">
          GreenOps Platform
        </p>
        <p className="text-xs text-green-400 mt-1">
          AI-powered sustainability
        </p>
      </div>

    </aside>
  );
}