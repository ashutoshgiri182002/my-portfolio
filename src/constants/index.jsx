import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";



import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiD3Dotjs } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';





export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Ashutosh Kumar Giri",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Software developer with a strong foundation in full-stack web development. I have hands-on experience in building engaging and functional user interfaces using technologies like React.js, Node.js, and MongoDB. My projects, such as the FOF website and Sundarkand Puja Booking platform, reflect my commitment to creating meaningful web experiences. Additionally, I have experience in data visualization, where I developed interactive visualizations during my internship at DRDO.",
};


export const PROJECTS = [
  {
    id: 1,
    name: "FOF (Find Old Friends)",
    description:
      "A full-stack web application built using the MERN stack to help users reconnect with childhood school friends by providing details such as class name, school name, academic year, and location.",
    image: projectImage1, // Replace with the appropriate image
    githubLink: "https://github.com/ashutoshgiri182002/fofmern",
  },
  {
    id: 2,
    name: "Sundarkand Website - Online Puja Booking Platform",
    description:
      "A website developed using React.js, offering a seamless online Puja booking process. Users can select desired services, dates, and times for bookings, integrated with Firebase for backend services.",
    image: projectImage2, // Replace with the appropriate image
    githubLink: "https://github.com/ashutoshgiri182002/sundarkand_version_2",
  },
  {
    id: 3,
    name: "Count My Chant",
    description:
      "An IoT device and mobile application for tracking personalized chants. The app leverages the Google Speech Recognition API and is built with Streamlit (web) and Android Studio (mobile), later converted into an IoT device using Raspberry Pi.",
    image: projectImage3, // Replace with the appropriate image
    githubLink: "https://github.com/ashutoshgiri182002/CountMyChant-Android-App",
  },
  {
    id: 4,
    name: "Data Visualization Project at DRDO",
    description:
      "Developed interactive data visualizations using D3.js during an internship at DRDO, where I processed and analyzed data to extract meaningful insights for visual representation.",
    image: projectImage4, // Replace with the appropriate image
    githubLink: "https://github.com/ashutoshgiri182002/D3", 
  },
  {
    id: 5,
    name: "Personal Portfolio Website",
    description:
      "A personal portfolio website built with React.js to showcase my skills, projects, and contact information.",
    image: projectImage5, // Replace with the appropriate image
    githubLink: "https://github.com/ashutoshgiri182002/my-portfolio",
  },
  {
    id: 6,
    name: "Blog Website",
    description:
      "A blog website where users can add, read, edit, and remove blogs. It features a user-friendly interface for managing blog content efficiently.",
    image: projectImage6, // Replace with the appropriate image
    githubLink: "https://github.com/ashutoshgiri182002/BlogWebsite", 
  },
];


export const BIO = [
  "Ashutosh Kumar Giri studied Computer Science and Engineering at Maharaja Agrasen Institute of Technology, Delhi, from which he graduated in 2024. Following his education, he honed his craft and expertise through various projects and an internship at DRDO, where he immersed himself in the world of web development and data visualization.",
  "During his academic journey, Ashutosh developed several innovative web applications, including the FOF (Find Old Friends) platform and the Sundarkand Online Puja Booking website, showcasing his skills in full-stack development. His work reflects a deep understanding of frontend technologies like React.js and backend frameworks like Node.js and MongoDB.",
  "As a multi-disciplinary developer, Ashutosh Kumar Giri brings a wealth of skills and expertise to his work. From his proficiency in languages like C++, Python, and JavaScript to his experience with tools like D3.js and Firebase, Ashutosh possesses a versatile skill set that allows him to craft engaging and functional web experiences for users.",
];


export const SKILLS = [
  {
    icon: <FaReact className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "Learning",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "Learning",
  },
  {
    icon: <FaDatabase className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ year",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiD3Dotjs className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "D3.js",
    experience: "3 Months",
  },
  {
    icon: <FaGitAlt className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Git",
    experience: "2+ years",
  },
  {
    icon: <SiCplusplus className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "C++",
    experience: "2+ year",
  }
];

export const EXPERIENCES = [
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    duration: "July 2023 - Present",
    description:
      "Working as an Associate Software Engineer at Accenture, I contribute to developing and maintaining software solutions. I collaborate with cross-functional teams to deliver high-quality software products and continuously enhance my skills in software engineering.",
  },
  {
    title: "Data Visualization Intern",
    company: "DRDO (DESIDOC - Lab)",
    duration: "December 2022 - March 2023",
    description:
      "During my internship at DRDO, I created interactive data visualizations using D3.js, analyzed data to extract meaningful insights, and collaborated with a team to incorporate feedback. This experience enhanced my skills in data visualization and teamwork.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Maharaja Agrasen Institute of Technology, Delhi",
    duration: "August 2020 - May 2024",
    description:
      "Achieved a 9.31 CGPA. Engaged in coursework focused on Data Structures & Algorithms, Operating Systems, Database Management Systems, and Computer Networks. Participated in several projects and internships that developed my skills in web development and data visualization.",
  },
  {
    degree: "12th Grade (Central Board of Secondary Education)",
    institution: "Rajkiya Pratibha Vikas Vidyalaya, Yamuna Vihar",
    duration: "2018 - 2019",
    description:
      "Graduated with 89% marks. Excelled in subjects related to science and mathematics, laying the foundation for my further studies in engineering.",
  },
  {
    degree: "10th Grade (Central Board of Secondary Education)",
    institution: "Rajkiya Pratibha Vikas Vidyalaya, Yamuna Vihar",
    duration: "2016 - 2017",
    description:
      "Graduated with a perfect 10.0 CGPA. Received the Excellence in Education Award by the Education Minister of Delhi for outstanding academic performance.",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/ashutoshkumar.giri.98",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/ashutoshgiri_official/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/Ashutos46302182",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/ashutoshgiri182002",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ashutosh-kumar-giri/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
