import React from 'react';
import { CheckCircle, Clock, Users, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Tasks', value: '12', icon: <Clock />, color: 'bg-blue-500' },
    { label: 'Completed', value: '148', icon: <CheckCircle />, color: 'bg-green-500' },
    { label: 'Team Members', value: '8', icon: <Users />, color: 'bg-purple-500' },
    { label: 'Efficiency', value: '94%', icon: <BarChart3 />, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Project Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className={`${stat.color} p-3 rounded-lg text-white`}>{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map(item => (
            <div key={item} className="flex items-center justify-between py-3 border-b last:border-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <p className="font-medium">System Update</p>
                  <p className="text-sm text-gray-500">Task "API Integration" moved to Done</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">2h ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
