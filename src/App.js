import React from "react";
import Navbar from "./Navbar"; 
import Image from "./ImageCard";
import imageData from "./data/images";
import "./style.css"


function App() {
  return (
    <>
      <Navbar />
      <h1 className="title">Dynamic Image Gallery</h1>

      <div className="gallery">
        {imageData.map((img, index) => (
          <Image
            key={index}
            image={img.image}
            title={img.title}
            description={img.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
