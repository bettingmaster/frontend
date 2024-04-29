import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserProfile from "@/components/Dashboard/UserProfile";

export default function profile() {
  return (
    <>
      <Navbar />
      <UserProfile />
      <Footer />
    </>
  );
}
