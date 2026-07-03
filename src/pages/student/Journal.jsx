import { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";

export default function Journal() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "2024-02-15",
      description: "شراء أثاث مكتبي نقداً",
      debit: [{ account: "الأثاث", amount: 15000 }],
      credit: [{ account: "الصندوق", amount: 15000 }],
      reference: "JV-001",
    },
    {
      id: 2,
      date: "2024-02-14",
      description: "سداد فواتير الكهرباء والمياه",
      debit: [{ account: "مصروفات الكهرباء والمياه", amount: 2450 }],
      credit: [{ account: "البنك", amount: 2450 }],
      reference: "JV-002",
    },
    {
      id: 3,
      date: "2024-02-13",
      description: "بيع بضاعة بالآجل",
      debit: [{ account: "العملاء", amount: 50000 }],
      credit: [{ account: "المبيعات", amount: 50000 }],
      reference: "JV-003",
    },
  ]);

  const [formData, setFormData] = useState({
    date: "",
    description: "",
    debitAccount: "",
    debitAmount: "",
    creditAccount: "",
    creditAmount: "",
  });

  const [showForm, setShowForm] = useState(false);

  const accounts = [
    "الأثاث",
    "الصندوق",
    "البنك",
    "العملاء",
    "الموردون",
    "رأس المال",
    "المبيعات",
    "المشتريات",
    "مصروفات الكهرباء والمياه",
    "مصروفات الإيجار",
    "مصروفات الرواتب",
  ];

  const handleAddEntry = (e) => {
    e.preventDefault();

    if (
      !formData.date ||
      !formData.description ||
      !formData.debitAccount ||
      !formData.debitAmount ||
      !formData.creditAccount ||
      !formData.creditAmount
    ) {
      alert("يرجى ملء جميع الحقول");
      return;
    }

    const debitAmount = parseFloat(formData.debitAmount);
    const creditAmount = parseFloat(formData.creditAmount);

    if (debitAmount !== creditAmount) {
      alert("المبلغ المدين يجب أن يساوي المبلغ الدائن");
      return;
    }

    const newEntry = {
      id: entries.length + 1,
      date: formData.date,
      description: formData.description,
      debit: [{ account: formData.debitAccount, amount: debitAmount }],
      credit: [{ account: formData.creditAccount, amount: creditAmount }],
      reference: `JV-${String(entries.length + 1).padStart(3, "0")}`,
    };

    setEntries([newEntry, ...entries]);
    setFormData({
      date: "",
      description: "",
      debitAccount: "",
      debitAmount: "",
      creditAccount: "",
      creditAmount: "",
    });
    setShowForm(false);
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const totalDebit = entries.reduce(
    (sum, entry) =>
      sum + entry.debit.reduce((acc, item) => acc + item.amount, 0),
    0
  );

  const totalCredit = entries.reduce(
    (sum, entry) =>
      sum + entry.credit.reduce((acc, item) => acc + item.amount, 0),
    0
  );

  const isBalanced = totalDebit === totalCredit;

  return (
    <div className="space-y-6">
      <SectionHeader
        title="معمل القيود"
        description="سجل قيود اليومية وتابع توازن الحسابات المدينة والدائنة"
      />

      {/* Balance Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
          <p className="text-label-sm text-on-surface-variant mb-2">إجمالي المدين</p>
          <p className="text-display-lg-mobile font-bold text-primary">
            {totalDebit.toLocaleString("ar-SA")}
          </p>
        </div>
        <div className="bg-gradient-to-br from-tertiary/10 to-tertiary/5 rounded-xl p-6 border border-tertiary/20">
          <p className="text-label-sm text-on-surface-variant mb-2">إجمالي الدائن</p>
          <p className="text-display-lg-mobile font-bold text-tertiary">
            {totalCredit.toLocaleString("ar-SA")}
          </p>
        </div>
        <div
          className={`rounded-xl p-6 border ${
            isBalanced
              ? "bg-gradient-to-br from-tertiary/10 to-tertiary/5 border-tertiary/20"
              : "bg-gradient-to-br from-error/10 to-error/5 border-error/20"
          }`}
        >
          <p className="text-label-sm text-on-surface-variant mb-2">الحالة</p>
          <p
            className={`text-display-lg-mobile font-bold ${
              isBalanced ? "text-tertiary" : "text-error"
            }`}
          >
            {isBalanced ? "متوازن ✓" : "غير متوازن ✗"}
          </p>
        </div>
      </div>

      {/* Add Entry Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-xl font-label-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined">add</span>
        إضافة قيد جديد
      </button>

      {/* Add Entry Form */}
      {showForm && (
        <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/20">
          <form onSubmit={handleAddEntry} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  التاريخ
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  الوصف
                </label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="وصف العملية المالية"
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  حساب المدين
                </label>
                <select
                  value={formData.debitAccount}
                  onChange={(e) =>
                    setFormData({ ...formData, debitAccount: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="">اختر حساباً</option>
                  {accounts.map((acc) => (
                    <option key={acc} value={acc}>
                      {acc}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  المبلغ المدين
                </label>
                <input
                  type="number"
                  value={formData.debitAmount}
                  onChange={(e) =>
                    setFormData({ ...formData, debitAmount: e.target.value })
                  }
                  placeholder="0.00"
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  حساب الدائن
                </label>
                <select
                  value={formData.creditAccount}
                  onChange={(e) =>
                    setFormData({ ...formData, creditAccount: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="">اختر حساباً</option>
                  {accounts.map((acc) => (
                    <option key={acc} value={acc}>
                      {acc}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-label-sm font-medium text-on-surface mb-2">
                  المبلغ الدائن
                </label>
                <input
                  type="number"
                  value={formData.creditAmount}
                  onChange={(e) =>
                    setFormData({ ...formData, creditAmount: e.target.value })
                  }
                  placeholder="0.00"
                  className="w-full px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-label-sm hover:bg-primary/90 transition-all"
              >
                حفظ القيد
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

      {/* Entries List */}
      <div className="space-y-3">
        {entries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-on-surface-variant">لا توجد قيود حالياً</p>
          </div>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-surface-container rounded-xl p-6 border border-outline-variant/20 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-body-md font-bold text-on-surface">
                    {entry.description}
                  </h4>
                  <p className="text-label-sm text-on-surface-variant mt-1">
                    {new Date(entry.date).toLocaleDateString("ar-SA")} • {entry.reference}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteEntry(entry.id)}
                  className="p-2 text-error hover:bg-error/10 rounded-lg transition-all"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-label-sm font-bold text-primary mb-3">المدين</p>
                  {entry.debit.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center mb-2">
                      <span className="text-body-md text-on-surface">
                        {item.account}
                      </span>
                      <span className="text-body-md font-bold text-primary">
                        {item.amount.toLocaleString("ar-SA")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-tertiary/5 rounded-lg p-4 border border-tertiary/20">
                  <p className="text-label-sm font-bold text-tertiary mb-3">الدائن</p>
                  {entry.credit.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center mb-2">
                      <span className="text-body-md text-on-surface">
                        {item.account}
                      </span>
                      <span className="text-body-md font-bold text-tertiary">
                        {item.amount.toLocaleString("ar-SA")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}