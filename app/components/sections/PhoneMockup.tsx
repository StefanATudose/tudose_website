import type { AppUsageItem as AppUsageItemType } from "@/app/types";
import { appUsageData } from "@/app/data";

function AppUsageItem({ item }: { item: AppUsageItemType }) {
  const isBlocked = item.app.toLowerCase().includes("blocked");
  const iconClass = isBlocked ? "fas fa-lock text-white text-sm" : "fas fa-brain text-white text-sm";
  
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
      <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}>
        <i className={iconClass}></i>
      </div>
      <div className="flex-1">
        <p className="text-white text-xs font-medium">{item.app}</p>
      </div>
      <p className="text-white/60 text-xs font-semibold">{item.time}</p>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="shrink-0 flex justify-center">
      <div className="relative">
        {/* Phone frame */}
        <div className="w-64 h-130 bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
          <div className="w-full h-full bg-[#121212] rounded-[2.5rem] overflow-hidden relative flex flex-col justify-between p-4 border border-white/10">
            {/* Status bar & Dynamic Island Notch */}
            <div className="h-6 flex items-center justify-center">
              <div className="w-20 h-4 bg-black rounded-full"></div>
            </div>

            {/* App content */}
            <div className="flex-grow flex flex-col justify-center">
              <p className="text-white/60 text-[10px] uppercase tracking-widest text-center mb-1">Focus Mode Active</p>
              <p className="text-white text-sm font-semibold text-center mb-4">Today&apos;s Screen Time</p>
              <div className="text-center mb-6">
                <p className="text-4xl font-extrabold text-white">3h 40m</p>
                <p className="text-emerald-400 text-xs mt-1">
                  <i className="fas fa-arrow-down mr-1"></i>
                  64% reduction
                </p>
              </div>

              {/* Minimal Progress Ring */}
              <div className="flex justify-center mb-6">
                <div className="w-28 h-28 rounded-full border-4 border-white/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-r-transparent border-b-transparent transform rotate-45"></div>
                  <div className="text-center">
                    <p className="text-white text-xl font-bold">100%</p>
                    <p className="text-white/40 text-[9px] uppercase tracking-wider">Clean Day</p>
                  </div>
                </div>
              </div>

              {/* App list */}
              <div className="space-y-2">
                {appUsageData.map((item, i) => (
                  <AppUsageItem key={i} item={item} />
                ))}
              </div>
            </div>

            {/* Home indicator bar */}
            <div className="h-4 flex items-center justify-center">
              <div className="w-24 h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Decorative background glows */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}