import SectionHeader from "../../components/ui/SectionHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import Avatar from "../../components/ui/Avatar";

export default function Profile() {
  const profileData = {
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "+966501234567",
    joinDate: "15 يناير 2024",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtJudkUx0Gn4cwIzx3mMTDPZdBfF7DT_Qv8BhOQjHB5fJwbHsWRILv2CAOnadIVHxYaCT-x8y7YaLEu5B_1uNX8ayv1BO-4sKGAyEv5vRC1KL79vQiDzeLezqmcRwiVbEpb6yjtenOqFcdSy_OqGTB4qeNNmx10x70ZeUcZldjtBEGBP19TzgfPDCdgwXuuHh-GgLSVP1mAKDJ-SmKm-mfb3CyS9uc5t00DWnIQ1yujMp_ZFfMBaIAjBh_SHgyl8TmEfInkSXn8UU",
  };

  const achievements = [
    {
      id: 1,
      title: "المحترف الأول",
      description: "أكملت 50 درسة بنجاح",
      icon: "star",
      color: "primary",
      date: "15 فبراير 2024",
    },
    {
      id: 2,
      title: "خبير القيود",
      description: "حققت 95% في اختبار القيود المزدوجة",
      icon: "school",
      color: "tertiary",
      date: "10 فبراير 2024",
    },
    {
      id: 3,
      title: "متسلسل الإنجازات",
      description: "تعلمت 30 يوم متتالي",
      icon: "local_fire_department",
      color: "error",
      date: "5 فبراير 2024",
    },
    {
      id: 4,
      title: "محلل البيانات",
      description: "أكملت جميع دروس التحليل المالي",
      icon: "analytics",
      color: "secondary",
      date: "1 فبراير 2024",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "شهادة المحاسبة الأساسية",
      issueDate: "15 يناير 2024",
      score: "92%",
      status: "completed",
    },
    {
      id: 2,
      title: "شهادة القيود المتقدمة",
      issueDate: "10 فبراير 2024",
      score: "88%",
      status: "completed",
    },
    {
      id: 3,
      title: "شهادة التحليل المالي",
      issueDate: "قريباً",
      score: "-",
      status: "in-progress",
    },
  ];

  const stats = [
    {
      label: "الدروس المكتملة",
      value: "47",
      trend: "+12",
      icon: "play_circle",
      color: "primary",
    },
    {
      label: "الاختبارات المجتازة",
      value: "15",
      trend: "+3",
      icon: "quiz",
      color: "tertiary",
    },
    {
      label: "ساعات التعلم",
      value: "120",
      trend: "+8",
      icon: "schedule",
      color: "secondary",
    },
    {
      label: "متوسط الدرجات",
      value: "89%",
      trend: "+5",
      icon: "trending_up",
      color: "primary",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <SectionHeader
        title="ملفي الشخصي"
        description="اطلع على إحصائياتك وإنجازاتك وشهاداتك"
      />

      {/* Profile Card */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <Avatar
            src={profileData.avatar}
            size="xl"
            status="online"
          />
          <div className="flex-1">
            <h2 className="text-headline-md font-headline-md text-on-surface mb-1">
              {profileData.name}
            </h2>
            <p className="text-body-md text-on-surface-variant mb-4">
              طالب متفاني في تعلم المحاسبة
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-label-sm text-on-surface-variant">البريد الإلكتروني</p>
                <p className="text-body-md text-on-surface font-medium">{profileData.email}</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">رقم الهاتف</p>
                <p className="text-body-md text-on-surface font-medium">{profileData.phone}</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">تاريخ الانضمام</p>
                <p className="text-body-md text-on-surface font-medium">{profileData.joinDate}</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-3 bg-primary text-white rounded-xl font-label-sm hover:bg-primary/90 transition-all">
            تعديل الملف
          </button>
        </div>
      </div>

      {/* Statistics */}
      <section>
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          إحصائياتك
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {stats.map((stat, idx) => (
            <StatsCard
              key={idx}
              label={stat.label}
              value={stat.value}
              trend={stat.trend}
              icon={stat.icon}
              badgeColor={stat.color}
            />
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          الإنجازات 🏆
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gradient-to-br from-surface-container-low to-surface-container rounded-xl p-6 border border-outline-variant/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-${achievement.color}/10 flex items-center justify-center flex-shrink-0`}
                >
                  <span
                    className={`material-symbols-outlined text-${achievement.color}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {achievement.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-body-md font-bold text-on-surface">
                    {achievement.title}
                  </h4>
                  <p className="text-label-sm text-on-surface-variant mt-1">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-outline-variant mt-2">
                    {achievement.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section>
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          الشهادات
        </h3>
        <div className="space-y-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 flex items-center justify-between hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    {cert.status === "completed" ? "verified" : "schedule"}
                  </span>
                </div>
                <div>
                  <h4 className="text-body-md font-bold text-on-surface">
                    {cert.title}
                  </h4>
                  <p className="text-label-sm text-on-surface-variant">
                    {cert.issueDate}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-body-md font-bold text-on-surface">
                  {cert.score}
                </p>
                <p
                  className={`text-label-sm font-medium ${
                    cert.status === "completed"
                      ? "text-tertiary"
                      : "text-on-surface-variant"
                  }`}
                >
                  {cert.status === "completed" ? "مكتملة" : "قيد الإنجاز"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
