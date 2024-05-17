"use client";
import { useRouter } from "next/router";
import React from "react";

const BackButton = ({ children }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return <button onClick={handleBackClick}>{children || "Back"}</button>;
};

export default BackButton;
