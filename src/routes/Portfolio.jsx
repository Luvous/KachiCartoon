import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Portfolio() {
  const IMAGES =
    [
      {
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1640166181/MatiasVarela/iv1iod5cu8ovrz9bdfcl.jpg",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638133328/MatiasVarela/iv1iod5cu8ovrz9bdfcl.jpg",
        caption: "Spider-Man No Way Home"
      },
      {
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638133328/MatiasVarela/zpgjbnc0ycrsqse07bpx.png",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638133328/MatiasVarela/zpgjbnc0ycrsqse07bpx.png",
        caption: "Cimarrón"
      },
      {
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319791/MatiasVarela/aiphx0el9vo5idyzo8bm.png",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319791/MatiasVarela/aiphx0el9vo5idyzo8bm.png",
        caption: "Asadito"
      },
      {
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319963/MatiasVarela/yba2hrndax0nkvwkcawm.jpg",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319963/MatiasVarela/yba2hrndax0nkvwkcawm.jpg",
        caption: "Pareja campestre",
      },
      {
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319824/MatiasVarela/gqqtum92oxkdm8ztwe93.jpg",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/gqqtum92oxkdm8ztwe93.jpg",
        tags: [{ value: "Diseño de personaje" }],
        caption: "Diseño personaje"
      },
      {
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319866/MatiasVarela/txmv3j6wdpzru074cb9r.jpg",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/txmv3j6wdpzru074cb9r.jpg",
        tags: [{ value: "Diseño de personaje" }],
        caption: "Diseño personaje"
      },
      {
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319921/MatiasVarela/j674vaqdj5bcl42pyfwy.png",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/j674vaqdj5bcl42pyfwy.png",
        caption: "Posing"
      }
    ]
    
    const [isVisible, setVisible] = useState(false)

  return (
    <div>
      <NavBar currentPath="portfolio" />
      <ul className='galleryContainer'>
        {IMAGES.map((i) => (
          <li onClick={()=>setVisible(true)} key={i}>
            {i.tags && <div className='tagsImg'>{i.tags[0].value}</div>}
            <img src={i.thumbnail} />
          </li>
        ))}
      </ul>

      <div className='carouselContainer' style={{ display: isVisible ? 'block' : 'none' }}>
        <Carousel className='carousel '>
          {IMAGES.map((i) => (
            <div key={i}>
              <img src={i.src} />
              {i.tags && <p className='captionImg'>{i.caption.value}</p>}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Portfolio