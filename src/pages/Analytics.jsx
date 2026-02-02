import React from 'react';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Performance Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-64 bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="font-bold mb-4">Weekly Output</h3>
          <div className="flex items-end justify-between h-40 px-4">
            {[40, 70, 45, 90, 65, 80, 30].map((h, i) => (
              <div key={i} style={{ height: `${h}%` }} className="w-8 bg-indigo-500 rounded-t" />
            ))}
          </div>
        </div>
        <div className="h-64 bg-white rounded-xl border border-gray-100 p-6 flex items-center justify-center">
          <p className="text-gray-400 italic">Distrubution Chart (Integration Pending)</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;