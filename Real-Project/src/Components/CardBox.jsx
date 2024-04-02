import React from "react";

const CardBox = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default CardBox;