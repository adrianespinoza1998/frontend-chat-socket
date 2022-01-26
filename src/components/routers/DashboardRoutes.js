import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../screens/HomeScreen';

export const DashboardRoutes = () => {
  return (
      <Routes>
          <Route path="/dashboard" element={<HomeScreen />} />
      </Routes>
  )
};
