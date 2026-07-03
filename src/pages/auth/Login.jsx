import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const navigate = useNavigate();

  // Float animation effect matching 1.html script
  useEffect(() => {
    const handleMouseMove = (e) => {
      const illustration = document.querySelector(".float-animation");
      if (illustration) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        illustration.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to dashboard on login submit (mock authentication flow)
    if (email) {
      if (email.includes("admin")) {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-0 m-0 bg-background w-full">
      <div className="flex flex-row-reverse w-full min-h-screen">
        {/* Left Side: Illustration Section */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary-container overflow-hidden items-center justify-center p-xl">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary-container rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-lg float-animation transition-transform duration-100 ease-out">
              <div 
                className="w-[480px] h-[480px] bg-cover bg-center rounded-3xl shadow-2xl" 
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCf24FFaHOTVUjRcwtuzuXxarhLGgOQnZ_wM9McYnoUdp-fbos0K9alp_itXhNTNp8p4eMGPTfnnM0IRFPDVROXHC4Wtpz1BXmf0dsagKEdZ98rOPYZeaH4cRCW_zNMtNT5OKxOvCljkey2etLFwOoATpkovoxzO1KR2lPphV4ce4o1xaVn1aNxmZEyu3u88rSSHqpqzo39tUfsHiHQJ73IXFTvauoe5-MgTVkf7V40opJzEG6TDRLAuLv2A2cpxcWIvwHz1QMkAaw')"
                }}
              ></div>
            </div>
            <h2 className="font-display-lg text-display-lg text-white mb-sm">منصة محاسبتك التعليمية</h2>
            <p className="font-body-lg text-body-lg text-primary-fixed max-w-md">
              انضم إلى آلاف الطلاب في رحلة احتراف المحاسبة المالية والعملية بأحدث الوسائل التقنية.
            </p>
          </div>
        </div>

        {/* Right Side: Login/Register Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-xl bg-background">
          <div className="w-full max-w-[520px] glass-card p-lg md:p-xl rounded-[2rem] flex flex-col">
            {/* Brand Identity */}
            <div className="flex items-center gap-sm mb-lg">
              <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-3xl">account_balance</span>
              </div>
              <div>
                <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tight leading-none">محاسبتك</h1>
                <p className="font-label-sm text-label-sm text-outline">إتقان المحاسبة</p>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="mb-lg">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">
                {isRegister ? "أهلاً بك في مستقبل تعلم المحاسبة" : "مرحباً بك مجدداً"}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {isRegister ? "قم بإنشاء حسابك للبدء في رحلة التعلم اليوم." : "سجل الدخول للمتابعة في دروسك اليومية."}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-md">
              {isRegister && (
                <Input
                  label="الاسم الكامل"
                  icon="person"
                  placeholder="أدخل اسمك بالكامل"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}

              <Input
                label="البريد الإلكتروني"
                icon="mail"
                placeholder="example@domain.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {isRegister && (
                <div className="space-y-xs">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block px-1">السنة الدراسية</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">school</span>
                    <select
                      value={academicYear}
                      onChange={(e) => setAcademicYear(e.target.value)}
                      className="w-full h-[56px] pr-12 pl-10 bg-surface-container-low border border-outline-variant/30 rounded-xl font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    >
                      <option value="" disabled>اختر السنة الدراسية</option>
                      <option value="1">السنة الأولى</option>
                      <option value="2">السنة الثانية</option>
                      <option value="3">السنة الثالثة</option>
                      <option value="4">السنة الرابعة</option>
                    </select>
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
                  </div>
                </div>
              )}

              {/* Primary CTA */}
              <button
                className="w-full h-[56px] bg-primary-container text-on-primary-container font-headline-md text-headline-md rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-sm mt-lg"
                type="submit"
              >
                <span>{isRegister ? "إنشاء الحساب" : "تسجيل الدخول"}</span>
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-md my-lg">
              <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
              <span className="font-label-sm text-label-sm text-outline">أو سجل عبر</span>
              <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
            </div>

            {/* Google Login */}
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full h-[56px] border border-outline-variant bg-white text-on-surface font-body-md text-body-md rounded-xl hover:bg-surface-container transition-colors flex items-center justify-center gap-md active:scale-[0.98]"
            >
              <img
                alt="Google"
                className="w-6 h-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzqZS3PAPUQYpeicGJesjBcE0fzuy01tE5V1-eGQebWFZ-ITQ49HlA68Us1EtZG0FVrArwr2Cbhi7lJfgoNHIL8GayX9AzXGv1cqxjowByc9VoN6eYext_6FjEXdnSmDRUAM7uItHulBeyqumykqQMjPEvz6Nn06Wskt5hMgApuJrsId97BBzgp11EEI4V_k2N42HdStfxUMAQNMXtVtq0fBMMGxM19CSamTj28Ek_k35RMZBywtKcFBWca6W7PyrpP6KRDasRvuA"
              />
              <span>التسجيل بواسطة Google</span>
            </button>

            {/* Footer Switch */}
            <p className="mt-xl text-center font-body-md text-body-md text-on-surface-variant">
              {isRegister ? "لديك حساب بالفعل؟ " : "ليس لديك حساب؟ "}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-primary font-bold hover:underline bg-transparent border-none cursor-pointer"
              >
                {isRegister ? "تسجيل الدخول" : "إنشاء حساب جديد"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}