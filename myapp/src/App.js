

import './App.css';
 import Navbar from "./components/Navbar/Navbar";
import { links, logo, showDiscord } from "./data"; 
import Footer from "./components/Footer/Footer";
import { footerLinks, socialLinks } from "./data";

import { ButtonGroup } from "./components/Button/Button";
import CardComponent from './components/CardComponent/CardComponent';
import {cardData}  from "./data";
import BlogList from './components/BlogCard/BlogList';
import HeroImage from './components/HeroImage/HeroImage';
import { heroData } from "./data";
import StatusIndicator from './components/StatusIndicator/StatusIndicator';
import { statusIndicatorData } from "./data";
import Feature from './components/Feature/Feature';
import {featureData } from "./data";



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
    <HeroImage heroData={heroData[0]} />
    <StatusIndicator
        imageSrc={statusIndicatorData.imageSrc}
        altText={statusIndicatorData.altText}
        description={statusIndicatorData.description}
      />
      <Feature
        title = {featureData.title}
        description= {featureData.description}
        imageSrc= {featureData.imageSrc}

      />
    
 </div>
  );
}
export default App;
