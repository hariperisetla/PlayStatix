import Header from "@/components/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main className="container max-w-[80vw] mx-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
