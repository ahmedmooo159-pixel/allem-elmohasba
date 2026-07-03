import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const performanceData = [
    { month: "يناير", score: 75 },
    { month: "فبراير", score: 82 },
    { month: "مارس", score: 88 },
    { month: "أبريل", score: 85 },
    { month: "مايو", score: 92 },
    { month: "يونيو", score: 89 },
  ];

  const chapterData = [
    { name: "النظام المحاسبي", completed: 95, total: 100 },
    { name: "الأصول المتداولة", completed: 78, total: 100 },
    { name: "القوائم المالية", completed: 65, total: 100 },
    { name: "قيود اليومية", completed: 88, total: 100 },
  ];

  const quizData = [
    { name: "مبادئ المحاسبة", value: 90, color: "#412ce7" },
    { name: "المدين والدائن", value: 85, color: "#005b70" },
    { name: "قيود التسوية", value: 78, color: "#5b4dff" },
    { name: "الميزانية العمومية", value: 82, color: "#d9e3fb" },
  ];

  const stats = [
    {
      label: "معدل الأداء",
      value: "89%",
      trend: "+5%",
      icon: "trending_up",
      color: "primary",
    },
    {
      label: "ساعات الدراسة",
      value: "120",
      trend: "+8h",
      icon: "schedule",
      color: "tertiary",
    },
    {
      label: "الاختبارات المكتملة",
      value: "15",
      trend: "+3",
      icon: "quiz",
      color: "secondary",
    },
    {
      label: "الإنجازات",
      value: "8",
      trend: "+2",
      icon: "star",
      color: "primary",
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader
        title="التحليلات"
        description="راقب تقدمك وأدائك عبر رسومات بيانية مفصلة"
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

      {/* Performance Over Time */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          تطور الأداء عبر الوقت
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
              dataKey="score"
              stroke="#412ce7"
              strokeWidth={3}
              dot={{ fill: "#412ce7", r: 5 }}
              name="معدل الأداء"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Chapter Progress */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          التقدم بالفصول
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chapterData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d9e3fb" />
            <XAxis dataKey="name" stroke="#464556" />
            <YAxis stroke="#464556" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f9f9ff",
                border: "1px solid #d9e3fb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="completed" fill="#412ce7" name="مكتمل" />
            <Bar dataKey="total" fill="#d9e3fb" name="إجمالي" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Quiz Scores Distribution */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          توزيع درجات الاختبارات
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={quizData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {quizData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Chapter Stats */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">
          إحصائيات مفصلة لكل فصل
        </h3>
        <div className="space-y-3">
          {chapterData.map((chapter, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-body-md font-medium text-on-surface mb-2">
                  {chapter.name}
                </p>
                <div className="w-full bg-surface-container-low rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${(chapter.completed / chapter.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div className="text-right">
                <p className="text-body-md font-bold text-primary">
                  {chapter.completed}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
