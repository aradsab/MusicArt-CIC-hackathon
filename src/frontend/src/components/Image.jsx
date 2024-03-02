import React, { useState, useEffect } from 'react';
import { getBase64Image } from '../utils/renderImage';

const ImageComponent = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const base64Image = getBase64Image();
    setImage(base64Image);
  }, []);

  return (
    <div>
      {image && <img src={`data:image/jpeg;base64,${image}`} alt="Base64 Img" />}
    </div>
  );
};

export default ImageComponent;