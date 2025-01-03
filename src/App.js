import React from 'react';
import { PlusCircle, PieChart, Calendar, TrendingUp } from 'lucide-react';

const App = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 rounded-t-lg">
        <h1 className="text-2xl font-bold">FinanceTracker</h1>
        <p className="text-sm">Saldo: Rp 5.000.000</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 my-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <PlusCircle className="mx-auto mb-2" />
          <p className="text-sm">Tambah Transaksi</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <PieChart className="mx-auto mb-2" />
          <p className="text-sm">Anggaran</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <Calendar className="mx-auto mb-2" />
          <p className="text-sm">Laporan</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <TrendingUp className="mx-auto mb-2" />
          <p className="text-sm">Investasi</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-lg font-bold mb-4">Transaksi Terakhir</h2>
        <div className="space-y-2">
          {[
            { desc: 'Belanja Bulanan', amount: -850000, category: 'Groceries' },
            { desc: 'Gaji', amount: 8000000, category: 'Income' },
            { desc: 'Internet', amount: -350000, category: 'Utilities' },
          ].map((tx, i) => (
            <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
              <div>
                <p className="font-medium">{tx.desc}</p>
                <p className="text-sm text-gray-500">{tx.category}</p>
              </div>
              <p className={tx.amount > 0 ? 'text-green-600' : 'text-red-600'}>
                Rp {Math.abs(tx.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Overview */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-bold mb-4">Ringkasan Anggaran</h2>
        <div className="space-y-4">
          {[
            { category: 'Makanan', used: 850000, limit: 1000000 },
            { category: 'Transport', used: 400000, limit: 500000 },
            { category: 'Hiburan', used: 300000, limit: 400000 },
          ].map((budget, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{budget.category}</span>
                <span>{Math.round(budget.used/budget.limit * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 rounded-full h-2" 
                  style={{width: `${(budget.used/budget.limit * 100)}%`}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;