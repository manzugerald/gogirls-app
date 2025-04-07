import Hero from "@components/hero";
import EventsPage from "./components/eventsPage";
import NavBar from "@components/NavBar";
import React from "react";
import Breadcrumb from "@components/breadcrumb";

const Page = () => {
  return (
    <div className="h-auto flex flex-col items-center">
      {/* Full-width Navbar */}
      <NavBar />
      <Hero />

      {/* Main Content */}
      <div className="w-full max-w-7xl px-4 sm:px-8 md:px-16 py-8 flex flex-col items-center">
        <Breadcrumb />
        <h1 className="text-2xl text-[#9f004d] font-bold sm:text-3xl md:text-4xl mb-8 text-center">Notice Board</h1>
        <EventsPage />
      </div>
    </div>
  );
};

export default Page;