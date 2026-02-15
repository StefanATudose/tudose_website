import type { AppUsageItem as AppUsageItemType } from "@/app/types";
import { appUsageData } from "@/app/data";

function AppUsageItem({ item }: { item: AppUsageItemType }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
      <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}>
        <i className="fas fa-mobile-alt text-white text-sm"></i>
      </div>
      <div className="flex-1">
        <p className="text-white text-sm">{item.app}</p>
      </div>
      <p className="text-white/60 text-sm">{item.time}</p>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="shrink-0 flex justify-center">
      <div className="relative">
        {/* Phone frame */}
        <div className="w-64 h-130 bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
          <div className="w-full h-full bg-linear-to-b from-[#1a365d] to-[#6b21a8] rounded-[2.5rem] overflow-hidden relative">
            {/* Status bar */}
            <div className="h-8 flex items-center justify-center">
              <div className="w-20 h-6 bg-black rounded-full"></div>
            </div>

            {/* App content */}
            <div className="p-4">
              <p className="text-white text-sm font-medium mb-4">Today's Screen Time</p>
              <div className="text-center mb-6">
                <p className="text-5xl font-bold text-white">2h 34m</p>
                <p className="text-white/60 text-sm">-23% from yesterday</p>
              </div>

              {/* Progress ring */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full border-8 border-white/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-8 border-purple-400 border-r-transparent border-b-transparent transform -rotate-45"></div>
                  <div className="text-center">
                    <p className="text-white text-2xl font-bold">68%</p>
                    <p className="text-white/60 text-xs">Goal</p>
                  </div>
                </div>
              </div>

              {/* App list */}
              <div className="space-y-3">
                {appUsageData.map((item, i) => (
                  <AppUsageItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}