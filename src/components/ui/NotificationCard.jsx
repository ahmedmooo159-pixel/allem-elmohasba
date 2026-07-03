export default function NotificationCard({
  icon = "notifications",
  message = "محتوى الإشعار هنا...",
  time = "منذ قليل",
  actionText = null,
  actionColor = "primary", // "primary" | "tertiary" | "error"
  onActionClick,
}) {
  const getActionColorClass = () => {
    switch (actionColor) {
      case "tertiary":
        return "text-tertiary";
      case "error":
        return "text-error";
      default:
        return "text-primary";
    }
  };

  const getIconColorClass = () => {
    switch (icon) {
      case "description":
        return "bg-secondary-container text-on-secondary-container";
      case "chat":
        return "bg-surface-container-highest text-on-surface-variant";
      case "quiz":
      case "task_alt":
        return "bg-primary/10 text-primary";
      default:
        return "bg-surface-container-low text-on-surface-variant";
    }
  };

  return (
    <div className="flex gap-4 group">
      <div className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-lg ${getIconColorClass()}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex-1 border-b border-outline-variant/20 pb-4">
        <p className="font-label-sm text-on-surface leading-snug">
          {message}
        </p>
        <div className="flex justify-between items-center mt-1">
          <span className="text-[10px] text-on-surface-variant">{time}</span>
          {actionText && (
            <button
              onClick={onActionClick}
              className={`text-[10px] font-bold hover:underline bg-transparent border-none cursor-pointer ${getActionColorClass()}`}
            >
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
