import { Link } from "react-router-dom";
import SectionHeader from "../../components/ui/SectionHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import VideoCard from "../../components/videos/VideoCard";
import NotificationCard from "../../components/ui/NotificationCard";

export default function Dashboard() {
  const activities = [
    {
      icon: "quiz",
      message: <>أكملت اختبار: <span className="font-bold">مبادئ المحاسبة</span></>,
      time: "قبل ساعتين",
      actionText: "92/100",
      actionColor: "tertiary",
    },
    {
      icon: "description",
      message: <>قمت بتحميل: <span className="font-bold">دليل القيود اليومية</span></>,
      time: "قبل 5 ساعات",
      actionText: "تحميل مجدد",
      actionColor: "primary",
    },
    {
      icon: "chat",
      message: <>رد جديد على سؤالك في <span className="font-bold">المنتدى</span></>,
      time: "أمس",
      actionText: "مشاهدة",
      actionColor: "primary",
    },
  ];

  const chapters = [
    { name: "النظام المحاسبي", icon: "menu_book" },
    { name: "الأصول المتداولة", icon: "payments" },
    { name: "القوائم المالية", icon: "pie_chart" },
  ];

  return (
    <div className="space-y-8">
      {/* Greeting & Header */}
      <SectionHeader
        title="مرحباً بك يا أحمد 👋"
        description="واصل رحلة إتقان المحاسبة اليوم، لقد قطعت شوطاً رائعاً!"
        actionText="استكمال التعلم"
        actionIcon="play_arrow"
      />

      {/* Bento Grid Metrics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <StatsCard
          title="التقدم العام"
          value="75%"
          icon="trending_up"
          badge="+12%"
          badgeColor="primary"
          type="progress"
          progressValue={75}
        />
        <StatsCard
          title="الفيديوهات المكتملة"
          value="12/20"
          icon="video_library"
          badge="8 متبقي"
          badgeColor="secondary"
          type="avatars"
        />
        <StatsCard
          title="الأسئلة المجابة"
          value="450"
          icon="task_alt"
          badge="نشط"
          badgeColor="tertiary"
          type="text"
          subtitle="تم حل 45 سؤالاً في الـ 24 ساعة الماضية"
        />
        <StatsCard
          title="متوسط النتيجة"
          value="88%"
          icon="grade"
          badge="امتياز"
          badgeColor="primary"
          type="stars"
          starsCount={4}
        />
      </section>

      {/* Main Content Sections split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
        {/* Weekly Progress & Video */}
        <div className="lg:col-span-2 space-y-gutter">
          {/* Weekly chart Card */}
          <div className="glass-card p-8 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-headline-md text-on-surface font-semibold">نشاطك الأسبوعي</h4>
              <select className="bg-surface-container border-none rounded-lg text-sm font-label-sm px-4 py-2 text-on-surface focus:ring-2 focus:ring-primary/20">
                <option>آخر 7 أيام</option>
                <option>آخر 30 يوم</option>
              </select>
            </div>
            {/* Chart layout */}
            <div className="h-64 flex items-end justify-between gap-2 px-4 border-b border-outline-variant/20 pb-4">
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-primary-fixed hover:bg-primary transition-colors rounded-t-lg" style={{ height: "60%" }}></div>
                <span className="text-[10px] text-on-surface-variant">الأحد</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-primary-fixed hover:bg-primary transition-colors rounded-t-lg" style={{ height: "85%" }}></div>
                <span className="text-[10px] text-on-surface-variant">الإثنين</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-primary hover:bg-primary transition-colors rounded-t-lg" style={{ height: "40%" }}></div>
                <span className="text-[10px] text-on-surface-variant">الثلاثاء</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-primary-fixed hover:bg-primary transition-colors rounded-t-lg" style={{ height: "95%" }}></div>
                <span className="text-[10px] text-on-surface-variant">الأربعاء</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-primary-fixed hover:bg-primary transition-colors rounded-t-lg" style={{ height: "70%" }}></div>
                <span className="text-[10px] text-on-surface-variant">الخميس</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-primary-fixed hover:bg-primary transition-colors rounded-t-lg" style={{ height: "30%" }}></div>
                <span className="text-[10px] text-on-surface-variant">الجمعة</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-primary-fixed hover:bg-primary transition-colors rounded-t-lg" style={{ height: "55%" }}></div>
                <span className="text-[10px] text-on-surface-variant">السبت</span>
              </div>
            </div>
          </div>

          {/* Continue learning block */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h4 className="font-headline-md text-on-surface font-semibold">استكمال التعلم</h4>
              <Link to="/videos" className="text-primary font-label-sm text-sm hover:underline">
                عرض كل الدورات
              </Link>
            </div>
            <VideoCard
              chapter="الفصل الثالث: قيود اليومية"
              title="تسجيل العمليات المالية المعقدة"
              description="تعلم كيفية معالجة قيود التسوية والإهلاك في نهاية السنة المالية بأسلوب احترافي ومبسط."
              duration="12 دقيقة متبقية"
              instructor="د. إبراهيم محمد"
              progress={65}
              horizontal={true}
              thumbnail="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
            />
          </div>
        </div>

        {/* Sidebar widgets */}
        <div className="space-y-gutter">
          {/* Recent activities widget */}
          <div className="glass-card p-6 rounded-xl shadow-sm">
            <h4 className="font-headline-md text-on-surface font-semibold mb-6">النشاط الأخير</h4>
            <div className="space-y-6">
              {activities.map((act, i) => (
                <NotificationCard
                  key={i}
                  icon={act.icon}
                  message={act.message}
                  time={act.time}
                  actionText={act.actionText}
                  actionColor={act.actionColor}
                />
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-on-surface-variant font-label-sm hover:bg-surface-container rounded-lg transition-colors duration-200">
              عرض السجل الكامل
            </button>
          </div>

          {/* Chapters shortcut widget */}
          <div className="glass-card p-6 rounded-xl shadow-sm bg-gradient-to-br from-primary to-primary-container text-on-primary">
            <h4 className="font-headline-md font-semibold mb-4 text-white">الفصول الحالية</h4>
            <div className="space-y-3">
              {chapters.map((chap, i) => (
                <Link
                  to="/videos"
                  key={i}
                  className="bg-white/10 p-3 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-white/20 transition-all text-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-white">{chap.icon}</span>
                    <span className="font-label-sm text-sm text-white">{chap.name}</span>
                  </div>
                  <span className="material-symbols-outlined text-sm text-white group-hover:translate-x-[-4px] transition-transform">
                    arrow_back_ios
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (FAB) linking to Journal */}
      <Link
        to="/journal"
        className="fixed bottom-8 left-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
        <span className="absolute right-full mr-4 bg-on-surface text-white text-sm font-label-sm px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          قيد جديد
        </span>
      </Link>
    </div>
  );
}