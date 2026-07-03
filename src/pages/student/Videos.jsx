import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import SearchBar from "../../components/ui/SearchBar";
import ChapterTabs from "../../components/ui/ChapterTabs";
import VideoCard from "../../components/videos/VideoCard";
import EmptyState from "../../components/ui/EmptyState";

export default function Videos() {
  const tabs = ["كل الفصول", "النظام المحاسبي", "الأصول المتداولة", "القوائم المالية", "قيود اليومية"];
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const videosData = [
    {
      chapter: "النظام المحاسبي",
      title: "مقدمة في المبادئ المحاسبية",
      description: "تعريف المحاسبة المالية وأهم المبادئ والفروض المحاسبية التي تقوم عليها الدورة المستندية والمالية.",
      duration: "25 دقيقة",
      instructor: "د. إبراهيم محمد",
      progress: 100,
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80",
    },
    {
      chapter: "النظام المحاسبي",
      title: "الحسابات المدينة والدائنة",
      description: "شرح معمق لطبيعة الحسابات المحاسبية المختلفة والفرق الجوهري بين الحسابات المدنية والدائنة وميكانيكية عملها.",
      duration: "18 دقيقة",
      instructor: "د. إبراهيم محمد",
      progress: 90,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    },
    {
      chapter: "الأصول المتداولة",
      title: "معالجة المخزون السلعي",
      description: "شرح الطرق المختلفة لتقييم المخزون (الوارد أولاً صادر أولاً، والوارد أخيراً صادر أولاً، والوزن النسبي المتوسط).",
      duration: "30 دقيقة",
      instructor: "د. إبراهيم محمد",
      progress: 40,
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80",
    },
    {
      chapter: "الأصول المتداولة",
      title: "إدارة النقدية والبنك",
      description: "مذكرة تسوية البنك وكيفية مطابقة كشف حساب البنك مع السجلات المحاسبية والتعامل مع الفروقات النقدية.",
      duration: "22 دقيقة",
      instructor: "د. إبراهيم محمد",
      progress: 0,
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80",
    },
    {
      chapter: "قيود اليومية",
      title: "تسجيل العمليات المالية المعقدة",
      description: "تعلم كيفية معالجة قيود التسوية والإهلاك في نهاية السنة المالية بأسلوب احترافي ومبسط.",
      duration: "12 دقيقة متبقية",
      instructor: "د. إبراهيم محمد",
      progress: 65,
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
    },
    {
      chapter: "القوائم المالية",
      title: "إعداد قائمة الدخل",
      description: "شرح هيكل قائمة الدخل وحساب مجمل وصافي الأرباح السنوية والتعامل مع بنود الإيرادات والمصروفات.",
      duration: "35 دقيقة",
      instructor: "د. إبراهيم محمد",
      progress: 0,
      thumbnail: "https://images.unsplash.com/photo-1543286386-7a3950385cc4?auto=format&fit=crop&w=400&q=80",
    },
  ];

  // Filtering Logic
  const filteredVideos = videosData.filter((vid) => {
    const matchesTab = activeTab === 0 || vid.chapter === tabs[activeTab];
    const matchesSearch =
      vid.title.includes(searchQuery) ||
      vid.description.includes(searchQuery) ||
      vid.chapter.includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <SectionHeader
        title="الدورات التدريبية"
        description="استعرض محاضرات الفيديوهات التعليمية المسجلة وتابع تقدمك في المنهج المحاسبي."
      />

      {/* Filter and Search controls wrapper */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-outline-variant/10 pb-4">
        <div className="w-full md:w-auto">
          <ChapterTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>
        <div className="w-full md:w-80">
          <SearchBar
            placeholder="ابحث عن محاضرات بالفيديو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Videos Grid */}
      {filteredVideos.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredVideos.map((video, index) => (
            <VideoCard
              key={index}
              chapter={video.chapter}
              title={video.title}
              description={video.description}
              duration={video.duration}
              instructor={video.instructor}
              progress={video.progress}
              thumbnail={video.thumbnail}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          title="لا توجد محاضرات حالياً"
          description="لم نجد أي محاضرات فيديو تطابق خيارات الفلترة أو مصطلحات البحث الحالية."
        />
      )}
    </div>
  );
}