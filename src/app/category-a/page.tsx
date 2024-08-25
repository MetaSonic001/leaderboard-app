'use client';

import React from 'react';
import CategoryLeaderboard from '../../components/CategoryLeaderboard';
import ConfettiBackground from '../../components/ConfettiBackground';
import { categoryAData } from '../../utils/data';

const CategoryAPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
      <ConfettiBackground />
      <h2 className="text-5xl font-bold mb-12 text-center text-white shadow-text">
      Youth Advisors Scripture Test Results
      </h2>
      <div className="max-w-7xl mx-auto">
        <CategoryLeaderboard categoryData={categoryAData} />
      </div>
    </div>
  );
};

export default CategoryAPage;