export default function ProgressCard({
  title = "التقدم الكلي",
  value = 66,
  className = "",
}) {
  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      <h4 className="font-headline-md text-sm mb-4 text-on-surface">الإنجاز</h4>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="text-on-surface-variant">{title}</span>
          <span className="font-bold text-primary">{value}%</span>
        </div>
        <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
