export default function SearchBar({ placeholder = "ابحث عن دروس أو قيود...", value, onChange, className = "" }) {
  return (
    <div className={`relative w-full ${className}`}>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60">
        search
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-10 pr-10 pl-4 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary/20 font-body-md text-on-surface placeholder:text-on-surface-variant/40"
      />
    </div>
  );
}
