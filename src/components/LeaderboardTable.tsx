import React from 'react';
import { Participant } from '../types';
import ParticipantCard from './ParticipantCard';

interface LeaderboardTableProps {
  participants: Participant[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ participants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {participants.map((participant) => (
        <ParticipantCard key={participant.id} participant={participant} />
      ))}
    </div>
  );
};

export default LeaderboardTable;