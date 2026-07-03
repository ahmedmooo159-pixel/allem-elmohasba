import { useState, useRef, useEffect } from "react";

export default function AI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: "مرحباً أحمد! أنا جاهز لمساعدتك في رحلتك التعليمية اليوم. هل نبدأ بشرح مفهوم القيد المزدوج أم تفضل مراجعة تمرين معين؟",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const quickActions = [
    "اشرح لي القيد المزدوج",
    "ساعدني في ميزان المراجعة",
    "ما هي المعادلة المحاسبية؟",
  ];

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: inputValue,
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        type: "ai",
        text: "شكراً على سؤالك! هذا موضوع مهم جداً في المحاسبة. دعني أساعدك بشرح مفصل وأمثلة عملية لتوضيح المفهوم بشكل أفضل.",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action) => {
    setInputValue(action);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen bg-background relative">
      {/* Header */}
      <div className="px-margin-desktop py-6 border-b border-outline-variant/10 bg-surface/60 backdrop-blur-xl sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-primary text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              smart_toy
            </span>
          </div>
          <div>
            <h1 className="text-headline-md font-headline-md text-on-surface">
              مدربك المحاسبي الذكي
            </h1>
            <p className="text-label-sm text-on-surface-variant">
              متاح دائماً للإجابة على أسئلتك
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto space-y-6 p-6 md:p-8 pb-32"
      >
        {messages.length === 1 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-6">
              <span
                className="material-symbols-outlined text-primary text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                smart_toy
              </span>
            </div>
            <h2 className="text-headline-md font-headline-md text-on-surface mb-2">
              كيف يمكنني مساعدتك اليوم؟
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
              أنا مدربك المحاسبي الذكي، يمكنني مساعدتك في فهم القيود، الميزانيات،
              أو حل التمارين المعقدة.
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-4 ${message.type === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                message.type === "ai"
                  ? "bg-primary"
                  : "bg-secondary-container"
              }`}
            >
              <span
                className={`material-symbols-outlined text-sm ${
                  message.type === "ai"
                    ? "text-white"
                    : "text-on-secondary-container"
                }`}
                style={
                  message.type === "ai"
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {message.type === "ai" ? "smart_toy" : "person"}
              </span>
            </div>
            <div
              className={`max-w-[80%] ${
                message.type === "ai"
                  ? "space-y-4"
                  : "bg-surface-container-low p-4 rounded-xl text-on-surface border border-outline-variant/10"
              }`}
            >
              {message.type === "ai" ? (
                <div className="text-body-md font-body-md text-on-surface leading-relaxed">
                  {message.text}
                </div>
              ) : (
                <p className="text-body-md font-body-md">{message.text}</p>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span
                className="material-symbols-outlined text-primary text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                smart_toy
              </span>
            </div>
            <div className="bg-surface-container-high px-3 py-2 rounded-full flex gap-1 items-center">
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/90 to-transparent">
        <div className="max-w-5xl mx-auto">
          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="flex gap-2 mb-3 overflow-x-auto pb-1 justify-center flex-wrap">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickAction(action)}
                  className="whitespace-nowrap px-4 py-1.5 rounded-full border border-outline-variant/30 text-label-sm text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          {/* Input Wrapper */}
          <div className="relative flex items-end gap-2 bg-surface-container-low border border-outline-variant/40 rounded-2xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all">
            <button className="p-2.5 text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-2.5 px-2 font-body-md text-on-surface max-h-32"
              dir="rtl"
              placeholder="اسأل عن أي مفهوم محاسبي..."
              rows="1"
            />
            <div className="flex items-center gap-1">
              <button className="p-2.5 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mic</span>
              </button>
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all shadow-md"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </div>
          </div>
          <p className="text-center text-[10px] text-outline/60 mt-3 font-label-sm">
            المدرب الذكي قد يخطئ، يرجى التحقق من العمليات الحسابية المعقدة.
          </p>
        </div>
      </div>
    </div>
  );
}
