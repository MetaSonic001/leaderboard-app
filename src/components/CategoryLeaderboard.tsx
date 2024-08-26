import React, { useMemo, useState } from 'react';
import { CategoryData } from '../types';
import ParticipantList from './ParticipantList';
import SearchBar from './SearchBar';
import Top20List from './Top20List';
import TopWinners from './TopWinners';

interface CategoryLeaderboardProps {
  categoryData: CategoryData;
}

const CategoryLeaderboard: React.FC<CategoryLeaderboardProps> = ({ categoryData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParticipants = useMemo(() => {
    return categoryData.participants.filter(
      (participant) =>
        participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.churchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        participant.rank.toString().includes(searchTerm)
    );
  }, [categoryData.participants, searchTerm]);

  const topThree = filteredParticipants.slice(0, 3);
  const top20 = filteredParticipants.slice(3, 20);
  const remainingParticipants = filteredParticipants.slice(20);

  return (
    <div className="space-y-8">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TopWinners winners={topThree} />
      <Top20List participants={top20} />
      <ParticipantList participants={remainingParticipants} />
    </div>
  );
};

export default CategoryLeaderboard;