import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    darkMode: false,
    language: "ar",
    timezone: "Asia/Riyadh",
  });

  const [profileSettings, setProfileSettings] = useState({
    firstName: "أحمد",
    lastName: "محمد",
    email: "ahmed@example.com",
    phone: "+966501234567",
    bio: "طالب متفاني في تعلم المحاسبة",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleSettingChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleProfileChange = (key, value) => {
    setProfileSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("كلمات المرور غير متطابقة");
      return;
    }
    alert("تم تحديث كلمة المرور بنجاح");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setShowPasswordForm(false);
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        title="الإعدادات"
        description="أدر تفضيلاتك وإعدادات حسابك"
      />

      {/* Profile Settings */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-6">
          معلومات الملف الشخصي
        </h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                الاسم الأول
              </label>
              <input
                type="text"
                value={profileSettings.firstName}
                onChange={(e) =>
                  handleProfileChange("firstName", e.target.value)
                }
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                الاسم الأخير
              </label>
              <input
                type="text"
                value={profileSettings.lastName}
                onChange={(e) =>
                  handleProfileChange("lastName", e.target.value)
                }
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-label-sm font-medium text-on-surface mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={profileSettings.email}
              onChange={(e) => handleProfileChange("email", e.target.value)}
              className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-label-sm font-medium text-on-surface mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              value={profileSettings.phone}
              onChange={(e) => handleProfileChange("phone", e.target.value)}
              className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-label-sm font-medium text-on-surface mb-2">
              نبذة عنك
            </label>
            <textarea
              value={profileSettings.bio}
              onChange={(e) => handleProfileChange("bio", e.target.value)}
              rows="3"
              className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
          </div>

          <button
            type="button"
            className="px-6 py-3 bg-primary text-white rounded-lg font-label-sm hover:bg-primary/90 transition-all"
          >
            حفظ التغييرات
          </button>
        </form>
      </div>

      {/* Notification Settings */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-6">
          إعدادات الإشعارات
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
            <div>
              <p className="text-body-md font-medium text-on-surface">
                إشعارات البريد الإلكتروني
              </p>
              <p className="text-label-sm text-on-surface-variant">
                استقبل تحديثات عبر بريدك الإلكتروني
              </p>
            </div>
            <button
              onClick={() => handleSettingChange("emailNotifications")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                settings.emailNotifications
                  ? "bg-primary"
                  : "bg-surface-container-high"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  settings.emailNotifications ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
            <div>
              <p className="text-body-md font-medium text-on-surface">
                إشعارات الدفع
              </p>
              <p className="text-label-sm text-on-surface-variant">
                استقبل إشعارات فورية على جهازك
              </p>
            </div>
            <button
              onClick={() => handleSettingChange("pushNotifications")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                settings.pushNotifications
                  ? "bg-primary"
                  : "bg-surface-container-high"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  settings.pushNotifications ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
            <div>
              <p className="text-body-md font-medium text-on-surface">
                التقرير الأسبوعي
              </p>
              <p className="text-label-sm text-on-surface-variant">
                احصل على ملخص أسبوعي لتقدمك
              </p>
            </div>
            <button
              onClick={() => handleSettingChange("weeklyReport")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                settings.weeklyReport
                  ? "bg-primary"
                  : "bg-surface-container-high"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  settings.weeklyReport ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-6">
          التفضيلات
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-label-sm font-medium text-on-surface mb-2">
              اللغة
            </label>
            <select
              value={settings.language}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  language: e.target.value,
                }))
              }
              className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>

          <div>
            <label className="block text-label-sm font-medium text-on-surface mb-2">
              المنطقة الزمنية
            </label>
            <select
              value={settings.timezone}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  timezone: e.target.value,
                }))
              }
              className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="Asia/Riyadh">الرياض (UTC+3)</option>
              <option value="Asia/Dubai">دبي (UTC+4)</option>
              <option value="Africa/Cairo">القاهرة (UTC+2)</option>
              <option value="Europe/London">لندن (UTC+0)</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
            <div>
              <p className="text-body-md font-medium text-on-surface">
                الوضع الليلي
              </p>
              <p className="text-label-sm text-on-surface-variant">
                تفعيل الوضع الليلي للعيون
              </p>
            </div>
            <button
              onClick={() => handleSettingChange("darkMode")}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                settings.darkMode ? "bg-primary" : "bg-surface-container-high"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  settings.darkMode ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-6">
          الأمان
        </h3>

        {!showPasswordForm ? (
          <button
            onClick={() => setShowPasswordForm(true)}
            className="px-6 py-3 bg-primary text-white rounded-lg font-label-sm hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">lock</span>
            تغيير كلمة المرور
          </button>
        ) : (
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                كلمة المرور الحالية
              </label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData((prev) => ({
                    ...prev,
                    currentPassword: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                كلمة المرور الجديدة
              </label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData((prev) => ({
                    ...prev,
                    newPassword: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-label-sm font-medium text-on-surface mb-2">
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-label-sm hover:bg-primary/90 transition-all"
              >
                حفظ كلمة المرور
              </button>
              <button
                type="button"
                onClick={() => setShowPasswordForm(false)}
                className="flex-1 px-6 py-3 bg-surface-container-high text-on-surface rounded-lg font-label-sm hover:bg-surface-container transition-all"
              >
                إلغاء
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Danger Zone */}
      <div className="bg-error/5 rounded-xl p-6 border border-error/20">
        <h3 className="text-headline-md font-headline-md text-error mb-4">
          منطقة الخطر
        </h3>
        <p className="text-body-md text-on-surface-variant mb-4">
          احذر من هذه الإجراءات، فهي قد تؤثر على حسابك بشكل دائم.
        </p>
        <button className="px-6 py-3 bg-error text-white rounded-lg font-label-sm hover:bg-error/90 transition-all">
          حذف الحساب
        </button>
      </div>
    </div>
  );
}
