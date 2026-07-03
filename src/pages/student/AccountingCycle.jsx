import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";

const steps = [
  { icon: "receipt_long", label: "العمليات المالية", filled: true },
  { icon: "edit_note", label: "دفتر اليومية", filled: false },
  { icon: "menu_book", label: "دفتر الأستاذ", filled: false },
  { icon: "balance", label: "ميزان المراجعة", filled: false },
  { icon: "settings_suggest", label: "التسويات", filled: true },
  { icon: "assessment", label: "القوائم المالية", filled: false },
];

const transactions = [
  {
    icon: "shopping_cart",
    title: "شراء أثاث مكتبي نقداً",
    ref: "#JV-204",
    amount: "15,000",
  },
  {
    icon: "payments",
    title: "سداد فواتير الكهرباء والمياه",
    ref: "#JV-205",
    amount: "2,450",
  },
];

const progressTasks = [
  { label: "توثيق كافة المستندات المؤيدة", status: "done" },
  { label: "ترحيل القيود لدفتر الأستاذ", status: "done" },
  { label: "إعداد ميزان المراجعة قبل التسويات", status: "active" },
  { label: "إغلاق الحسابات المؤقتة", status: "pending" },
];

export default function AccountingCycle() {
  const [activeStep, setActiveStep] = useState(4);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end mb-xl">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-label-sm text-xs">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            الأداة التفاعلية
          </span>
          <h2 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            محاكي الدورة المحاسبية
          </h2>
          <p className="text-on-surface-variant font-body-lg max-w-xl">
            تعلم تسلسل العمليات المالية من البداية وحتى إصدار القوائم الختامية
            في بيئة محاكاة واقعية ومتطورة.
          </p>
        </div>
        <button className="bg-primary text-white h-[48px] px-8 rounded-[18px] font-headline-md flex items-center gap-sm hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all">
          <span className="material-symbols-outlined">play_arrow</span>
          ابدأ المحاكاة
        </button>
      </div>

      {/* Timeline Progress Stepper */}
      <div className="relative mb-xl py-lg">
        <div className="flex justify-between relative z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-sm w-1/6 group cursor-pointer`}
              onClick={() => setActiveStep(i)}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-surface z-10 transition-all ${
                  i === activeStep
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : i < activeStep
                    ? "bg-surface-container-highest text-primary"
                    : "bg-surface-container-highest text-primary/40"
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={
                    step.filled
                      ? { fontVariationSettings: "'FILL' 1" }
                      : undefined
                  }
                >
                  {step.icon}
                </span>
              </div>
              <span
                className={`text-label-sm font-medium text-center ${
                  i === activeStep
                    ? "text-primary font-bold"
                    : "text-on-surface-variant group-hover:text-primary"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
        {/* Connector Lines */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-highest -translate-y-1/2">
          <div
            className="h-full bg-primary transition-all duration-700 ease-in-out"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Simulation Interactive Area (Bento Grid) */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Main Work Canvas */}
        <div className="col-span-12 lg:col-span-8 space-y-gutter">
          <div className="glass-card rounded-xl p-md">
            <div className="flex justify-between items-center mb-md">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">
                  account_balance_wallet
                </span>
                <h3 className="font-headline-md text-headline-md">
                  تحليل العمليات الجارية
                </h3>
              </div>
              <div className="flex gap-xs">
                <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  مدين
                </span>
                <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  دائن
                </span>
              </div>
            </div>
            <div className="space-y-sm">
              {transactions.map((tx, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-sm rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-xl">
                        {tx.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-body-md font-semibold">{tx.title}</p>
                      <p className="text-xs text-on-surface-variant">
                        رقم القيد: {tx.ref}
                      </p>
                    </div>
                  </div>
                  <div className="text-left font-display-lg text-lg text-primary">
                    {tx.amount}{" "}
                    <span className="text-xs font-body-md text-on-surface-variant">
                      ر.س
                    </span>
                  </div>
                </div>
              ))}

              {/* Interactive Input State */}
              <div className="mt-lg p-md border-2 border-dashed border-primary/20 rounded-xl bg-primary/5 flex flex-col items-center justify-center text-center gap-sm">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-bounce">
                  <span className="material-symbols-outlined text-3xl">
                    add
                  </span>
                </div>
                <p className="font-body-md font-medium">
                  اسحب العملية المالية هنا لتحليلها
                </p>
                <p className="text-xs text-on-surface-variant">
                  أو قم بالنقر لإضافة عملية يدوية جديدة
                </p>
              </div>
            </div>
          </div>

          {/* Mini Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card rounded-xl p-md border-r-4 border-r-primary">
              <p className="text-label-sm text-on-surface-variant mb-1">
                إجمالي المدين
              </p>
              <h4 className="font-display-lg text-2xl text-on-surface">
                124,500.00
              </h4>
            </div>
            <div className="glass-card rounded-xl p-md border-r-4 border-r-tertiary">
              <p className="text-label-sm text-on-surface-variant mb-1">
                إجمالي الدائن
              </p>
              <h4 className="font-display-lg text-2xl text-on-surface">
                124,500.00
              </h4>
            </div>
            <div className="glass-card rounded-xl p-md border-r-4 border-r-green-500 text-green-600 bg-green-50/30">
              <p className="text-label-sm text-on-surface-variant mb-1">
                حالة التوازن
              </p>
              <div className="flex items-center gap-xs">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <h4 className="font-display-lg text-2xl">متوازن</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Side Information & Tools */}
        <div className="col-span-12 lg:col-span-4 space-y-gutter">
          {/* Assistant AI Tool */}
          <div className="bg-on-surface rounded-xl p-md text-white relative overflow-hidden">
            <div className="relative z-10 space-y-sm">
              <div className="flex items-center gap-sm">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">
                    auto_awesome
                  </span>
                </div>
                <h4 className="font-headline-md text-lg">المساعد الذكي</h4>
              </div>
              <p className="text-surface-variant/80 text-sm leading-relaxed">
                "أحسنت! ميزان المراجعة الآن متوازن. الخطوة القادمة هي إجراء
                تسويات الجرد بنهاية الفترة المالية."
              </p>
              <div className="pt-sm">
                <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition-colors">
                  طلب تحليل القيد الحالي
                </button>
              </div>
            </div>
          </div>

          {/* Progress Card */}
          <div className="glass-card rounded-xl p-md">
            <h4 className="font-headline-md text-sm mb-md">
              تقدم الدورة المحاسبية
            </h4>
            <div className="space-y-md">
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">المهام المكتملة</span>
                <span className="font-bold">4 من 6</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: "66%" }}
                />
              </div>
              <ul className="space-y-sm">
                {progressTasks.map((task, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-sm text-xs ${
                      task.status === "active"
                        ? "text-primary font-bold"
                        : task.status === "pending"
                        ? "text-on-surface-variant/40"
                        : "text-on-surface-variant"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-sm ${
                        task.status === "done"
                          ? "text-green-500"
                          : task.status === "active"
                          ? "animate-pulse"
                          : ""
                      }`}
                      style={
                        task.status === "done"
                          ? { fontVariationSettings: "'FILL' 1" }
                          : undefined
                      }
                    >
                      {task.status === "done"
                        ? "check_circle"
                        : task.status === "active"
                        ? "radio_button_checked"
                        : "radio_button_unchecked"}
                    </span>
                    {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources/Help */}
          <div className="glass-card rounded-xl p-md border-dashed border-2 border-outline-variant">
            <div className="flex items-center gap-sm mb-sm">
              <span className="material-symbols-outlined text-on-surface-variant">
                lightbulb
              </span>
              <h4 className="text-sm font-semibold">هل تحتاج مساعدة؟</h4>
            </div>
            <p className="text-[12px] text-on-surface-variant leading-relaxed mb-md">
              يمكنك الاطلاع على دليل المعايير المحاسبية الدولية (IFRS) المتعلقة
              بالتسويات الجردية.
            </p>
            <a
              className="text-xs text-primary font-bold hover:underline flex items-center gap-xs"
              href="#"
            >
              فتح مكتبة المراجع
              <span className="material-symbols-outlined text-xs">
                arrow_left
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}