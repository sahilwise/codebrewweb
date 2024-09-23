'use client'

import { useState } from 'react';

const newsData = [
  { id: 1, title: 'News 1', content: 'This is the first news item.' },
  { id: 2, title: 'News 2', content: 'This is the second news item.' },
  { id: 3, title: 'News 3', content: 'This is the third news item.' },
  { id: 4, title: 'News 4', content: 'This is the first news item.' },
  { id: 5, title: 'News 5', content: 'This is the second news item.' },
  { id: 6, title: 'News 6', content: 'This is the third news item.' },
  // Add more news content as necessary
];

const twitterProfileUrl = '/'; // Replace with your Twitter profile URL
const twitterId = 'your-twitter-id'; // Replace with your Twitter ID

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < newsData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Conditionally render Previous button */}
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded shadow-md"
        >
          Previous
        </button>
      )}

      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold">{newsData[currentIndex].title}</h1>
        <p className="mt-4 text-gray-700">{newsData[currentIndex].content}</p>
      </div>

      {currentIndex === newsData.length - 1 ? (
        <a
          href={twitterProfileUrl}
          rel="noopener noreferrer"
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-black"
        >
          Follow me on Twitter @{twitterId}
        </a>
      ) : (
        <button
          onClick={goToNext}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded shadow-md"
        >
          Next
        </button>
      )}
    </div>
  );
}
