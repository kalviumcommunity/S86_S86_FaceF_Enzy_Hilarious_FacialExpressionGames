import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { emoji: '😄', title: 'Smile Sprint', description: 'Race a character by smiling as wide as you can.' },
  { emoji: '🙄', title: 'Eyebrow Escape', description: 'Raise your eyebrows to help a character dodge obstacles.' },
  { emoji: '👄', title: 'Mouth Mania', description: 'Open your mouth wide to "eat" virtual objects.' },
  { emoji: '😉', title: 'Blink Bonanza', description: 'Blink rapidly to make a character jump or fly.' },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 flex flex-col items-center px-4 py-10 text-center">
      <h1 className="text-5xl font-bold mb-6 text-purple-700">🎭 FaceFrenzy</h1>

      <p className="text-lg max-w-xl mb-10 text-gray-700">
        Welcome to <span className="font-semibold text-purple-600">FaceFrenzy</span> – a hilarious facial expression game where your face controls the action!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-left border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-purple-600 mb-2">
              {feature.emoji} {feature.title}
            </h2>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Button to Dashboard */}
      <Link to="/dashboard">
        <button className="mt-12 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-full shadow hover:bg-purple-700 transition">
          Go to Dashboard 🚀
        </button>
      </Link>

      <p className="mt-10 text-md text-gray-600 italic">Get ready for fun, laughter, and unforgettable moments!</p>
    </div>
  );
};

export default LandingPage;
