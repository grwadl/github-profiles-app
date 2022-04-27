import React from 'react';
import * as loading from './98432-loading.json';
import Lottie from 'react-lottie';
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
const Loading = () => {
    return (
        <div style={{maxWidth:400, margin:'0 auto'}}>
        <Lottie options={defaultOptions} maxHeight={400}
          maxWidth={400} style={{marginTop:200}}/>
        </div>
    );
};

export default Loading;