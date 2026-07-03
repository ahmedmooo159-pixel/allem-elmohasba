export default function ChapterTabs({
  tabs = ["كل الفصول", "الفصل الأول", "الفصل الثاني", "الفصل الثالث", "الفصل الرابع"],
  activeTab = 0,
  onChange,
}) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar border-b border-outline-variant/30 flex gap-4 scroll-smooth">
      <div className="flex gap-6 pb-2 min-w-max px-1">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={index}
              onClick={() => onChange && onChange(index)}
              className={`pb-3 font-label-sm text-sm relative transition-all duration-200 ${
                isActive
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {tab}
              {isActive && (
                <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
