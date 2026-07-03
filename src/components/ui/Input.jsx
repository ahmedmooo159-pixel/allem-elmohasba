export default function Input({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  ...props
}) {
  return (
    <div className="space-y-xs w-full">
      {label && (
        <label className="font-label-sm text-label-sm text-on-surface-variant block px-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
            {icon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-[56px] bg-surface-container-low border rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline/60 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
            icon ? "pr-12 pl-4" : "px-4"
          } ${error ? "border-error" : "border-outline-variant/30"}`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs text-error px-1 mt-1">{error}</p>
      )}
    </div>
  );
}
