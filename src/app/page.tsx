import Link from "next/link";
import React from "react";
import ConfettiBackground from "../components/ConfettiBackground";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <ConfettiBackground />
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-12 text-white shadow-text">
          Scripture Test Results
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
          <Link
            href="/category-a"
            className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-6 px-12 rounded-lg text-3xl shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            Youth Advisors Leaderboard
          </Link>
          <Link
            href="/category-b"
            className="bg-white hover:bg-gray-100 text-pink-600 font-bold py-6 px-12 rounded-lg text-3xl shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            Youth Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
