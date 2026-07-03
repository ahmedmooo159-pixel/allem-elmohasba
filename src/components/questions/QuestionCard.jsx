import { useState } from "react";

export default function QuestionCard({
  id = 1,
  question = "ما هي المعادلة المحاسبية الأساسية؟",
  options = [
    "الأصول = الالتزامات + حقوق الملكية",
    "الأصول = الالتزامات - حقوق الملكية",
    "الالتزامات = الأصول + حقوق الملكية",
    "حقوق الملكية = الأصول + الالتزامات",
  ],
  correctIndex = 0,
  onAnswerSubmit,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);
    if (onAnswerSubmit) {
      onAnswerSubmit(selectedOption === correctIndex);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  return (
    <div className="glass-card p-6 md:p-8 rounded-2xl shadow-sm space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
          السؤال {id}
        </span>
        <span className="text-xs text-on-surface-variant">اختيار من متعدد</span>
      </div>

      {/* Question Text */}
      <h3 className="font-display-lg text-lg md:text-xl text-on-surface leading-relaxed">
        {question}
      </h3>

      {/* Options List */}
      <div className="space-y-3">
        {options.map((option, index) => {
          let optionClass = "border-outline-variant/30 hover:bg-surface-container-low";
          let icon = "circle";
          let iconColor = "text-outline/40";

          if (selectedOption === index) {
            optionClass = "border-primary bg-primary/5 text-primary font-semibold shadow-sm shadow-primary/5";
            icon = "radio_button_checked";
            iconColor = "text-primary";
          }

          if (isSubmitted) {
            if (index === correctIndex) {
              optionClass = "border-green-500 bg-green-500/5 text-green-700 font-semibold shadow-sm";
              icon = "check_circle";
              iconColor = "text-green-600";
            } else if (selectedOption === index) {
              optionClass = "border-error bg-error/5 text-error font-semibold shadow-sm";
              icon = "cancel";
              iconColor = "text-error";
            } else {
              optionClass = "border-outline-variant/20 opacity-60";
              iconColor = "text-outline/20";
            }
          }

          return (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`flex items-center gap-sm p-4 rounded-xl border cursor-pointer transition-all duration-200 ${optionClass}`}
            >
              <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
              <span className="font-body-md text-sm">{option}</span>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-end pt-4 border-t border-outline-variant/20">
        {isSubmitted ? (
          <button
            onClick={handleReset}
            className="px-6 h-11 border border-outline-variant rounded-xl font-label-sm hover:bg-surface-container transition-colors"
          >
            إعادة الحل
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="px-6 h-11 bg-primary text-white rounded-xl font-label-sm hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all"
          >
            تأكيد الإجابة
          </button>
        )}
      </div>
    </div>
  );
}
