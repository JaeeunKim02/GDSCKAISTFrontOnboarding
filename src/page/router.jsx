import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { MainLayout, RootLayout } from './layout/index';
import HospitalList from '../template/HospitalList';
import MyList from '../template/MyList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<MainLayout />}>
        <Route path="/main" element={<HospitalList />} />
        <Route path="/my" element={<MyList />} />
      </Route>
    </Route>,
  ),
);

export default router;
