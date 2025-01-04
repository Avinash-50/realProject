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


export const headers = ["King's Treasury", "People's happiness"];

export const rows = [
  ["Empty", "Overflowing"],
  ["Modest", "Satisfied"],
  ["Empty", "Overflowing"],
];


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



export const inputBoxData = {
  placeholder: "Enter your text...",
  value: "", 
};

// Poster
export const posterData = [
  {
    id: 1,
    heading: "shadcn/ui",
    subheading: "Beautifully designed components built with Radix UI and Tailwind CSS.",
    logoStyle: { backgroundColor: "#FF08B6" },
  },
  
  
];


export const dialogContent = {
  title: "Edit Profile",
  namePlaceholder: "Your Name",
  emailPlaceholder: "Your Email",
  buttonText: "Submit",
};


export const handleDialogSubmit = (data) => {
  console.log("Form submitted:", data);
};

// HoverCard
export const hoverCardData = [
  {
    logoStyle: {
      width: '50px',
      height: '50px',
      backgroundColor: '#FF6347', 
      borderRadius: '50%'
    },
    name: '@nextjs',
    description: 'The React Framework - created and maintained by @vercel',
    joinDate: 'Joined December 2021'
  },
  
    
  
];





  
  