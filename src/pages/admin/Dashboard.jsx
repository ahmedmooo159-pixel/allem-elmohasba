import SectionHeader from "../../components/ui/SectionHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  const performanceData = [
    { month: "يناير", students: 45, videos: 12, questions: 150 },
    { month: "فبراير", students: 52, videos: 15, questions: 180 },
    { month: "مارس", students: 68, videos: 18, questions: 220 },
    { month: "أبريل", students: 75, videos: 20, questions: 250 },
    { month: "مايو", students: 89, videos: 25, questions: 310 },
    { month: "يونيو", students: 102, videos: 28, questions: 350 },
  ];

  const stats = [
    {
      label: "إجمالي الطلاب",
      value: "102",
      trend: "+15",
      icon: "group",
      color: "primary",
    },
    {
      label: "الفيديوهات المنشورة",
      value: "28",
      trend: "+3",
      icon: "play_circle",
      color: "tertiary",
    },
    {
      label: "الأسئلة في البنك",
      value: "350",
      trend: "+40",
      icon: "quiz",
      color: "secondary",
    },
    {
      label: "معدل الإنجاز",
      value: "87%",
      trend: "+5%",
      icon: "trending_up",
      color: "primary",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "student",
      message: "طالب جديد: محمد علي",
      time: "قبل 2 ساعة",
      icon: "person_add",
    },
    {
      id: 2,
      type: "video",
      message: "تم تحميل فيديو: مقدمة في المحاسبة",
      time: "قبل 5 ساعات",
      icon: "upload",
    },
    {
      id: 3,
      type: "question",
      message: "تم إضافة 10 أسئلة جديدة",
      time: "أمس",
      icon: "add_circle",
    },
    {
      id: 4,
      type: "report",
      message: "تقرير أسبوعي: 95% من الطلاب نشطون",
      time: "أمس",
      icon: "assessment",
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader
        title="لوحة تحكم الإدارة"
        description="راقب إحصائيات المنصة والطلاب والمحتوى"
      />

      {/* Key Metrics */}
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

      {/* Platform Growth */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          نمو المنصة
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d9e3fb" />
            <XAxis dataKey="month" stroke="#464556" />
            <YAxis stroke="#464556" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f9f9ff",
                border: "1px solid #d9e3fb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#412ce7"
              strokeWidth={2}
              name="الطلاب"
            />
            <Line
              type="monotone"
              dataKey="videos"
              stroke="#005b70"
              strokeWidth={2}
              name="الفيديوهات"
            />
            <Line
              type="monotone"
              dataKey="questions"
              stroke="#5b4dff"
              strokeWidth={2}
              name="الأسئلة"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Content Statistics */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          إحصائيات المحتوى
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d9e3fb" />
            <XAxis dataKey="month" stroke="#464556" />
            <YAxis stroke="#464556" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f9f9ff",
                border: "1px solid #d9e3fb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="videos" fill="#412ce7" name="الفيديوهات" />
            <Bar dataKey="questions" fill="#005b70" name="الأسئلة" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activities */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          الأنشطة الأخيرة
        </h3>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary">
                  {activity.icon}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-body-md text-on-surface">{activity.message}</p>
                <p className="text-label-sm text-on-surface-variant">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <button className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all text-left">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">
                upload
              </span>
            </div>
            <h4 className="text-headline-md font-headline-md text-on-surface">
              تحميل فيديو جديد
            </h4>
          </div>
          <p className="text-body-md text-on-surface-variant">
            أضف محاضرة جديدة للمنصة
          </p>
        </button>

        <button className="bg-gradient-to-br from-tertiary/10 to-tertiary/5 rounded-xl p-6 border border-tertiary/20 hover:shadow-lg transition-all text-left">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-tertiary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-xl">
                quiz
              </span>
            </div>
            <h4 className="text-headline-md font-headline-md text-on-surface">
              إضافة أسئلة
            </h4>
          </div>
          <p className="text-body-md text-on-surface-variant">
            أضف أسئلة جديدة لبنك الأسئلة
          </p>
        </button>
      </div>
    </div>
  );
}