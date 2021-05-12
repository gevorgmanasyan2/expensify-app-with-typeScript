import React from 'react';
import loading_dog from '../images/loading_dog1.gif';


const LoadingPage=()=>(
    <div className="loader">
  <img className="loader__image" src={loading_dog} />
    </div>
);

export default LoadingPage;