export default function LoadingState({ message = "جاري تحميل البيانات..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
      {/* Typing indicator-like floating spheres or spinner */}
      <div className="flex items-center gap-1.5 justify-center py-4">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
      </div>
      <p className="text-sm font-label-sm text-on-surface-variant italic">
        {message}
      </p>
    </div>
  );
}
