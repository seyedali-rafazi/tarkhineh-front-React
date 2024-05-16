import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProfile from "./pages/UserProfile";
import UserProfileEdit from "./feachers/user/UserProfileEdit";
import UserOrders from "./feachers/user/UserOrders";
import UserFavourits from "./feachers/user/UserFavourits";
import UserAddress from "./feachers/user/UserAddress";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./context/SearchContext";
import BranchMenu from "./pages/BranchMenu";
import MainFood from "./components/menu/MainFood";
import Appetizer from "./components/menu/Appetizer";
import Dessert from "./components/menu/Dessert";
import Drink from "./components/menu/Drink";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import SuccessPayment from "./pages/SuccessPayment";
import Franchise from "./pages/Franchise";
import About from "./pages/About";
import Call from "./pages/Call";
import SearchResult from "./components/home/SearchResult";
import Navbar from "./ui/Navbar";
import Fooddetails from "./components/menu/Fooddetails";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <SearchProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/branch-menu" element={<BranchMenu />}>
            <Route index element={<Navigate to="mainfood" replace />} />
            <Route path="mainfood" element={<MainFood />} />
            <Route path="appetizer" element={<Appetizer />} />
            <Route path="dessert" element={<Dessert />} />
            <Route path="drink" element={<Drink />} />
          </Route>
          <Route path="/food-details/:id" element={<Fooddetails />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/about" element={<About />} />
          <Route path="/call-us" element={<Call />} />
          <Route path="/dashboard" element={<UserProfile />} />
          <Route path="/dashboard/profile" element={<UserProfileEdit />} />
          <Route path="/dashboard/user-orders" element={<UserOrders />} />
          <Route path="/dashboard/user-favourits" element={<UserFavourits />} />
          <Route path="/dashboard/user-address" element={<UserAddress />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/successful-payment" element={<SuccessPayment />} />
        </Routes>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
