import { Link } from "react-router-dom";

export default function Navbar({ onMenuToggle, role = "student", user }) {
  const defaultUser = {
    name: role === "admin" ? "أستاذ المادة" : "أحمد السعدني",
    roleText: role === "admin" ? "مشرف النظام" : "متدرب معتمد",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrgnrzCL8xuD0oGsncCMTj8rifgBubfJ0YW4682lBJRn3HAwXwpKY1wswBrUsatVZW-jXXMCej-bSDyqAnwhANYY1_nJN1eFv9r5JzP5t7YokwWcRYSTePkDSQmRnNrgnHYEhWH5ukfGJh2311PFlo5IBX5Ah-kUl0fibmhcfQNLNFBk41w7NbTwkbj75KgWH2gVyra81BDtckg273IlbGOfUDL2mKcpdBk8U58RCxlUJufRdNG7WQxXx1ETQDZSO9yCw_1MoWhNg",
  };

  const activeUser = user || defaultUser;

  return (
    <header className="flex flex-row-reverse justify-between items-center px-margin-mobile md:px-margin-desktop w-full h-16 bg-surface/60 backdrop-blur-xl sticky top-0 z-40 border-b border-outline-variant/30 shadow-sm">
      {/* Left side actions (Notifications & Profile) */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            to="/profile"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors duration-200 text-on-surface-variant"
          >
            <span className="material-symbols-outlined">notifications</span>
          </Link>
          {role === "student" && (
            <Link
              to="/ai"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors duration-200 text-on-surface-variant"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
            </Link>
          )}
          <div className="h-8 w-px bg-outline-variant/30"></div>
          <Link to="/profile" className="flex items-center gap-2 mr-2">
            <div className="text-right hidden sm:block">
              <p className="font-label-sm text-on-surface font-semibold">{activeUser.name}</p>
              <p className="text-[10px] text-on-surface-variant">{activeUser.roleText}</p>
            </div>
            <img
              className="w-10 h-10 rounded-full border border-primary/20 object-cover"
              alt={activeUser.name}
              src={activeUser.avatar}
            />
          </Link>
        </div>
      </div>

      {/* Center Search Bar */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60">
            search
          </span>
          <input
            className="w-full h-10 pr-10 pl-4 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary/20 font-body-md text-on-surface"
            placeholder={role === "admin" ? "ابحث عن طالب أو سؤال..." : "البحث عن دروس أو قيود..."}
            type="text"
          />
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={onMenuToggle}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}