import {Routes, Route, BrowserRouter, Navigate, useLocation} from 'react-router-dom';

import { LoginScreen } from '../screens/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    return (
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/*" element={<DashboardRoutes />} />
              <Route exact path="/" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
  );
};
