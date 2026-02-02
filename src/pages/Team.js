import React from 'react';

const Team = () => {
  const members = [
    { name: 'Alex Rivera', role: 'Lead Developer', status: 'Active', email: 'alex@flow.com' },
    { name: 'Sarah Chen', role: 'UI/UX Designer', status: 'In Meeting', email: 'sarah@flow.com' },
    { name: 'Mike Ross', role: 'Product Manager', status: 'Away', email: 'mike@flow.com' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-4 font-semibold">Member</th>
            <th className="px-6 py-4 font-semibold">Role</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium">{m.name}</td>
              <td className="px-6 py-4 text-gray-600">{m.role}</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">{m.status}</span>
              </td>
              <td className="px-6 py-4 text-gray-500">{m.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Team;
