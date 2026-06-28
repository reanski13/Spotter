import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/landing/LandingPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import WorkoutTracker from '../pages/workout/WorkoutTracker';
import WorkoutHistory from '../pages/workout/WorkoutHistory';
import Schedule from '../pages/schedule/Schedule';
import Progress from '../pages/progress/Progress';
import AICoach from '../pages/ai-coach/AICoach';
import Admin from '../pages/admin/Admin';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/workouts" element={<WorkoutTracker />} />
        <Route path="/history" element={<WorkoutHistory />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/ai-coach" element={<AICoach />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;