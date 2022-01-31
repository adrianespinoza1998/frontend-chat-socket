import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../components/screens/HomeScreen';

export const DashboardRoutes = () => {
  return (
      <Routes>
          <Route path="/dashboard" element={<HomeScreen />} />
      </Routes>
  )
};
