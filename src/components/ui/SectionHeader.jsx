export default function SectionHeader({
  title,
  description,
  actionText,
  actionIcon,
  onActionClick,
  children,
}) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
      <div className="space-y-1">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          {title}
        </h2>
        {description && (
          <p className="font-body-lg text-on-surface-variant">{description}</p>
        )}
      </div>
      <div className="flex gap-3 w-full md:w-auto justify-end">
        {actionText && (
          <button
            onClick={onActionClick}
            className="px-6 h-12 bg-primary-container text-on-primary-container rounded-xl font-label-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            {actionIcon && (
              <span className="material-symbols-outlined">{actionIcon}</span>
            )}
            <span>{actionText}</span>
          </button>
        )}
        {children}
      </div>
    </section>
  );
}
