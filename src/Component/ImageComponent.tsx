import React from 'react';
import img1 from '@src/assets/images/img-1.jpeg';

function ImageComponent() {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img src={img1} alt="" />
    </>
  );
}

export default ImageComponent;
