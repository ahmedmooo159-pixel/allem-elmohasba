import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import SearchBar from "../../components/ui/SearchBar";

export default function AdminDefinitions() {
  const [definitions, setDefinitions] = useState([
    {
      id: 1,
      term: "المحاسبة",
      english: "Accounting",
      arabic: "علم تسجيل العمليات المالية",
      description:
        "المحاسبة هي علم تسجيل وتصنيف وتلخيص العمليات المالية والاقتصادية بطريقة منظمة.",
      createdDate: "2024-02-15",
      status: "active",
    },
    {
      id: 2,
      term: "الأصول",
      english: "Assets",
      arabic: "الموارد",
      description:
        "الأصول هي جميع الموارد والممتلكات التي تمتلكها الشركة والتي لها قيمة اقتصادية.",
      createdDate: "2024-02-14",
      status: "active",
    },
    {
      id: 3,
      term: "الالتزامات",
      english: "Liabilities",
      arabic: "الديون",
      description:
        "الالتزامات هي جميع الديون والالتزامات المالية التي على الشركة تسديدها.",
      createdDate: "2024-02-13",
      status: "inactive",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    term: "",
    english: "",
    arabic: "",
    description: "",
  });

  const filteredDefinitions = definitions.filter(
    (def) =>
      def.term.includes(searchQuery) ||
      def.english.includes(searchQuery) ||
      def.arabic.includes(searchQuery) ||
      def.description.includes(searchQuery)
  );

  const handleAddDefinition = (e) => {
    e.preventDefault();
    if (!formData.term || !formData.english || !formData.arabic) {
      alert("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    const newDefinition = {
      id: definitions.length + 1,
      ...formData,
      createdDate: new Date().toISOString().split("T")[0],
      status: "active",
    };

    setDefinitions([newDefinition, ...definitions]);
    setFormData({
      term: "",
      english: "",
      arabic: "",
      description: "",
    });
    setShowForm(false);
  };

  const handleDeleteDefinition = (id) => {
    setDefinitions(definitions.filter((def) => def.id !== id));
  };

  const handleToggleStatus = (id) => {
    setDefinitions(
      definitions.map((def) =>
        def.id === id
          ? { ...def, status: def.status === "active" ? "inactive" : "active" }
          : def
      )
    );
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        title="إدارة المصطلحات"
        description="أضف وعدّل وأدر قاموس المصطلحات المحاسبية"
      />

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-80">
          <SearchBar
            placeholder="ابحث عن مصطلح..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-primary text-white rounded-xl font-label-sm hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>
          مصطلح جديد
        </button>
      </div>

      {/* Add Definition Form */}
      {showForm && (
        <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
          <form onSubmit={handleAddDefinition} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  المصطلح بالعربية
                </label>
                <input
                  type="text"
                  value={formData.term}
                  onChange={(e) =>
                    setFormData({ ...formData, term: e.target.value })
                  }
                  placeholder="أدخل المصطلح"
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  المصطلح بالإنجليزية
                </label>
                <input
                  type="text"
                  value={formData.english}
                  onChange={(e) =>
                    setFormData({ ...formData, english: e.target.value })
                  }
                  placeholder="Enter English term"
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                الترجمة الحرفية
              </label>
              <input
                type="text"
                value={formData.arabic}
                onChange={(e) =>
                  setFormData({ ...formData, arabic: e.target.value })
                }
                placeholder="الترجمة الحرفية للمصطلح"
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                الشرح التفصيلي
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="أدخل شرح تفصيلي للمصطلح"
                rows="4"
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-label-sm hover:bg-primary/90 transition-all"
              >
                حفظ المصطلح
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 px-6 py-3 bg-surface-container-high text-on-surface rounded-lg font-label-sm hover:bg-surface-container transition-all"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Definitions Table */}
      <div className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-low">
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  المصطلح
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  English
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  الترجمة
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  الشرح
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  الحالة
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDefinitions.length > 0 ? (
                filteredDefinitions.map((def) => (
                  <tr
                    key={def.id}
                    className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-all"
                  >
                    <td className="px-6 py-4 text-body-md text-on-surface font-medium">
                      {def.term}
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface-variant">
                      {def.english}
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface-variant">
                      {def.arabic}
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface-variant max-w-xs truncate">
                      {def.description}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-label-sm font-medium ${
                          def.status === "active"
                            ? "bg-tertiary/10 text-tertiary"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm">
                          {def.status === "active"
                            ? "check_circle"
                            : "block"}
                        </span>
                        {def.status === "active" ? "نشط" : "معطل"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleStatus(def.id)}
                          className={`p-2 rounded-lg transition-all ${
                            def.status === "active"
                              ? "text-tertiary hover:bg-tertiary/10"
                              : "text-on-surface-variant hover:bg-surface-container-high"
                          }`}
                          title={def.status === "active" ? "تعطيل" : "تفعيل"}
                        >
                          <span className="material-symbols-outlined text-sm">
                            {def.status === "active" ? "check_circle" : "block"}
                          </span>
                        </button>
                        <button
                          onClick={() => handleDeleteDefinition(def.id)}
                          className="p-2 text-error hover:bg-error/10 rounded-lg transition-all"
                          title="حذف"
                        >
                          <span className="material-symbols-outlined text-sm">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center">
                    <p className="text-on-surface-variant">
                      لا توجد مصطلحات تطابق البحث
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
