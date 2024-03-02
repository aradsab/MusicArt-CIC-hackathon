import React, { useState, useEffect } from 'react';
import { getBase64Image } from '../util/renderImage';

const ImageComponent = ({ prompt }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const base64Image = await getBase64Image(prompt);
      setImage(base64Image);
    };

    fetchImage();
  }, [prompt]); // Depend on `prompt` so the effect runs again if it changes

  if (!image) return null; // Don't render anything if there's no image

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={`data:image/jpeg;base64,${image}`} alt="Generated" style={{ maxWidth: '100%', maxHeight: '100vh' }} />
    </div>
  );
};

export default ImageComponent;