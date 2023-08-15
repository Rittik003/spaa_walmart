import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../components/animation_lkkxz59x.json'; // Replace with the correct path to your animation JSON file

const LoadingScreen = () => {
    document.body.style.backgroundColor = 'aqua';
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};
export default LoadingScreen;
