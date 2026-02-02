import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './pages/dashboard.jsx';
import Kanban from './pages/Kanban';
import Team from './pages/Team';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 text-gray-900">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Kanban />} />
            <Route path="/team" element={<Team />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
