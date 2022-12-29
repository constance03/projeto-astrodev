import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import { HomePage } from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
