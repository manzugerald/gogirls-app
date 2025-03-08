'use client';
import Image from 'next/image';
import { useState } from 'react';
import Hero from '@components/hero';
import {
  AcademicCapIcon,
  BeakerIcon,
  BoltIcon,
  CameraIcon,
  ClockIcon,
  CloudIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/solid';
import Breadcrumb from '@components/breadcrumb';

// Sample project data (full array)
const projectsData = [
  {
    id: 1,
    post_title: 'Project One',
    post_content: 'Project One is an ambitious initiative aimed at revolutionizing educational tools...',
    post_author: 'John Doe',
    post_date: '2023-10-01T12:00:00Z',
    post_modified: '2023-10-05T14:30:00Z',
    post_excerpt: 'A brief excerpt for Project One.',
    post_type: 'custom_post_type',
    post_name: 'project-one',
    post_thumbnail: 'AcademicCapIcon',
    post_featured_image: '/assets/featured/featured.jpg',
    status: 'Active',
  },
  {
    id: 2,
    post_title: 'Project Two',
    post_content: 'Project Two emerged from a passion for scientific discovery...',
    post_author: 'Jane Smith',
    post_date: '2023-09-15T09:00:00Z',
    post_modified: '2023-09-20T10:15:00Z',
    post_excerpt: 'Short summary of Project Two.',
    post_type: 'custom_post_type',
    post_name: 'project-two',
    post_thumbnail: 'BeakerIcon',
    post_featured_image: '/assets/featured/featured.jpg',
    status: 'Completed',
  },
  {
    id: 3,
    post_title: 'Project Three',
    post_content: 'Project Three is all about harnessing energy innovation...',
    post_author: 'Alex Johnson',
    post_date: '2023-08-10T15:00:00Z',
    post_modified: '2023-08-12T16:00:00Z',
    post_excerpt: 'Overview of Project Three.',
    post_type: 'custom_post_type',
    post_name: 'project-three',
    post_thumbnail: 'BoltIcon',
    post_featured_image: '/assets/featured/featured.jpg',
    status: 'Active',
  },
  {
    id: 4,
    post_title: 'Project Four',
    post_content: 'Project Four dives into the world of photography...',
    post_author: 'Emily Brown',
    post_date: '2023-07-20T10:00:00Z',
    post_modified: '2023-07-25T12:00:00Z',
    post_excerpt: 'Tech advancements in Project Four.',
    post_type: 'custom_post_type',
    post_name: 'project-four',
    post_thumbnail: 'CameraIcon',
    post_featured_image: '/assets/featured/featured.jpg',
    status: 'Active',
  },
  {
    id: 5,
    post_title: 'Project Five',
    post_content: 'Project Five is a time management revolution...',
    post_author: 'Michael Lee',
    post_date: '2023-06-15T14:00:00Z',
    post_modified: '2023-06-18T16:00:00Z',
    post_excerpt: 'Efficient scheduling with Project Five.',
    post_type: 'custom_post_type',
    post_name: 'project-five',
    post_thumbnail: 'ClockIcon',
    post_featured_image: '/assets/featured/featured.jpg',
    status: 'Completed',
  },
  {
    id: 6,
    post_title: 'Project Six',
    post_content: 'Project Six tackles the complexities of cloud infrastructure...',
    post_author: 'Sarah Davis',
    post_date: '2023-05-10T09:30:00Z',
    post_modified: '2023-05-12T11:00:00Z',
    post_excerpt: 'Scalable cloud solutions in Project Six.',
    post_type: 'custom_post_type',
    post_name: 'project-six',
    post_thumbnail: 'CloudIcon',
    post_featured_image: '/assets/featured/featured.jpg',
    status: 'Active',
  },
  {
    id: 7,
    post_title: 'Project Seven',
    post_content: 'Project Seven is a developer’s dream...',
    post_author: 'David Wilson',
    post_date: '2023-04-01T13:00:00Z',
    post_modified: '2023-04-03T15:00:00Z',
    post_excerpt: 'Development tools in Project Seven.',
    post_type: 'custom_post_type',
    post_name: 'project-seven',
    post_thumbnail: 'CodeBracketIcon',
    post_featured_image: '/assets/featured/featured.jpg',
    status: 'Active',
  },
  {
    id: 8,
    post_title: 'Project Eight',
    post_content: 'Project Eight is a desktop application...',
    post_author: 'Laura Martinez',
    post_date: '2023-03-15T08:00:00Z',
    post_modified: '2023-03-17T10:00:00Z',
    post_excerpt: 'User-friendly app in Project Eight.',
    post_type: 'custom_post_type',
    post_name: 'project-eight',
    post_thumbnail: 'ComputerDesktopIcon',
    post_featured_image: '/assets/featured/featured.jpg',
    status: 'Completed',
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
    <div className="min-h-screen bg-gray-100 p-6">
      <Hero />
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      {/* Breadcrumb Path */}
      <Breadcrumb />
      {/* Project details here */}
      {selectedProject ? (
        <div className="max-w-4xl mx-auto">
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
                height={400}
                className="object-cover w-full h-96 rounded-md mb-6"
              />
            )}
            <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-wrap">{selectedProject.post_content}</p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Author: {selectedProject.post_author || 'Unknown'}</p>
              <p>Published: {new Date(selectedProject.post_date).toLocaleDateString()}</p>
              <p>Modified: {new Date(selectedProject.post_modified).toLocaleDateString()}</p>
              <p>Status: {selectedProject.status}</p>
            </div>
          </div>
          {/* Thumbnails of Other Projects */}
          <h3 className="text-xl font-semibold text-center mt-10 mb-6">Other Projects</h3>
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
            {projects
              .filter((project) => project.id !== selectedProject.id)
              .slice(0, 3)
              .map((project) => {
                const ThumbnailIcon = iconMap[project.post_thumbnail];
                return (
                  <div
                    key={project.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer p-4"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="absolute top-0 left-0 w-6 h-6 bg-pink-500 rounded-tl-lg fold-effect" />
                    <div className="w-full h-24 bg-[#9f004d] flex items-center justify-center">
                      <ThumbnailIcon className="w-12 h-12 text-white" />
                    </div>
                    <div className="mt-3">
                      <h2 className="text-sm font-semibold text-gray-800 truncate">{project.post_title}</h2>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{project.post_excerpt || 'No excerpt available'}</p>
                      <div className="mt-1 text-[9px] text-gray-500">
                        <p>Author: {project.post_author || 'Unknown'}</p>
                        <p>Status: {project.status}</p>
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
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {paginatedProjects.map((project) => {
              const ThumbnailIcon = iconMap[project.post_thumbnail];
              return (
                <div
                  key={project.id}
                  className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer p-4"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 rounded-tl-lg fold-effect" />
                  <div className="w-full h-36 bg-[#9f004d] flex items-center justify-center">
                    <ThumbnailIcon className="w-16 h-16 text-white" />
                  </div>
                  <div className="mt-3">
                    <h2 className="text-lg font-semibold text-gray-800">{project.post_title}</h2>
                    <p className="text-xs text-gray-600 mt-1">{project.post_excerpt || 'No excerpt available'}</p>
                    <div className="mt-2 text-[10px] text-gray-500">
                      <p>Author: {project.post_author || 'Unknown'}</p>
                      <p>Published: {new Date(project.post_date).toLocaleDateString()}</p>
                      <p>Status: {project.status}</p>
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
                    currentPage === page ? 'bg-[#9f004d] text-white' : 'bg-gray-200 hover:bg-gray-300'
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