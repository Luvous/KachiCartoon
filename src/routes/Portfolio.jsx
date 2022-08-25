import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import NavBar from '../components/NavBar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from '../components/Footer';


function Portfolio() {
  const IMAGES =
    [
      {
        id: 0,
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1640166181/MatiasVarela/iv1iod5cu8ovrz9bdfcl.jpg",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638133328/MatiasVarela/iv1iod5cu8ovrz9bdfcl.jpg",
        caption: "Spider-Man No Way Home"
      },
      {
        id: 1,
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638133328/MatiasVarela/zpgjbnc0ycrsqse07bpx.png",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638133328/MatiasVarela/zpgjbnc0ycrsqse07bpx.png",
        caption: "Cimarrón"
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319791/MatiasVarela/aiphx0el9vo5idyzo8bm.png",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319791/MatiasVarela/aiphx0el9vo5idyzo8bm.png",
        caption: "Asadito"
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319963/MatiasVarela/yba2hrndax0nkvwkcawm.jpg",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319963/MatiasVarela/yba2hrndax0nkvwkcawm.jpg",
        caption: "Pareja campestre",
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319824/MatiasVarela/gqqtum92oxkdm8ztwe93.jpg",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/gqqtum92oxkdm8ztwe93.jpg",
        tags: [{ value: "Diseño de personaje" }],
        caption: "Diseño personaje"
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319866/MatiasVarela/txmv3j6wdpzru074cb9r.jpg",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/txmv3j6wdpzru074cb9r.jpg",
        tags: [{ value: "Diseño de personaje" }],
        caption: "Diseño personaje"
      },
      {
        id: 6,
        src: "https://res.cloudinary.com/tomhugin0000/image/upload/q_auto/v1638319921/MatiasVarela/j674vaqdj5bcl42pyfwy.png",
        thumbnail: "https://res.cloudinary.com/tomhugin0000/image/upload/w_600/q_auto/v1638319824/MatiasVarela/j674vaqdj5bcl42pyfwy.png",
        caption: "Posing"
      }
    ]

  const [isVisible, setVisible] = useState(false)
  const [defaultItem, setItem] = useState(0)

  const arrowStyles = {
    position: 'absolute',
    zIndex: 5,
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
  };

  return (
    <div >
      <NavBar currentPath="portfolio" />
      <div style={{minHeight:'100vh'}}>
      <ul className='galleryContainer'>
        {IMAGES.map((i) => (
          <li onClick={() => {
            setVisible(true)
            setItem(i.id)
          }} key={i.id}>
            {i.tags && <div className='tagsImg'>{i.tags[0].value}</div>}
            <img src={i.thumbnail} alt=''/>
          </li>
        ))}
      </ul>

      <div className='carouselContainer' style={{ display: isVisible ? 'block' : 'none' }}>
        <Icon className='carouselCross' onClick={() => {
          setVisible(false)
        }} icon="emojione-monotone:cross-mark-button" color="#ede9e0" width={40} />
        <Carousel selectedItem={defaultItem} className='carousel' showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <Icon onClick={onClickHandler} title={label} icon="bxs:left-arrow" width="35" style={{ ...arrowStyles, left:15, color:'#ede9e0' }} />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <Icon onClick={onClickHandler} title={label} icon="bxs:right-arrow" width="35" style={{ ...arrowStyles, right: 15, color:'#ede9e0' }} />
            )
          }
        >
          {IMAGES.map((i) => (
            <div key={i.id}>
              <img src={i.src} alt='' />
              <p>{i.caption}</p>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio