import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import { LoginScreen } from '../components/screens/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {

    return (
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={
                <PublicRoutes>
                  <LoginScreen />
                </PublicRoutes>
              } />
              <Route path="/*" element={
                <PrivateRoutes>
                  <DashboardRoutes />
                </PrivateRoutes>
              } />
              <Route exact path="/" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
  );
};
