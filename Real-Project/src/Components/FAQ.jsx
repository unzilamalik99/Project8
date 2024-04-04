// import React, { useState } from 'react';

// const SingleTab = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='px-24'>
//        <div className='p-4'>
//         <p className="text-gray-600 text-center text-balance p-3">LOCK IN YOUR PRICE</p>
//         <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance">PRICE INCREASING SOON</h3>
//         <p className="text-white-700 font-bold p-2">The price will be increased to $147 a month shortly.</p>
//         <p className="text-gray-600 text-center text-balance">Hundreds of thousands of students have already joined The Real World and are on their way to financial freedom.</p>
//         <p className="text-white-700 font-bold p-2">Lock in your price now before it increases.</p><br />
//         <div className="text-center">
//               <button className="py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">
//               JOIN THE REAL WORLD
//               </button> 
//             </div>
//         </div>
//         <br />
//       <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance p-3">FREQUENTLY ASKED QUESTIONS</h3>

//     <div className="text-center p-3">
//               <button className="py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">
//               JOIN THE REAL WORLD
//               </button> 
//             </div>
//            
//     </div>
//   );
// };

// export default SingleTab;

import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg shadow-lg p-4">
      <button
        className="flex items-center justify-between w-full py-2 font-medium text-left text-gray-200 bg-custom-color focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded transition duration-150 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-custom-color rounded-lg shadow-lg p-3 mt-4">
          <p className="text-gray-200">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQList = () => {
  const faqData = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
    },
    {
      question: 'Question 5',
      answer: 'Answer 5',
    },
    {
      question: 'Question 6',
      answer: 'Answer 6',
    },
    {
      question: 'Question 7',
      answer: 'Answer 7',
    },
    // Add more FAQ items here
  ];

  return (
    <div>
      <div>
      <div className='p-4'>
        <p className="text-gray-600 text-center text-balance p-3">LOCK IN YOUR PRICE</p>
        <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance">PRICE INCREASING SOON</h3>
        <p className="text-white-700 font-bold p-2">The price will be increased to $147 a month shortly.</p>
        <p className="text-gray-600 text-center text-balance">Hundreds of thousands of students have already joined The Real World and are on their way to financial freedom.</p>
        <p className="text-white-700 font-bold p-2">Lock in your price now before it increases.</p><br />
        <div className="text-center">
              <button className="py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">
              JOIN THE REAL WORLD
              </button> 
            </div>
        </div>
      </div>
      <div>
      <h3 className="text-5xl font-bold font-large text-center text-white-800 mb-2 text-balance p-3">FREQUENTLY ASKED QUESTIONS</h3>
      </div>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      <div>
      <div className="text-center">
               <button className="py-3 px-1 bg-yellow-400/20 hover:bg-yellow-500/30 border-2 border-yellow-500  text-white font-bold">
               JOIN THE REAL WORLD
               </button> 
             </div>
             <p className="text-sm mb-8"><strong>113,000+</strong>like-minded students</p>
      </div>
      
    </div>
    
  );
};

export default FAQList;
