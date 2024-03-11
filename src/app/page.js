"use client";
import HomePage from "@/Components/HomePage";
import InputForm from "@/Components/InputForm";
import MblOTP from "@/Components/MblOTP";
import SignUp from "@/Components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/mblOTP" element={<MblOTP />} />
          <Route path="*" element={<InputForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
