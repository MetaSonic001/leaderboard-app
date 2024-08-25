import React from 'react';
import { Participant } from '../types';
import ParticipantCard from './ParticipantCard';

interface TopWinnersProps {
  winners: Participant[];
}

const TopWinners: React.FC<TopWinnersProps> = ({ winners }) => {
  const trophies = ['🥇', '🥈', '🥉'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {winners.map((winner, index) => (
        <div key={winner.id} className="relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl">
            {trophies[index]}
          </div>
          <ParticipantCard participant={winner} isTopWinner={true} />
        </div>
      ))}
    </div>
  );
};

export default TopWinners;