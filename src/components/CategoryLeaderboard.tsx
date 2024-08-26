import React, { useState } from 'react';
import { CategoryData } from '../types';
import ParticipantList from './ParticipantList';
import SearchBar from './SearchBar';
import TopWinners from './TopWinners';

interface CategoryLeaderboardProps {
  categoryData: CategoryData;
}

const CategoryLeaderboard: React.FC<CategoryLeaderboardProps> = ({ categoryData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const topThree = categoryData.participants.slice(0, 3);
  const remainingParticipants = categoryData.participants.slice(3);

  const filteredParticipants = remainingParticipants.filter(
    (participant) =>
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.churchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.rank.toString().includes(searchTerm) ||
      participant.marks.toString().includes(searchTerm)
  );

  return (
    <div className="space-y-8">
      <TopWinners winners={topThree} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ParticipantList participants={filteredParticipants} />
    </div>
  );
};

export default CategoryLeaderboard;