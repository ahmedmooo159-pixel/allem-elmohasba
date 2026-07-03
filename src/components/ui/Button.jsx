import "./Button.css";

function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
}) {
  return (
    <button
      className={`btn btn-${variant}`}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;