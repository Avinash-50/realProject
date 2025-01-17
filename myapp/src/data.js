import { FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaEnvelope, FaPlus } from 'react-icons/fa';
export const links = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
  ];
  
  export const logo = "/logo.png"; 
  
  export const showDiscord = true; 

  // Footer


export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/" },
      { name: "Careers", url: "/" },
      { name: "Our Store", url: "/" },
      { name: "Contact", url: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", url: "/" },
      { name: "Contact Us", url: "/" },
      { name: "Order Status", url: "/" },
    ],
  },
  {
    title: "Service",
    links: [
      { name: "Download", url: "/" },
      { name: "Feadback", url: "/" },
      { name: "Bug Report", url: "/" },
      { name: "Report", url: "/" },
      { name: "Compare", url: "/" },
    ],
  },
];

export const socialLinks = [
  { name: "YouTube", icon: <FaYoutube />, url: "/" },
  { name: "Facebook", icon: <FaSquareFacebook />, url: "/" },
];


// ----Table----





// Button


export const buttonData = [
  // Primary Buttons
  { type: 'primary', label: 'Continue' },
  { type: 'primary', label: 'Continue', variant: 'outline' },

  // Secondary Buttons
  { type: 'secondary', label: 'Cancel' },
  { type: 'secondary', label: 'Cancel', variant: 'outline' },

  // Link Buttons
  { type: 'link', label: 'Link' },
  { type: 'link', label: 'Link' },

  // Buttons with Icons
  { type: 'primary', label: 'Login with Email', icon: <FaEnvelope /> },
  { type: 'secondary', icon: <FaPlus /> },
  { type: 'secondary', icon: <FaPlus /> },

  // Loading State
  { type: 'primary', label: 'Login with Email', isLoading: true },
];


//  ________card________________________

export const cardData = {
  title: "Free Image Generation",
  description: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  leftButtonLabel: "Flux Pro",
  rightButtonLabel: "Start Generating",
};

 


const blogData = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "06 Dec, 2024",
    time: "28 min",
    author: "Ankit Singh",
  },
 
];

export default blogData;


export const heroData = [
  {
    heading: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonText: "Explore Now",
  }
];



export const statusIndicatorData = {
  imageSrc: "/HD.png",
  altText: "High Definition",
  description: "Lorem Ipsum is simply dummy text",
};

export const featureData = 
  {
    id: 1,
    title: "Imagination to reality",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageSrc: "/Feature.png",
    
  };
 






