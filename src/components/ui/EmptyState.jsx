export default function EmptyState({
  title = "لا توجد نتائج",
  description = "لم نتمكن من العثور على أي عناصر تطابق بحثك حالياً.",
  icon = "info",
}) {
  return (
    <div className="glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center max-w-lg mx-auto my-8">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 text-on-surface-variant/60">
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>
      <h3 className="font-headline-md text-on-surface mb-2">{title}</h3>
      <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
