
import {
  Bell,
  Search,
  CircleUserRound,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8">

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          GreenOps Dashboard
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          Monitor. Optimize. Sustain.
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={17} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search infrastructure..."
            className="bg-transparent outline-none text-sm ml-2 w-48"
          />
        </div>

        <button className="relative text-gray-600">
          <Bell size={21} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <CircleUserRound
            size={30}
            className="text-green-700"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-800">
              Administrator
            </p>

            <p className="text-xs text-gray-500">
              GreenOps User
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}