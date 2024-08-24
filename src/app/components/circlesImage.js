import React from 'react';
import Image from 'next/image'
import { images } from '../../assets';
const CircularImageWithShadow = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '290px',
        height: '290px',
      }}
    >
      {/* Inner Circle Image */}
      <div
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          boxShadow: '0px 13px 27px -5px rgba(50, 50, 93, 0.25), 0px 8px 16px -8px rgba(0, 0, 0, 0.3)'
        }}
      >
         <Image
              src={images.work1}
          alt="Lawyer Reviewing Papers"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position:'relative',
            zIndex:90
          }}
        />
      </div>

      {/* Outer Circular Shadow */}
      <div
        style={{
          position: 'absolute',
          top: '25px',
          right: '-32px',
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          border: '2px solid #a78b7b',
        }}
      ></div>
    </div>
  );
};

export default CircularImageWithShadow;
