import React from 'react';
import ImageCard from './ImageCard';

const ImageCards = ({ images }) => {
  const columns = 3;
  const imageCards = images.map((imageUrl, index) => (
    <div key={index} className="flex-1 p-2">
      <ImageCard imageUrl={imageUrl} />
    </div>
  ));

  return (
    <div>
        <div>
        <p className="text-gray-600 text-center text-balance">THE REAL WORLD WINS</p>
        <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance">OUR STUDENTS ARE WINNING</h3>
        </div>
        <div className="flex flex-wrap">
        {Array.from({ length: Math.ceil(imageCards.length / columns) }, (_, i) => (
            <div key={i} className="w-full sm:w-1/3">
            {imageCards.slice(i * columns, (i + 1) * columns)}
            </div>
        ))}
        </div>
        <div>
        <div className=" p-8">
      <div className="text-center">
      <button className="py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">
          Join the Real World
        </button>
        
        
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-10 h-30 relative overflow-hidden rounded-full">
          <img
            src="https://picsum.photos/id/1025/200/100"
            alt="thumbnail"
            className="absolute inset-0 object-cover"
          />
        </div>
        <div className="w-10 h-16 relative overflow-hidden rounded-full">
          <img
            src="https://picsum.photos/id/1026/200/100"
            alt="thumbnail"
            className="absolute inset-0 object-cover"
          />
        </div>
        <div className="w-10 h-30 relative overflow-hidden rounded-full">
          <img
            src="https://picsum.photos/id/1027/200/100"
            alt="thumbnail"
            className="absolute inset-0 object-cover"
          />
        </div>
        <p className="text-sm mb-8"><strong>113,000+</strong>like-minded students</p>
      </div>
    </div>
        </div>
    </div>
  );
};

export default ImageCards;