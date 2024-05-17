import React from "react";
import Navbar from "@/components/Navbar";
import CategoriesNav from "@/components/Categories/CategoriesNav";
import Category from "@/components/Categories/Category";

const leagues = () => {
  return (
    <>
      <Navbar />
      <CategoriesNav />
      <Category />
    </>
  );
};

export default leagues;
