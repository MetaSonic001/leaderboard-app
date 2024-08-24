import Image from 'next/image';
import React from 'react';
import { Participant } from '../types';

interface ParticipantCardProps {
  participant: Participant;
  isTopWinner?: boolean;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ participant, isTopWinner = false }) => {
  const cardClass = isTopWinner
    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white'
    : 'bg-white';

  return (
    <div className={`rounded-lg shadow-lg p-4 ${cardClass} transform hover:scale-105 transition-transform duration-200`}>
      <div className="flex items-center mb-4">
        <Image
          src={participant.avatar}
          alt={participant.name}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-bold">{participant.name}</h3>
          <p className="text-sm">{participant.rollNumber}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">Rank: {participant.rank}</p>
        </div>
        <div className="text-right">
          <p>{participant.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;