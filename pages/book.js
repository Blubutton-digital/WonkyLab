import React from "react";
import NavBar from "@/components/NavBar";

const book = () => {
  return (
    <div>
      <header className="pb-20">
        <NavBar />
      </header>
      <main className="bg-darkbg lg:pt-40 sm:pt-12 pt-4 h-screen">
        <div className="container mx-auto">CIONTE</div>
      </main>
    </div>
  );
};

export default book;
