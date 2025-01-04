
import React, { useState } from "react";
import { inputBoxData } from "./data"; 
import Navbar from "./components/Navbar/Navbar";
import { links, logo, showDiscord } from "./data"; 
import Footer from "./components/Footer/Footer";
import { footerLinks, socialLinks } from "./data";
import { headers, rows } from './data';
import Table from "./components/Table/Table";
import { ButtonGroup } from "./components/Button/Button";
import InputBox from "./components/InputBox/InputBox"; 
import Poster from "./components/Poster/Poster";
import { posterData } from "./data";
import Dialog from "./components/Dialog/Dialog";
import { handleDialogSubmit } from "./data"
import HoverCard from "./components/HoverCard/HoverCard";
import { hoverCardData } from "./data";



function App() {
  const [inputValue, setInputValue] = useState(inputBoxData.value); 
  
  return (
    <div>
      <Navbar 
        logo={logo} 
        links={links} 
        showDiscord={showDiscord} 
      />
      <Footer footerLinks={footerLinks} socialLinks={socialLinks} />
      <Table headers={headers} rows={rows} />
      <ButtonGroup /> 

      <InputBox
        placeholder={inputBoxData.placeholder} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />

      <Poster data={posterData} />
       <Dialog onSubmit={handleDialogSubmit} />

       <HoverCard cardData={hoverCardData} />


      
     </div>
  );
}

export default App;
