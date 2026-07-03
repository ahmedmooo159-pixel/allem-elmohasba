export default function DefinitionTable({
  items = [
    {
      termAr: "الأصول",
      termEn: "Assets",
      definition: "الموارد الاقتصادية التي تملكها المنشأة نتيجة أحداث سابقة، والمتوقع تحقيق منافع اقتصادية مستقبلية منها.",
      category: "ميزانية عمومية",
    },
    {
      termAr: "الالتزامات",
      termEn: "Liabilities",
      definition: "التزامات المنشأة الحالية الناشئة عن أحداث سابقة، والتي يتطلب تسويتها تدفق خارج للموارد.",
      category: "ميزانية عمومية",
    },
    {
      termAr: "حقوق الملكية",
      termEn: "Owner's Equity",
      definition: "الحق المتبقي في أصول المنشأة بعد استبعاد جميع التزاماتها (الأصول - الالتزامات).",
      category: "ميزانية عمومية",
    },
  ],
}) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant/30">
              <th className="p-4 font-bold text-on-surface-variant font-label-sm w-1/4">المصطلح (عربي / إنجليزي)</th>
              <th className="p-4 font-bold text-on-surface-variant font-label-sm w-1/2">التعريف والشرح</th>
              <th className="p-4 font-bold text-on-surface-variant font-label-sm w-1/6">التصنيف</th>
              <th className="p-4 font-bold text-on-surface-variant font-label-sm w-1/12 text-center">أدوات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20">
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-surface-container-low transition-colors duration-150">
                <td className="p-4">
                  <div className="font-semibold text-primary">{item.termAr}</div>
                  <div className="text-xs text-on-surface-variant italic font-medium">{item.termEn}</div>
                </td>
                <td className="p-4 text-sm text-on-surface leading-relaxed">
                  {item.definition}
                </td>
                <td className="p-4">
                  <span className="inline-block px-2.5 py-1 bg-surface-container-high rounded-full text-xs text-on-surface-variant font-medium">
                    {item.category}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-on-surface-variant hover:text-primary transition-colors inline-flex items-center justify-center p-2 rounded-full hover:bg-primary/5">
                    <span className="material-symbols-outlined text-sm">volume_up</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-outline-variant/20">
        {items.map((item, index) => (
          <div key={index} className="p-5 space-y-3 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-primary text-base">{item.termAr}</h4>
                <p className="text-xs text-on-surface-variant italic">{item.termEn}</p>
              </div>
              <span className="px-2.5 py-1 bg-surface-container-high rounded-full text-[10px] text-on-surface-variant font-medium">
                {item.category}
              </span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {item.definition}
            </p>
            <div className="flex justify-end pt-2">
              <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 text-xs">
                <span className="material-symbols-outlined text-sm">volume_up</span>
                <span>استماع</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
