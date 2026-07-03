import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import QuestionCard from "../../components/questions/QuestionCard";

export default function Questions() {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [scoreStats, setScoreStats] = useState({
    solvedCount: 15,
    correctCount: 120,
    averageScore: 84,
  });

  const quizzes = [
    {
      id: 1,
      chapter: "الفصل الأول",
      title: "مبادئ المحاسبة الأساسية",
      questionCount: 10,
      status: "solved",
      score: "90%",
      questions: [
        {
          id: 1,
          question: "أي من الحسابات التالية يعتبر أصلاً متداولاً؟",
          options: ["المخزون السلعي", "السيارات", "القروض طويلة الأجل", "رأس المال"],
          correctIndex: 0,
        },
        {
          id: 2,
          question: "معادلة الميزانية العمومية الصحيحة هي:",
          options: [
            "الأصول = الالتزامات + حقوق الملكية",
            "الأصول = الالتزامات - حقوق الملكية",
            "الالتزامات = الأصول + حقوق الملكية",
            "حقوق الملكية = الأصول + الالتزامات",
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      id: 2,
      chapter: "الفصل الثاني",
      title: "تحديد المدين والدائن",
      questionCount: 8,
      status: "practice",
      score: null,
      questions: [
        {
          id: 1,
          question: "عند شراء أثاث نقداً، يكون القيد كالتالي:",
          options: [
            "من حـ/ الأثاث إلى حـ/ الصندوق",
            "من حـ/ الصندوق إلى hـ/ الأثاث",
            "من حـ/ المشتريات إلى حـ/ الصندوق",
            "من حـ/ الأثاث إلى حـ/ الدائنين",
          ],
          correctIndex: 0,
        },
        {
          id: 2,
          question: "الحسابات التي تزداد في الطرف المدين هي دائماً:",
          options: [
            "الأصول والمصروفات",
            "الالتزامات وحقوق الملكية",
            "الإيرادات والالتزامات",
            "حقوق الملكية والمصروفات",
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      id: 3,
      chapter: "الفصل الثالث",
      title: "قيود اليومية والتسويات",
      questionCount: 12,
      status: "locked",
      score: null,
      questions: [],
    },
  ];

  const handleStartQuiz = (quiz) => {
    if (quiz.status === "locked") return;
    setActiveQuiz(quiz);
  };

  const handleQuitQuiz = () => {
    setActiveQuiz(null);
  };

  return (
    <div className="space-y-6">
      {!activeQuiz ? (
        <>
          <SectionHeader
            title="بنك الأسئلة والاختبارات"
            description="اختبر مهاراتك المحاسبية عبر محاكي اختبارات الفصول، وحقق نتائج متميزة."
          />

          {/* Quick Metrics */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <StatsCard
              title="الاختبارات المنجزة"
              value={`${scoreStats.solvedCount} اختبار`}
              icon="task_alt"
              badge="منجز"
              badgeColor="tertiary"
            />
            <StatsCard
              title="الأسئلة الصحيحة"
              value={`${scoreStats.correctCount} سؤال`}
              icon="check_circle"
              badge="صحيح"
              badgeColor="primary"
            />
            <StatsCard
              title="متوسط الدرجات"
              value={`${scoreStats.averageScore}%`}
              icon="analytics"
              badge="ممتاز"
              badgeColor="primary"
              type="stars"
              starsCount={4}
            />
          </section>

          {/* Quiz list card wrappers */}
          <div className="space-y-4">
            <h3 className="font-headline-md text-on-surface font-semibold">الاختبارات المتوفرة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {quizzes.map((quiz) => {
                const isSolved = quiz.status === "solved";
                const isLocked = quiz.status === "locked";

                return (
                  <div
                    key={quiz.id}
                    className={`glass-card p-6 rounded-2xl flex flex-col justify-between gap-4 border transition-all duration-200 ${
                      isLocked ? "opacity-60 border-outline-variant/10" : "border-outline-variant/30 hover:shadow-md"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-bold text-primary uppercase">{quiz.chapter}</span>
                        {isSolved && (
                          <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            النتيجة: {quiz.score}
                          </span>
                        )}
                        {isLocked && (
                          <span className="material-symbols-outlined text-outline text-lg">lock</span>
                        )}
                      </div>
                      <h4 className="font-display-lg text-lg text-on-surface mb-2">{quiz.title}</h4>
                      <p className="text-xs text-on-surface-variant font-body-md">
                        يحتوي الاختبار على {quiz.questionCount} أسئلة لقياس مستوى الفهم.
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-outline-variant/20 pt-4 mt-2">
                      <span className="text-xs text-on-surface-variant">
                        {isSolved ? "اختبار مكتمل" : isLocked ? "قم بإنهاء الفصول السابقة لفتح هذا الاختبار" : "جاهز للبدء الآن"}
                      </span>
                      {!isLocked && (
                        <button
                          onClick={() => handleStartQuiz(quiz)}
                          className="px-5 h-9 bg-primary-container text-on-primary-container text-xs font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all"
                        >
                          {isSolved ? "إعادة التدريب" : "بدء الاختبار"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs text-primary font-bold">{activeQuiz.chapter}</span>
              <h2 className="font-display-lg text-2xl text-on-surface">{activeQuiz.title}</h2>
            </div>
            <button
              onClick={handleQuitQuiz}
              className="px-4 h-10 border border-error text-error rounded-xl hover:bg-error/5 text-xs font-bold transition-all"
            >
              إنهاء الاختبار والعودة
            </button>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {activeQuiz.questions.length > 0 ? (
              activeQuiz.questions.map((q, idx) => (
                <QuestionCard
                  key={idx}
                  id={q.id}
                  question={q.question}
                  options={q.options}
                  correctIndex={q.correctIndex}
                />
              ))
            ) : (
              <EmptyState
                title="الأسئلة غير متوفرة"
                description="لم نقم برفع أسئلة هذا الاختبار بعد، يرجى المحاولة لاحقاً."
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}