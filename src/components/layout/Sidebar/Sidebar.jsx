import { NavLink } from "react-router-dom";

export default function Sidebar({ role = "student", isOpen = false, onClose }) {
  const isStudent = role === "student";

  const studentLinks = [
    { to: "/dashboard", label: "لوحة التحكم", icon: "dashboard" },
    { to: "/videos", label: "الدورات التدريبية", icon: "play_circle" },
    { to: "/questions", label: "بنك الأسئلة", icon: "quiz" },
    { to: "/definitions", label: "قاموس المصطلحات", icon: "menu_book" },
    { to: "/journal", label: "معمل القيود", icon: "account_balance_wallet" },
    { to: "/accounting-cycle", label: "محاكي الدورة", icon: "account_tree" },
    { to: "/ai", label: "المدرب الذكي", icon: "smart_toy" },
    { to: "/analytics", label: "التحليلات", icon: "analytics" },
    { to: "/profile", label: "الملف الشخصي", icon: "person" },
    { to: "/settings", label: "الإعدادات", icon: "settings" },
  ];

  const adminLinks = [
    { to: "/admin/dashboard", label: "لوحة التحكم", icon: "dashboard" },
    { to: "/admin/videos", label: "إدارة الفيديوهات", icon: "play_circle" },
    { to: "/admin/questions", label: "إدارة الأسئلة", icon: "quiz" },
    { to: "/admin/definitions", label: "المصطلحات", icon: "menu_book" },
    { to: "/admin/students", label: "إدارة الطلاب", icon: "school" },
    { to: "/settings", label: "الإعدادات", icon: "settings" },
  ];

  const links = isStudent ? studentLinks : adminLinks;

  const sidebarClasses = `fixed right-0 top-0 h-screen w-[280px] z-50 bg-on-surface flex flex-col py-md border-l border-outline-variant/20 shadow-2xl transition-all duration-300 
    ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} md:flex`;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-45 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={sidebarClasses}>
        {/* Brand Header */}
        <div className="px-6 mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="material-symbols-outlined text-surface-container-lowest text-4xl">
                account_balance
              </span>
              <h1 className="text-headline-md font-display-lg text-surface-container-lowest tracking-tight">
                محاسبتك
              </h1>
            </div>
            <p className="text-surface-variant font-body-md opacity-70 mr-11">
              إتقان المحاسبة
            </p>
          </div>
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="md:hidden text-surface-variant hover:text-white"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex flex-row-reverse items-center gap-sm p-3 mx-2 transition-all duration-300 rounded-xl ${
                  isActive
                    ? "bg-primary-container text-on-primary-container translate-x-1"
                    : "text-surface-variant hover:bg-primary/10"
                }`
              }
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span className="font-label-sm text-label-sm ml-auto">
                {link.label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-auto border-t border-outline-variant/10 pt-4 pb-6 px-4">
          <NavLink
            to="/"
            className="flex flex-row-reverse items-center gap-sm text-error/80 p-3 mx-2 hover:bg-error/10 transition-all duration-300 rounded-xl"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-sm text-label-sm ml-auto">
              تسجيل الخروج
            </span>
          </NavLink>
          {isStudent && (
            <div className="mt-4">
              <NavLink
                to="/videos"
                className="block text-center w-full bg-primary text-on-primary py-3 rounded-xl font-label-sm hover:opacity-90 transition-all"
              >
                ابدأ التعلم الآن
              </NavLink>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}