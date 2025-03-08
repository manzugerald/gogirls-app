// app/projects/page.jsx
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

// Sample project data stored locally with Heroicon names
const projectsData = [
  {
    id: 1,
    post_title: 'Project One',
    post_content: `
      Project One is an ambitious initiative aimed at revolutionizing educational tools for modern learners. This project began with a simple idea: to bridge the gap between traditional teaching methods and digital innovation. Over months of brainstorming and prototyping, we developed a platform that integrates interactive lessons with real-time feedback. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      The core of Project One lies in its adaptive learning algorithms. These algorithms analyze student performance and adjust content difficulty accordingly, ensuring a personalized experience. We faced challenges in balancing complexity with usability, but through iterative testing, we refined the system. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Collaboration was key to this project’s success. Our team of educators, developers, and designers worked tirelessly to align the platform with pedagogical standards. The result is a tool that not only enhances learning but also engages users visually and intellectually. Integer nec odio praesent libero sed cursus ante dapibus diam. Sed nisi nulla quis sem at nibh elementum imperdiet.

      Looking forward, Project One aims to expand its reach into underserved communities, offering free access to premium features. We believe education should be equitable, and this project is a step toward that vision. With ongoing updates and community feedback, we’re committed to making it a cornerstone of digital education. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna.
    `,
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
    post_content: `
      Project Two emerged from a passion for scientific discovery and experimentation. Our goal was to create a virtual laboratory where enthusiasts could simulate chemical reactions without the risks of a physical lab. This journey started with extensive research into molecular dynamics. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      The development process was a rollercoaster of trial and error. We built a robust simulation engine that models reactions in real time, complete with visual effects to enhance understanding. Challenges included optimizing performance for complex molecules, but we overcame this with clever caching techniques. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      User engagement was a priority. We incorporated tutorials and interactive challenges to teach chemistry concepts, making it accessible to novices and experts alike. The feedback loop with beta testers helped us refine the interface and fix bugs. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.

      Project Two’s future involves adding more compounds and expanding to physics simulations. It’s a tool for education and curiosity, sparking interest in science across ages. With plans for mobile compatibility, we aim to bring this lab to every pocket. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    `,
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
    post_content: `
      Project Three is all about harnessing energy innovation for a sustainable future. We set out to design a prototype for a compact renewable energy device that could power small households. The idea stemmed from observing energy inefficiencies in urban areas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Our team tackled the engineering challenges head-on. We developed a hybrid solar-wind system, integrating lightweight materials and efficient energy storage. The biggest hurdle was ensuring reliability in varying weather conditions, which we solved with adaptive circuitry. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Testing was rigorous. We deployed prototypes in multiple locations, gathering data on performance and durability. The results were promising, showing a 30% increase in energy capture compared to traditional setups. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

      The vision for Project Three is to scale this technology for broader adoption. We’re exploring partnerships to manufacture affordable units and educate communities on renewable energy. This project isn’t just about tech—it’s about empowering people. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
    `,
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
    post_content: `
      Project Four dives into the world of photography and visual storytelling. Our mission was to build a platform that helps photographers showcase their work with cutting-edge tools. It all began with a love for capturing moments and a frustration with clunky portfolio sites. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      The development focused on a sleek, user-friendly interface. We integrated features like real-time photo editing, customizable galleries, and social sharing capabilities. Technical hurdles included optimizing image load times, which we addressed with lazy loading and compression techniques. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Collaboration with photographers shaped the project. Their input led to features like watermarking and client proofing, making it a practical tool for professionals. The platform’s design emphasizes aesthetics, with a dark mode option that’s easy on the eyes. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.

      Project Four aims to grow into a community hub. Future updates will include workshops, a marketplace for prints, and AI-driven photo analysis. It’s about empowering creatives to tell their stories effectively. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    `,
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
    post_content: `
      Project Five is a time management revolution designed to optimize daily productivity. We aimed to create an app that not only tracks time but also suggests optimal schedules based on user habits. The concept was born from our own struggles with balancing work and life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      The app’s core is its intelligent scheduling engine. It uses machine learning to analyze tasks, deadlines, and past performance, proposing time blocks that maximize efficiency. Development challenges included syncing across devices, which we solved with a cloud-based backend. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      User experience was paramount. We added a clean interface with reminders, progress tracking, and motivational quotes to keep users engaged. Beta testing revealed the need for customization, leading to adjustable settings for work styles. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

      The future of Project Five lies in workplace integration. We’re planning features like team sync and analytics dashboards to support collaborative productivity. It’s a tool to reclaim time in a busy world. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
    `,
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
    post_content: `
      Project Six tackles the complexities of cloud infrastructure with a focus on scalability. Our objective was to design a system that simplifies deployment for small businesses. It started with a realization that cloud setups were too daunting for non-experts. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      We built a modular cloud framework that automates server management and resource allocation. The system adapts to traffic spikes, ensuring uptime without manual intervention. Challenges included securing data transfers, which we addressed with end-to-end encryption. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Testing involved simulating real-world loads, from small startups to medium enterprises. The feedback helped us streamline onboarding, reducing setup time to under an hour. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.

      Project Six’s roadmap includes cost optimization tools and integration with popular platforms. It’s about making cloud tech accessible and affordable. We envision a future where every business can leverage the cloud effortlessly. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    `,
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
    post_content: `
      Project Seven is a developer’s dream—a coding framework to accelerate software creation. We set out to reduce boilerplate code and improve team collaboration. The spark came from countless hours spent on repetitive coding tasks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      The framework features reusable components, built-in testing tools, and seamless version control integration. We tackled compatibility issues across languages, settling on a flexible, modular design. Coding sprints revealed performance bottlenecks, which we fixed with optimized libraries. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Developer feedback shaped its evolution. Features like auto-documentation and real-time collaboration became highlights, saving hours of work. The framework’s simplicity hides a powerful engine that supports complex projects. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

      Project Seven aims to be open-source, fostering a community of contributors. We’re adding tutorials and templates to lower the entry barrier for new devs. It’s a tool to empower creators, not just coders. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
    `,
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
    post_content: `
      Project Eight is a desktop application crafted for user simplicity and power. Our goal was to build a tool that streamlines daily tasks with an intuitive interface. It began with observing how people struggled with cluttered software. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      The app integrates file management, notes, and scheduling into one hub. We prioritized a lightweight design, ensuring it runs smoothly on older machines. Development hit snags with cross-platform compatibility, resolved with a unified codebase. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      User testing was eye-opening. We added drag-and-drop functionality and customizable themes based on feedback, enhancing the experience. The app’s clean layout hides powerful features like offline sync and smart search. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.

      Project Eight’s future includes mobile sync and plugin support. We want it to be a go-to tool for personal organization, evolving with user needs. It’s about making tech feel approachable and useful. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
    `,
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

const Projects = () => {
  const [projects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Hero />
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
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
          {/* Thumbnails of Other Projects (One Row, Sorted by Date) */}
          <h3 className="text-xl font-semibold text-center mt-10 mb-6">Other Projects</h3>
          <div className="grid grid-cols-4 gap-6">
            {projects
              .filter((project) => project.id !== selectedProject.id)
              .sort((a, b) => new Date(b.post_date) - new Date(a.post_date)) // Sort by date descending
              .slice(0, 4) // Limit to 4 for one row
              .map((project) => {
                const ThumbnailIcon = iconMap[project.post_thumbnail];
                return (
                  <div
                    key={project.id}
                    className="relative w-44 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Folded top-left corner */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-pink-500 rounded-tl-lg fold-effect" />
                    <div className="w-full h-[115px] bg-[#9f004d] flex items-center justify-center">
                      <ThumbnailIcon className="w-14 h-14 text-white" />
                    </div>
                    <div className="p-3">
                      <h2 className="text-base font-semibold text-gray-800 truncate">{project.post_title}</h2>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{project.post_excerpt || 'No excerpt available'}</p>
                      <div className="mt-1 text-[10px] text-gray-500">
                        <p>Author: {project.post_author || 'Unknown'}</p>
                        <p>Status: {project.status}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* Repeated "Back to Projects" Button */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {projects.map((project) => {
            const ThumbnailIcon = iconMap[project.post_thumbnail];
            return (
              <div
                key={project.id}
                className="relative w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Folded top-left corner */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500 rounded-tl-lg fold-effect" />
                {ThumbnailIcon && (
                  <div className="w-full h-48 bg-[#9f004d] flex items-center justify-center">
                    <ThumbnailIcon className="w-24 h-24 text-white" />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{project.post_title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{project.post_excerpt || 'No excerpt available'}</p>
                  <div className="mt-2 text-xs text-gray-500">
                    <p>Author: {project.post_author || 'Unknown'}</p>
                    <p>Published: {new Date(project.post_date).toLocaleDateString()}</p>
                    <p>Status: {project.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
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