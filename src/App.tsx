import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

type Screen = 'welcome' | 'not-for-you' | 'second-question' | 'love-message';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const handleAnumResponse = (isAnum: boolean) => {
    if (isAnum) {
      setCurrentScreen('second-question');
    } else {
      setCurrentScreen('not-for-you');
    }
  };

  const handleAhmadResponse = (knowsAhmad: boolean) => {
    if (knowsAhmad) {
      setCurrentScreen('love-message');
    }
  };

  const loveLines = [
    "Every moment with you feels like a beautiful dream",
    "Your smile lights up my entire world",
    "In a garden full of flowers, you're the most beautiful rose",
    "You're not just my love, you're my favorite hello and hardest goodbye",
    "With you, every day feels like Valentine's Day",
    "You're the melody to my heart's song",
    "In your eyes, I found my home",
    "You're the reason I believe in love",
    "Every heartbeat whispers your name",
    "You're my today, tomorrow, and forever"
  ];

  if (currentScreen === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-rose-400 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-md w-full transform hover:scale-105 transition-all duration-300">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" fill="currentColor" />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute top-4 right-4 animate-bounce" />
            <Sparkles className="w-6 h-6 text-yellow-400 absolute top-8 left-4 animate-bounce delay-300" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Welcome to a
            <span className="text-pink-500 block">Special Place</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Are you Anum?
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleAnumResponse(true)}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Yes, I'm Anum ✨
              </button>
              
              <button
                onClick={() => handleAnumResponse(false)}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                No, I'm not
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'not-for-you') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-md w-full">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">😔</span>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Sorry, this is not for you
          </h1>
          
          <p className="text-gray-600 mb-8">
            This special place is created for someone very special.
          </p>
          
          <button
            onClick={() => setCurrentScreen('welcome')}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (currentScreen === 'second-question') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-md w-full transform hover:scale-105 transition-all duration-300">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-purple-500 mx-auto mb-4 animate-pulse" fill="currentColor" />
            <div className="flex justify-center space-x-2">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce" />
              <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce delay-150" />
              <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce delay-300" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Hello
            <span className="text-purple-500 block">Beautiful Anum!</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Do you know Ahmad?
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => handleAhmadResponse(true)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Yes, I know Ahmad 💕
              </button>
              
              <button
                onClick={() => handleAhmadResponse(false)}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                No, I don't know him
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'love-message') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-400 via-pink-400 to-purple-500 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-2xl w-full transform hover:scale-105 transition-all duration-300">
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-4">
              <Heart className="w-12 h-12 text-red-500 animate-pulse" fill="currentColor" />
              <Heart className="w-16 h-16 text-pink-500 animate-pulse delay-150" fill="currentColor" />
              <Heart className="w-12 h-12 text-red-500 animate-pulse delay-300" fill="currentColor" />
            </div>
            <div className="flex justify-center space-x-2">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce" />
              <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce delay-150" />
              <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce delay-300" />
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            You know one thing...
            <span className="text-pink-500 block mt-2">Ahmad likes you!</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 font-medium leading-relaxed">
            If you want to know how much he loves and likes you, click here
          </p>
          
          <button
            onClick={() => {
              const messageDiv = document.getElementById('love-messages');
              if (messageDiv) {
                messageDiv.style.display = 'block';
                messageDiv.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Show me his love</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div id="love-messages" className="mt-12 space-y-6 hidden">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
                <span>Ahmad's Love for You</span>
                <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
              </h2>
              
              <div className="space-y-4 text-left">
                {loveLines.map((line, index) => (
                  <div key={index} className="bg-white/70 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-gray-700 italic font-medium flex items-center space-x-3">
                      <Heart className="w-4 h-4 text-pink-500 flex-shrink-0" fill="currentColor" />
                      <span>{line}</span>
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white">
                <div className="flex justify-center space-x-4 mb-4">
                  <Heart className="w-8 h-8 animate-pulse" fill="currentColor" />
                  <Heart className="w-10 h-10 animate-pulse delay-150" fill="currentColor" />
                  <Heart className="w-8 h-8 animate-pulse delay-300" fill="currentColor" />
                </div>
                <h3 className="text-3xl font-bold text-center">
                  I Love You Anum ❤️
                </h3>
                <p className="text-center mt-2 text-red-100">
                  With all my heart, forever and always
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;