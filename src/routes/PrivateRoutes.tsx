import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateRoutes: React.FC = () => {
  return <Outlet />;
};

export default PrivateRoutes;
