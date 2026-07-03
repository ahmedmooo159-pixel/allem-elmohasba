export default function Avatar({
  src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCrgnrzCL8xuD0oGsncCMTj8rifgBubfJ0YW4682lBJRn3HAwXwpKY1wswBrUsatVZW-jXXMCej-bSDyqAnwhANYY1_nJN1eFv9r5JzP5t7YokwWcRYSTePkDSQmRnNrgnHYEhWH5ukfGJh2311PFlo5IBX5Ah-kUl0fibmhcfQNLNFBk41w7NbTwkbj75KgWH2gVyra81BDtckg273IlbGOfUDL2mKcpdBk8U58RCxlUJufRdNG7WQxXx1ETQDZSO9yCw_1MoWhNg",
  size = "md", // "sm", "md", "lg", "xl"
  status = null, // "online", "offline" or null
  alt = "Avatar",
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`relative ${selectedSize} flex-shrink-0`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full rounded-full border border-primary/20 object-cover shadow-sm"
      />
      {status && (
        <span
          className={`absolute bottom-0 left-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
            status === "online" ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      )}
    </div>
  );
}
