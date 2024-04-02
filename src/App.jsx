import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserProfile from './pages/UserProfile';
import UserProfileEdit from './feachers/user/UserProfileEdit';
import UserOrders from './feachers/user/UserOrders';
import UserFavourits from './feachers/user/UserFavourits';
import UserAddress from './feachers/user/UserAddress';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<UserProfile />} />
        <Route path="/dashboard/profile" element={<UserProfileEdit />} />
        <Route path="/dashboard/user-orders" element={<UserOrders />} />
        <Route path="/dashboard/user-favourits" element={<UserFavourits />} />
        <Route path="/dashboard/user-address" element={<UserAddress />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;