// app/noticeBoard/components/EventsPage.jsx
"use client";
import React, { useState, useEffect } from "react";
import { format, isAfter } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import RegistrationForm from './RegistrationForm';
import styles from '../../../styles/events.module.css';

const events = [
  {
    title: "GoGirls ICT Coding Workshop",
    date: new Date(2025, 2, 10, 14, 0),
    venue: "Juba Tech Hub",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Open to public",
    description: "A hands-on workshop designed to teach young women the fundamentals of coding, focusing on Python and web development. Participants will build a small project by the end of the day.",
    speakers: [
      { name: "Amina Hassan", bio: "Lead Software Engineer at TechSolutions, with 10 years of experience in Python development." },
      { name: "Lila Okot", bio: "Founder of GoGirls ICT, passionate about empowering women in tech." },
    ],
    suggestedSpeakers: [
      { name: "Sara Deng", suggestion: "A local app developer known for her innovative educational tools—could add a mobile dev perspective." },
    ],
  },
  {
    title: "Cybersecurity Awareness Seminar",
    date: new Date(2025, 3, 15, 10, 0),
    venue: "Juba Innovation Hub",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Open to public",
    description: "An interactive seminar exploring the latest cybersecurity threats and best practices for staying safe online. Includes a Q&A session with experts.",
    speakers: [
      { name: "James Okello", bio: "Cybersecurity Analyst with expertise in network security and ethical hacking." },
    ],
    suggestedSpeakers: [
      { name: "Fatima Ali", suggestion: "A renowned penetration tester—could demonstrate real-time hacking scenarios." },
    ],
  },
  {
    title: "Women in STEM Panel",
    date: new Date(2025, 4, 5, 16, 0),
    venue: "University of Juba",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Open to public",
    description: "A panel discussion featuring inspiring women in STEM fields, sharing their journeys, challenges, and successes. Open to students and professionals.",
    speakers: [
      { name: "Dr. Maryam Bol", bio: "Professor of Physics, specializing in renewable energy research." },
      { name: "Esther Nyok", bio: "Chemical Engineer at Nile Petro, advocate for STEM education." },
    ],
    suggestedSpeakers: [
      { name: "Dr. Grace Lado", suggestion: "A biologist with groundbreaking work in genetics—would diversify the panel." },
    ],
  },
  {
    title: "AI & Machine Learning Bootcamp",
    date: new Date(2025, 5, 22, 9, 0),
    venue: "Tech Training Center",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Registration required",
    description: "A two-day intensive bootcamp covering AI fundamentals, machine learning algorithms, and practical applications using TensorFlow.",
    speakers: [
      { name: "Dr. Peter Mawa", bio: "AI Researcher with a PhD in Machine Learning from MIT." },
      { name: "Rachel Akech", bio: "Data Scientist at AI Innovations, expert in neural networks." },
    ],
    suggestedSpeakers: [
      { name: "John Kwe", suggestion: "A local AI startup founder—could share real-world application insights." },
    ],
  },
  {
    title: "Data Science Workshop",
    date: new Date(2025, 6, 10, 13, 0),
    venue: "Tech Hub Nairobi",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Open to public",
    description: "Learn data analysis, visualization, and statistical modeling with hands-on exercises using R and Python.",
    speakers: [
      { name: "Sophie Mwangi", bio: "Senior Data Analyst at DataCorp, skilled in predictive analytics." },
    ],
    suggestedSpeakers: [
      { name: "David Otieno", suggestion: "A visualization expert—could enhance the session with advanced Tableau demos." },
    ],
  },
  {
    title: "Tech Entrepreneurship Summit",
    date: new Date(2025, 7, 18, 9, 0),
    venue: "Kampala Convention Center",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Registration required",
    description: "A summit for aspiring tech entrepreneurs, featuring keynote talks, startup pitches, and networking opportunities.",
    speakers: [
      { name: "Grace Nakato", bio: "CEO of TechVibe, a successful Ugandan tech startup." },
      { name: "Michael Ssentamu", bio: "Venture Capitalist with over 15 years in tech investments." },
    ],
    suggestedSpeakers: [
      { name: "Linda Mirembe", suggestion: "A social entrepreneur—could add a social impact angle to the summit." },
    ],
  },
  {
    title: "Web Development Crash Course",
    date: new Date(2025, 8, 5, 10, 0),
    venue: "Online",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Open to public",
    description: "A fast-paced online course teaching HTML, CSS, and JavaScript basics, culminating in a live portfolio project.",
    speakers: [
      { name: "Emma Kizito", bio: "Frontend Developer at WebWorks, expert in responsive design." },
    ],
    suggestedSpeakers: [
      { name: "Paul Njoroge", suggestion: "A backend developer—could introduce server-side concepts." },
    ],
  },
  {
    title: "Blockchain Basics Seminar",
    date: new Date(2025, 9, 12, 15, 0),
    venue: "Addis Tech Space",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Open to public",
    description: "An introductory seminar on blockchain technology, its applications, and future potential in Africa.",
    speakers: [
      { name: "Tesfaye Bekele", bio: "Blockchain Consultant with experience in Ethereum development." },
    ],
    suggestedSpeakers: [
      { name: "Abebe Tadesse", suggestion: "A crypto economist—could discuss blockchain’s economic impact." },
    ],
  },
  {
    title: "Mobile App Development Bootcamp",
    date: new Date(2025, 10, 20, 9, 0),
    venue: "Lagos Tech Hub",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Registration required",
    description: "A comprehensive bootcamp on mobile app development using Flutter, with a focus on cross-platform solutions.",
    speakers: [
      { name: "Chinedu Okeke", bio: "Mobile Dev Lead at AppZone, specializes in Flutter and Dart." },
    ],
    suggestedSpeakers: [
      { name: "Ngozi Adebayo", suggestion: "A UI/UX designer—could cover app design principles." },
    ],
  },
  {
    title: "Cloud Computing Workshop",
    date: new Date(2025, 11, 8, 14, 0),
    venue: "Accra Innovation Center",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Open to public",
    description: "Explore cloud computing concepts, AWS services, and deployment strategies in this practical workshop.",
    speakers: [
      { name: "Kwame Asante", bio: "Cloud Architect at CloudAfrica, certified AWS Solutions Architect." },
    ],
    suggestedSpeakers: [
      { name: "Esi Mensah", suggestion: "A DevOps engineer—could add insights on CI/CD in the cloud." },
    ],
  },
  {
    title: "Girls in Tech Conference",
    date: new Date(2026, 0, 15, 10, 0),
    venue: "Nairobi Convention Center",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Registration required",
    description: "A flagship conference celebrating women in tech, with keynotes, workshops, and a career fair.",
    speakers: [
      { name: "Nancy Wanjiku", bio: "CTO of KenyaTech, advocate for diversity in tech." },
      { name: "Dr. Faith Kiprono", bio: "AI Ethics Researcher, focusing on equitable tech solutions." },
    ],
    suggestedSpeakers: [
      { name: "Rose Muturi", suggestion: "A tech policy expert—could address regulatory challenges." },
    ],
  },
  {
    title: "Cyber Safety Awareness Day",
    date: new Date(2026, 1, 22, 11, 0),
    venue: "Online",
    organizer: "GoGirls ICT Initiative",
    image: "/assets/images/volunteer.png",
    registration: "Open to public",
    description: "A virtual event raising awareness about online safety, phishing prevention, and digital literacy.",
    speakers: [
      { name: "Linda Chebet", bio: "Online Safety Advocate with a background in digital forensics." },
    ],
    suggestedSpeakers: [
      { name: "Mark Ochieng", suggestion: "A child online safety expert—could target youth education." },
    ],
  },
];

const EventSchedule = ({ onSelectEvent, selectedEvent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2;

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className={`${styles.scheduleTitle} text-3xl font-bold text-gray-800 mb-2 text-center pb-4`}>
        Our Events Schedule
      </h2>
      <div className="flex flex-col gap-6">
        {currentEvents.map((event) => (
          <div
            key={event.title}
            className="flex gap-6 cursor-pointer hover:bg-gray-50 h-40"
            onClick={() => onSelectEvent(event)}
          >
            <div className="flex flex-col items-center w-1/3 bg-gray-600 text-white p-4 rounded-lg h-full justify-center">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[#9f004d] w-6 h-6"
                />
                <p className={`${styles.dateText} text-xl font-bold ml-2`}>
                  {format(event.date, "EEEE d")}
                </p>
              </div>
              <p className={styles.monthText}>
                {format(event.date, "MMMM, yyyy")}
              </p>
            </div>
            <div
              className={`flex flex-col w-2/3 p-6 shadow-lg rounded-lg h-full justify-center ${
                selectedEvent && selectedEvent.title === event.title
                  ? "bg-[#9f004d] text-white"
                  : "bg-white hover:bg-[#9f004d] hover:text-white"
              }`}
            >
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faCalendarPlus}
                  className="text-[#000] w-6 h-6"
                />
                <h3 className={`${styles.eventTitle} text-xl font-semibold ml-2 truncate`}>
                  {event.title}
                </h3>
              </div>
              <p className={`${styles.eventDetails} text-base truncate`}>
                {format(event.date, "h:mm a")} - {event.venue}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabledButton : ''}`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.activeButton : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabledButton : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const EventDetails = ({ event, onRegister }) => {
  if (!event) {
    return <div className={`${styles.noEventText} p-6 text-gray-500`}>Click an event to see details.</div>;
  }

  return (
    <div className={`${styles.eventDetailsContainer} bg-white shadow-lg rounded-lg p-6 w-full`}>
      <div className={styles.detailsContent}>
        <div className={styles.textSection}>
          <h2 className={`${styles.detailsTitle} font-bold text-gray-800 mb-4`}>
            {event.title}
          </h2>
          <div className={styles.detailsInfo}>
            <p className={styles.detailsText}>
              <strong className={styles.label}>Date:</strong> {format(event.date, "EEEE, MMMM d, yyyy h:mm a")}
            </p>
            <p className={styles.detailsText}>
              <strong className={styles.label}>Venue:</strong> {event.venue}
            </p>
            <p className={styles.detailsText}>
              <strong className={styles.label}>Organizer:</strong> {event.organizer}
            </p>
            <p className={styles.detailsText}>
              <strong className={styles.label}>Access:</strong> {event.registration}
            </p>
            <p className={styles.detailsText}>
              <strong className={styles.label}>Description:</strong> {event.description}
            </p>
            <p className={styles.detailsText}>
              <strong className={styles.label}>Speakers:</strong>
            </p>
            <ul className="list-disc pl-6 mb-6">
              {event.speakers.map((speaker, index) => (
                <li key={index} className={`${styles.detailsText} ${styles.speakerItem}`}>
                  <span className={styles.speakerName}>{speaker.name}</span> - {speaker.bio}
                </li>
              ))}
            </ul>
          </div>
          {event.registration === "Registration required" && (
            <button
              onClick={onRegister}
              className={styles.registerButton}
            >
              Register
            </button>
          )}
        </div>
        <div className={styles.imageSection}>
          <img
            src={event.image}
            alt={event.title}
            className={`${styles.eventImage} rounded-lg w-full object-cover`}
          />
        </div>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const today = new Date();
    const upcomingEvent = events.find((event) => isAfter(event.date, today));
    if (upcomingEvent) {
      setSelectedEvent(upcomingEvent);
    }
  }, []);

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleCloseForm = () => {
    setIsRegistering(false);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsRegistering(false);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full">
        <EventSchedule onSelectEvent={handleSelectEvent} selectedEvent={selectedEvent} />
      </div>
      <div className="w-full">
        <EventDetails event={selectedEvent} onRegister={handleRegisterClick} />
      </div>
      {isRegistering && (
        <div className={styles.modalOverlay}>
          <RegistrationForm onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default EventsPage;