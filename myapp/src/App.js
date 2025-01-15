

import './App.css';
 import Navbar from "./components/Navbar/Navbar";
import { links, logo, showDiscord } from "./data"; 
import Footer from "./components/Footer/Footer";
import { footerLinks, socialLinks } from "./data";

import { ButtonGroup } from "./components/Button/Button";
import CardComponent from './components/CardComponent/CardComponent';
import {cardData}  from "./data";
import BlogList from './components/BlogCard/BlogList';










function App() {
  
  


  

  
  
  return (
    <div className="App">
      <Navbar 
        logo={logo} 
        links={links} 
        showDiscord={showDiscord} 
      />
      <Footer footerLinks={footerLinks} socialLinks={socialLinks} />
      
      <ButtonGroup /> 
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <CardComponent
        title={cardData.title}
        description={cardData.description}
        leftButtonLabel={cardData.leftButtonLabel}
        rightButtonLabel={cardData.rightButtonLabel}
      />
      
    </div>

  
    <BlogList/>
    


      

      </div>
  );
}

export default App;
