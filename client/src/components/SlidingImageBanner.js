import { Carousel } from 'react-carousel-minimal';
import React from 'react';

function SlidingImageBanner() {
 const data = [
    {
      image: "https://rb.gy/idlq",
      caption: "Parklands"
    },
    {
      image: "https://rb.gy/24ra",
      caption: "Kileleshwa"
    },
    {
      image: "https://tinyurl.com/54v6amph",
      caption: "Kajiado"
    },
    {
      image: "https://rb.gy/lh83",
      caption: "Kileleshwa"
    },
    {
      image: "https://tinyurl.com/fwjzw6cf",
      caption: "Kasarani"
    },
    {
      image: "https://tinyurl.com/3zjncjaw",
      caption: "Baringo"
    },
    {
      image: "https://tinyurl.com/3nap544h",
      caption: "Nanyuki"
    },
    {
      image: "https://tinyurl.com/2p9649h4",
      caption: "Nakuru"
    },
    {
      image: "https://tinyurl.com/48ru2767",
      caption: "Kericho"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
      <div style={{ textAlign: "center" }}>
        <h2>Some of the Properties</h2>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
  );
}

export default SlidingImageBanner;
