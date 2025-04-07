'use client';
import Hero from "@components/hero";
import NavBar from "@components/NavBar";
import React from "react";
import Breadcrumb from "@components/breadcrumb";
import ProjectsWithStyles from "./components/projects";



const Page = () => {
  return (
    <div className="h-auto flex flex-col items-center">
      {/* Full-width Navbar */}
      <NavBar />
      <Hero />

      {/* Main Content */}
      <div className="w-full max-w-7xl px-4 sm:px-8 md:px-16 py-8 flex flex-col items-center">
        <div className="w-full flex flex-row items-center justify-between mb-8">
          <span className="flex items-center">
            <Breadcrumb />
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center flex-1">Projects</h1>
          <span className="w-1/3"></span> {/* Empty span to balance the layout */}
        </div>
        <ProjectsWithStyles />
      </div>
    </div>
  );
};

export default Page;