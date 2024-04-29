import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminDashboard from "@/components/Dashboard/AdminDashboard";

export default function dashboard() {
  return (
    <>
      <Navbar />
      <AdminDashboard />
      <Footer />
    </>
  );
}
