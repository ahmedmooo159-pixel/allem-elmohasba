import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import SearchBar from "../../components/ui/SearchBar";
import DefinitionTable from "../../components/ui/DefinitionTable";
import EmptyState from "../../components/ui/EmptyState";

export default function Definitions() {
  const [searchQuery, setSearchQuery] = useState("");

  const glossaryItems = [
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
    {
      termAr: "الإيرادات",
      termEn: "Revenues",
      definition: "التدفقات النقدية الداخلة أو الزيادات الأخرى في الأصول الناتجة عن تقديم الخدمات أو بيع السلع للمنشأة.",
      category: "قائمة الدخل",
    },
    {
      termAr: "المصروفات",
      termEn: "Expenses",
      definition: "التكلفة المستنفدة في سبيل الحصول على الإيرادات مثل المرتبات، الإيجار، وفواتير المياه والكهرباء.",
      category: "قائمة الدخل",
    },
    {
      termAr: "قيد اليومية",
      termEn: "Journal Entry",
      definition: "طريقة لتسجيل العمليات المالية لكل عملية بشكل متوازن يتضمن طرفاً مديناً وطرفاً دائناً بمبالغ متساوية.",
      category: "دفتر اليومية",
    },
    {
      termAr: "ميزان المراجعة",
      termEn: "Trial Balance",
      definition: "كشف يحتوي على أرصدة أو مجاميع الحسابات في دفتر الأستاذ للتحقق من توازن المبالغ المدينة والدائنة.",
      category: "دفتر الأستاذ",
    },
  ];

  const filteredItems = glossaryItems.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.termAr.toLowerCase().includes(query) ||
      item.termEn.toLowerCase().includes(query) ||
      item.definition.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      <SectionHeader
        title="قاموس المصطلحات المحاسبية"
        description="ابحث وتصفح جميع المفاهيم المالية والمصطلحات المحاسبية المعتمدة وشروحها المفصلة."
      />

      {/* Search Header Input bar */}
      <div className="max-w-md">
        <SearchBar
          placeholder="ابحث عن مصطلح (مثال: أصول، إيرادات)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table grid */}
      {filteredItems.length > 0 ? (
        <DefinitionTable items={filteredItems} />
      ) : (
        <EmptyState
          title="لم نجد هذا المصطلح"
          description={`عذراً، لم نتمكن من العثور على أي مصطلح محاسبي يطابق "${searchQuery}"`}
        />
      )}
    </div>
  );
}