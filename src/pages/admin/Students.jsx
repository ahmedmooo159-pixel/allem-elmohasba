import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import SearchBar from "../../components/ui/SearchBar";

export default function AdminStudents() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      phone: "+966501234567",
      joinDate: "2024-01-15",
      coursesCompleted: 8,
      averageScore: 89,
      status: "active",
      lastActive: "اليوم",
    },
    {
      id: 2,
      name: "فاطمة علي",
      email: "fatima@example.com",
      phone: "+966502345678",
      joinDate: "2024-01-20",
      coursesCompleted: 5,
      averageScore: 76,
      status: "active",
      lastActive: "أمس",
    },
    {
      id: 3,
      name: "محمد سالم",
      email: "mohammad@example.com",
      phone: "+966503456789",
      joinDate: "2024-02-01",
      coursesCompleted: 2,
      averageScore: 65,
      status: "inactive",
      lastActive: "منذ أسبوع",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.includes(searchQuery) ||
      student.email.includes(searchQuery) ||
      student.phone.includes(searchQuery);

    const matchesStatus =
      filterStatus === "all" || student.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      ...formData,
      joinDate: new Date().toISOString().split("T")[0],
      coursesCompleted: 0,
      averageScore: 0,
      status: "active",
      lastActive: "اليوم",
    };

    setStudents([newStudent, ...students]);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    setShowForm(false);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleToggleStatus = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "active" ? "inactive" : "active",
            }
          : student
      )
    );
  };

  const stats = [
    {
      label: "إجمالي الطلاب",
      value: students.length,
      icon: "group",
    },
    {
      label: "الطلاب النشطون",
      value: students.filter((s) => s.status === "active").length,
      icon: "check_circle",
    },
    {
      label: "متوسط الدرجات",
      value: (
        students.reduce((sum, s) => sum + s.averageScore, 0) / students.length
      ).toFixed(1),
      icon: "trending_up",
    },
    {
      label: "إجمالي الدورات المكتملة",
      value: students.reduce((sum, s) => sum + s.coursesCompleted, 0),
      icon: "play_circle",
    },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader
        title="إدارة الطلاب"
        description="راقب وأدر بيانات الطلاب والمتعلمين"
      />

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-surface-container rounded-xl p-6 border border-outline-variant/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  {stat.icon}
                </span>
              </div>
              <p className="text-label-sm text-on-surface-variant">
                {stat.label}
              </p>
            </div>
            <p className="text-display-lg-mobile font-bold text-on-surface">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="w-full md:w-80">
            <SearchBar
              placeholder="ابحث عن طالب..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          >
            <option value="all">جميع الحالات</option>
            <option value="active">نشط</option>
            <option value="inactive">معطل</option>
          </select>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-primary text-white rounded-xl font-label-sm hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>
          طالب جديد
        </button>
      </div>

      {/* Add Student Form */}
      {showForm && (
        <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
          <form onSubmit={handleAddStudent} className="space-y-4">
            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                الاسم الكامل
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="أدخل اسم الطالب"
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="البريد الإلكتروني"
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="رقم الهاتف"
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-label-sm hover:bg-primary/90 transition-all"
              >
                حفظ الطالب
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

      {/* Students Table */}
      <div className="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-low">
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  الاسم
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  البريد الإلكتروني
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  الدورات المكتملة
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  متوسط الدرجات
                </th>
                <th className="px-6 py-4 text-right text-label-sm font-bold text-on-surface">
                  آخر نشاط
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
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-all"
                  >
                    <td className="px-6 py-4 text-body-md text-on-surface font-medium">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface-variant">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface text-center">
                      {student.coursesCompleted}
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface font-medium text-center">
                      {student.averageScore}%
                    </td>
                    <td className="px-6 py-4 text-body-md text-on-surface-variant">
                      {student.lastActive}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-label-sm font-medium ${
                          student.status === "active"
                            ? "bg-tertiary/10 text-tertiary"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm">
                          {student.status === "active"
                            ? "check_circle"
                            : "block"}
                        </span>
                        {student.status === "active" ? "نشط" : "معطل"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleStatus(student.id)}
                          className={`p-2 rounded-lg transition-all ${
                            student.status === "active"
                              ? "text-tertiary hover:bg-tertiary/10"
                              : "text-on-surface-variant hover:bg-surface-container-high"
                          }`}
                          title={student.status === "active" ? "تعطيل" : "تفعيل"}
                        >
                          <span className="material-symbols-outlined text-sm">
                            {student.status === "active"
                              ? "check_circle"
                              : "block"}
                          </span>
                        </button>
                        <button
                          onClick={() => handleDeleteStudent(student.id)}
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
                  <td colSpan="7" className="px-6 py-8 text-center">
                    <p className="text-on-surface-variant">
                      لا توجد طلاب تطابق البحث
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
