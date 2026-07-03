export default function StatsCard({
  title,
  value,
  icon,
  badge,
  badgeColor = "primary", // "primary", "secondary", "tertiary", "error"
  type = "text", // "text", "progress", "avatars", "stars"
  progressValue = 0,
  starsCount = 0,
  subtitle,
}) {
  const getBadgeColorClass = () => {
    switch (badgeColor) {
      case "tertiary":
        return "text-tertiary font-bold";
      case "error":
        return "text-error font-bold";
      case "secondary":
        return "text-on-secondary-container font-label-sm";
      default:
        return "text-primary font-bold";
    }
  };

  const getIconColorClass = () => {
    switch (badgeColor) {
      case "secondary":
        return "bg-secondary-container text-on-secondary-container";
      case "tertiary":
        return "bg-tertiary-container text-on-tertiary-container";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-sm flex flex-col gap-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${getIconColorClass()}`}>
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        {badge && (
          <span className={`text-sm ${getBadgeColorClass()}`}>{badge}</span>
        )}
      </div>

      <div>
        <p className="text-on-surface-variant font-label-sm">{title}</p>
        <h3 className="text-headline-md font-display-lg text-on-surface">{value}</h3>
      </div>

      {type === "progress" && (
        <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: `${progressValue}%` }}></div>
        </div>
      )}

      {type === "avatars" && (
        <div className="flex -space-x-2 space-x-reverse">
          <div className="w-6 h-6 rounded-full border-2 border-white bg-primary"></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-tertiary"></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-secondary"></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-[8px] font-bold">+5</div>
        </div>
      )}

      {type === "stars" && (
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`material-symbols-outlined text-sm ${
                star <= starsCount ? "text-primary" : "text-primary/30"
              }`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
      )}

      {type === "text" && subtitle && (
        <p className="text-xs text-on-surface-variant">{subtitle}</p>
      )}
    </div>
  );
}
