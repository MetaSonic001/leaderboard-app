'use client';

import React from 'react';
import CategoryLeaderboard from '../../components/CategoryLeaderboard';
import ConfettiBackground from '../../components/ConfettiBackground';
import { categoryBData } from '../../utils/data';

const CategoryBPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-400 via-teal-500 to-blue-600">
      <ConfettiBackground />
      <h2 className="text-5xl font-bold mb-12 text-center text-white shadow-text">
      Youth Scripture Test Results
      </h2>
      <div className="max-w-7xl mx-auto">
        
        <CategoryLeaderboard categoryData={categoryBData} />
      </div>
    </div>
  );
};

export default CategoryBPage;