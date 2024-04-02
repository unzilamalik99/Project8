import React from 'react';

const ImageCard = ({ imageUrl }) => {
  return (
    <div className="flex-1 rounded-lg overflow-hidden">
      <img src={imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageCard;