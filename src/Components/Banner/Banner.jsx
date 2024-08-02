import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/0YMtBXY/9370DB.png)",
        height: "100vh"
      }}
    >
      <div className="hero-content text-neutral-content items-start text-left mr-72">
        <div>
          <h1 className="mb-5 text-7xl font-bold text-coral font-pacifico bounce">
            Welcome to Scoop Haven!
          </h1>
          <p className="text-black text-2xl">
            Indulge in a delightful world of creamy, 
            dreamy ice creams. 
            <br />Here, every scoop is a taste of happiness
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
