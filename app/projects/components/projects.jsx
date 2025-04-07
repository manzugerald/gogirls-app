"use client";
import Image from "next/image";
import { useState } from "react";
import {
  AcademicCapIcon,
  BeakerIcon,
  BoltIcon,
  CameraIcon,
  ClockIcon,
  CloudIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

// Sample project data with ~20-word excerpts and ~400-word post_content with paragraph breaks
const projectsData = [
  {
    id: 1,
    post_title: "Project 1",
    post_excerpt: "This is a brief excerpt for Project 1.",
    post_content: "This is the detailed content for Project 1.\n\nIt includes multiple paragraphs.",
    post_author: "Author 1",
    post_date: "2023-01-01",
    post_modified: "2023-01-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "AcademicCapIcon",
    status: "Completed",
  },
  {
    id: 2,
    post_title: "Project 2",
    post_excerpt: "This is a brief excerpt for Project 2.",
    post_content: "This is the detailed content for Project 2.\n\nIt includes multiple paragraphs.",
    post_author: "Author 2",
    post_date: "2023-02-01",
    post_modified: "2023-02-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "BeakerIcon",
    status: "In Progress",
  },
  {
    id: 3,
    post_title: "Project 3",
    post_excerpt: "This is a brief excerpt for Project 3.",
    post_content: "This is the detailed content for Project 3.\n\nIt includes multiple paragraphs.",
    post_author: "Author 3",
    post_date: "2023-03-01",
    post_modified: "2023-03-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "BoltIcon",
    status: "Completed",
  },
  {
    id: 4,
    post_title: "Project 4",
    post_excerpt: "This is a brief excerpt for Project 4.",
    post_content: "This is the detailed content for Project 4.\n\nIt includes multiple paragraphs.",
    post_author: "Author 4",
    post_date: "2023-04-01",
    post_modified: "2023-04-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "CameraIcon",
    status: "In Progress",
  },
  {
    id: 5,
    post_title: "Project 5",
    post_excerpt: "This is a brief excerpt for Project 5.",
    post_content: "This is the detailed content for Project 5.\n\nIt includes multiple paragraphs.",
    post_author: "Author 5",
    post_date: "2023-05-01",
    post_modified: "2023-05-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "ClockIcon",
    status: "Completed",
  },
  {
    id: 6,
    post_title: "Project 6",
    post_excerpt: "This is a brief excerpt for Project 6.",
    post_content: "This is the detailed content for Project 6.\n\nIt includes multiple paragraphs.",
    post_author: "Author 6",
    post_date: "2023-06-01",
    post_modified: "2023-06-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "CloudIcon",
    status: "In Progress",
  },
  {
    id: 7,
    post_title: "Project 7",
    post_excerpt: "This is a brief excerpt for Project 7.",
    post_content: "This is the detailed content for Project 7.\n\nIt includes multiple paragraphs.",
    post_author: "Author 7",
    post_date: "2023-07-01",
    post_modified: "2023-07-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "CodeBracketIcon",
    status: "Completed",
  },
  {
    id: 8,
    post_title: "Project 8",
    post_excerpt: "This is a brief excerpt for Project 8.",
    post_content: "This is the detailed content for Project 8.\n\nIt includes multiple paragraphs.",
    post_author: "Author 8",
    post_date: "2023-08-01",
    post_modified: "2023-08-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "ComputerDesktopIcon",
    status: "In Progress",
  },
  {
    id: 9,
    post_title: "Project 9",
    post_excerpt: "This is a brief excerpt for Project 9.",
    post_content: "This is the detailed content for Project 9.\n\nIt includes multiple paragraphs.",
    post_author: "Author 9",
    post_date: "2023-09-01",
    post_modified: "2023-09-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "AcademicCapIcon",
    status: "Completed",
  },
  {
    id: 10,
    post_title: "Project 10",
    post_excerpt: "This is a brief excerpt for Project 10.",
    post_content: "This is the detailed content for Project 10.\n\nIt includes multiple paragraphs.",
    post_author: "Author 10",
    post_date: "2023-10-01",
    post_modified: "2023-10-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "BeakerIcon",
    status: "In Progress",
  },
  {
    id: 11,
    post_title: "Project 11",
    post_excerpt: "This is a brief excerpt for Project 11.",
    post_content: "This is the detailed content for Project 11.\n\nIt includes multiple paragraphs.",
    post_author: "Author 11",
    post_date: "2023-11-01",
    post_modified: "2023-11-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "BoltIcon",
    status: "Completed",
  },
  {
    id: 12,
    post_title: "Project 12",
    post_excerpt: "This is a brief excerpt for Project 12.",
    post_content: "This is the detailed content for Project 12.\n\nIt includes multiple paragraphs.",
    post_author: "Author 12",
    post_date: "2023-12-01",
    post_modified: "2023-12-02",
    post_featured_image: "/assets/images/volunteer.png",
    post_thumbnail: "CameraIcon",
    status: "In Progress",
  },
];

// Map icon names to components
const iconMap = {
  AcademicCapIcon: AcademicCapIcon,
  BeakerIcon: BeakerIcon,
  BoltIcon: BoltIcon,
  CameraIcon: CameraIcon,
  ClockIcon: ClockIcon,
  CloudIcon: CloudIcon,
  CodeBracketIcon: CodeBracketIcon,
  ComputerDesktopIcon: ComputerDesktopIcon,
};

const PROJECTS_PER_PAGE = 6; // 2 rows of 3 cards each

const Projects = () => {
  const [projects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Pagination logic
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  return (
    <div className="w-full flex flex-col gap-6">
      {selectedProject ? (
        <div className="w-full">
          {/* Selected Project Details */}
          <button
            onClick={handleBackToList}
            className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            Back to Projects
          </button>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.post_title}</h2>
            {selectedProject.post_featured_image && (
              <Image
                src={selectedProject.post_featured_image}
                alt={selectedProject.post_title}
                width={800}
                height={800}
                className="object-cover w-full h-96 rounded-md mb-6"
              />
            )}
            <div className="text-gray-700 mb-6 leading-relaxed">
              {selectedProject.post_content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <p><span className="font-bold">Author:</span> {selectedProject.post_author || "Unknown"}</p>
              <p><span className="font-bold">Published:</span> {new Date(selectedProject.post_date).toLocaleDateString()}</p>
              <p><span className="font-bold">Modified:</span> {new Date(selectedProject.post_modified).toLocaleDateString()}</p>
              <p><span className="font-bold">Status:</span> {selectedProject.status}</p>
            </div>
          </div>
          {/* Thumbnails of Other Projects */}
          <h3 className="text-xl font-semibold text-center mt-10 mb-6">Other Projects</h3>
          <div className="w-full grid grid-cols-3 gap-6">
            {projects
              .filter((project) => project.id !== selectedProject.id)
              .slice(0, 3)
              .map((project) => {
                const ThumbnailIcon = iconMap[project.post_thumbnail];
                return (
                  <div
                    key={project.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer p-4 flex flex-col"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="absolute top-0 left-0 w-12 h-12 bg-pink-500 rounded-tl-lg fold-effect" />
                    <div className="w-full bg-[#9f004d] flex items-center justify-center flex-shrink-0" style={{ height: "50%" }}>
                      <ThumbnailIcon className="w-8 h-8 text-white" />
                    </div>
                    <Image
                      src={project.post_featured_image}
                      alt={project.post_title}
                      width={800}
                      height={400}
                      className="object-cover w-full h-48 rounded-md mb-4"
                    />
                    <div className="mt-2 flex-1 flex flex-col justify-center">
                      <h2 className="text-lg font-semibold text-gray-800 truncate">{project.post_title}</h2>
                      <p className="text-base text-gray-600 mt-1 line-clamp-3">
                        {project.post_excerpt || "No excerpt available"}
                      </p>
                      <div className="mt-1 text-sm text-gray-500">
                        <p><span className="font-bold">Author:</span> {project.post_author || "Unknown"}</p>
                        <p><span className="font-bold">Status:</span> {project.status}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleBackToList}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              Back to Projects
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {paginatedProjects.map((project) => {
              const ThumbnailIcon = iconMap[project.post_thumbnail];
              return (
                <div
                  key={project.id}
                  className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer p-4 flex flex-col"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500 rounded-tl-lg fold-effect" />
                  <div className="w-full bg-[#9f004d] flex items-center justify-center flex-shrink-0">
                    <ThumbnailIcon className="w-12 h-12 text-white" />
                  </div>
                  <Image
                    src={project.post_featured_image}
                    alt={project.post_title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-48 rounded-md mb-4"
                  />
                  <div className="mt-2 p-4 flex-1">
                    <h2 className="text-2xl font-semibold text-gray-800">{project.post_title}</h2>
                    <p className="text-lg text-gray-600 mt-1 line-clamp-3">
                      {project.post_excerpt || "No excerpt available"}
                    </p>
                    <div className="mt-2 text-base text-gray-500">
                      <p><span className="font-bold">Author:</span> {project.post_author || "Unknown"}</p>
                      <p><span className="font-bold">Published:</span> {new Date(project.post_date).toLocaleDateString()}</p>
                      <p><span className="font-bold">Status:</span> {project.status}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Pagination Controls */}
          {projects.length > PROJECTS_PER_PAGE && (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === page ? "bg-[#9f004d] text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Add custom CSS for the fold effect
const FoldEffectStyles = () => (
  <style jsx global>{`
    .fold-effect {
      clip-path: polygon(0 0, 100% 0, 0 100%);
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
      transform: rotate(-3deg);
      transform-origin: top left;
      z-index: 10;
    }
  `}</style>
);

const ProjectsWithStyles = () => (
  <>
    <Projects />
    <FoldEffectStyles />
  </>
);

export default ProjectsWithStyles;