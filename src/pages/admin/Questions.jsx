import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import SearchBar from "../../components/ui/SearchBar";

export default function AdminQuestions() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "أي من الحسابات التالية يعتبر أصلاً متداولاً؟",
      chapter: "الفصل الأول",
      difficulty: "سهل",
      options: ["المخزون السلعي", "السيارات", "القروض طويلة الأجل", "رأس المال"],
      correctAnswer: 0,
      createdDate: "2024-02-15",
      status: "active",
    },
    {
      id: 2,
      text: "معادلة الميزانية العمومية الصحيحة هي:",
      chapter: "الفصل الأول",
      difficulty: "متوسط",
      options: [
        "الأصول = الالتزامات + حقوق الملكية",
        "الأصول = الالتزامات - حقوق الملكية",
        "الالتزامات = الأصول + حقوق الملكية",
        "حقوق الملكية = الأصول + الالتزامات",
      ],
      correctAnswer: 0,
      createdDate: "2024-02-14",
      status: "active",
    },
    {
      id: 3,
      text: "عند شراء أثاث نقداً، يكون القيد كالتالي:",
      chapter: "الفصل الثاني",
      difficulty: "صعب",
      options: [
        "من حـ/ الأثاث إلى حـ/ الصندوق",
        "من حـ/ الصندوق إلى حـ/ الأثاث",
        "من حـ/ المشتريات إلى حـ/ الصندوق",
        "من حـ/ الأثاث إلى حـ/ الدائنين",
      ],
      correctAnswer: 0,
      createdDate: "2024-02-13",
      status: "inactive",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    chapter: "",
    difficulty: "متوسط",
    options: ["", "", "", ""],
    correctAnswer: 0,
  });

  const chapters = [
    "الفصل الأول",
    "الفصل الثاني",
    "الفصل الثالث",
    "الفصل الرابع",
  ];

  const difficulties = ["سهل", "متوسط", "صعب"];

  const filteredQuestions = questions.filter(
    (q) =>
      q.text.includes(searchQuery) ||
      q.chapter.includes(searchQuery)
  );

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!formData.text || !formData.chapter || formData.options.some(o => !o)) {
      alert("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    const newQuestion = {
      id: questions.length + 1,
      ...formData,
      createdDate: new Date().toISOString().split("T")[0],
      status: "active",
    };

    setQuestions([newQuestion, ...questions]);
    setFormData({
      text: "",
      chapter: "",
      difficulty: "متوسط",
      options: ["", "", "", ""],
      correctAnswer: 0,
    });
    setShowForm(false);
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleToggleStatus = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? { ...q, status: q.status === "active" ? "inactive" : "active" }
          : q
      )
    );
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        title="إدارة بنك الأسئلة"
        description="أضف وعدّل وأدر أسئلة الاختبارات على المنصة"
      />

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-80">
          <SearchBar
            placeholder="ابحث عن سؤال..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-primary text-white rounded-xl font-label-sm hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>
          سؤال جديد
        </button>
      </div>

      {/* Add Question Form */}
      {showForm && (
        <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
          <form onSubmit={handleAddQuestion} className="space-y-4">
            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                نص السؤال
              </label>
              <textarea
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
                placeholder="أدخل نص السؤال"
                rows="3"
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  الفصل
                </label>
                <select
                  value={formData.chapter}
                  onChange={(e) =>
                    setFormData({ ...formData, chapter: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="">اختر فصلاً</option>
                  {chapters.map((chapter) => (
                    <option key={chapter} value={chapter}>
                      {chapter}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  مستوى الصعوبة
                </label>
                <select
                  value={formData.difficulty}
                  onChange={(e) =>
                    setFormData({ ...formData, difficulty: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  {difficulties.map((diff) => (
                    <option key={diff} value={diff}>
                      {diff}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                الخيارات
              </label>
              <div className="space-y-2">
                {formData.options.map((option, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="correct"
                      checked={formData.correctAnswer === idx}
                      onChange={() =>
                        setFormData({ ...formData, correctAnswer: idx })
                      }
                      className="w-4 h-4"
                    />
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...formData.options];
                        newOptions[idx] = e.target.value;
                        setFormData({ ...formData, options: newOptions });
                      }}
                      placeholder={`الخيار ${idx + 1}`}
                      className="flex-1 px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-label-sm hover:bg-primary/90 transition-all"
              >
                حفظ السؤال
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

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <div
              key={question.id}
              className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-body-md font-bold text-on-surface mb-2">
                    {question.text}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-label-sm">
                      {question.chapter}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-label-sm ${
                        question.difficulty === "سهل"
                          ? "bg-tertiary/10 text-tertiary"
                          : question.difficulty === "متوسط"
                          ? "bg-primary/10 text-primary"
                          : "bg-error/10 text-error"
                      }`}
                    >
                      {question.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleStatus(question.id)}
                    className={`p-2 rounded-lg transition-all ${
                      question.status === "active"
                        ? "text-tertiary hover:bg-tertiary/10"
                        : "text-on-surface-variant hover:bg-surface-container-high"
                    }`}
                    title={question.status === "active" ? "تعطيل" : "تفعيل"}
                  >
                    <span className="material-symbols-outlined">
                      {question.status === "active" ? "check_circle" : "block"}
                    </span>
                  </button>
                  <button
                    onClick={() => handleDeleteQuestion(question.id)}
                    className="p-2 text-error hover:bg-error/10 rounded-lg transition-all"
                    title="حذف"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {question.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      idx === question.correctAnswer
                        ? "bg-tertiary/10 border-tertiary/20"
                        : "bg-surface-container-low border-outline-variant/10"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                          idx === question.correctAnswer
                            ? "bg-tertiary text-white"
                            : "bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-body-md text-on-surface">
                        {option}
                      </span>
                      {idx === question.correctAnswer && (
                        <span className="text-tertiary text-sm font-bold mr-auto">
                          ✓ الإجابة الصحيحة
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-on-surface-variant">
              لا توجد أسئلة تطابق البحث
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
