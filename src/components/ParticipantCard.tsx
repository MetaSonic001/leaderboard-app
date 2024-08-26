import Image from "next/image";
import React from "react";
import { Participant } from "../types";

interface ParticipantCardProps {
  participant: Participant;
  isTopWinner?: boolean;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({
  participant,
  isTopWinner = false,
}) => {
  const cardClass = isTopWinner
    ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white"
    : "bg-white hover:bg-gray-50";

  const getImageSrc = (rank: number): string => {
    switch (rank) {
      case 1:
        return "/1.png";
      case 2:
        return "/2.png";
      case 3:
        return "/3.png";
      default:
        return "/4.jpg";
    }
  };

  return (
    <div
      className={`rounded-lg shadow-lg p-6 ${cardClass} transform hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center mb-4">
        <Image
          src={getImageSrc(participant.rank)}
          alt={participant.name}
          width={80}
          height={80}
          className="rounded-full mr-4 border-4 border-white shadow-md"
        />
        <div>
          <h3 className="text-2xl font-bold">{participant.name}</h3>
          <p className="text-sm opacity-75">{participant.rollNumber}</p>
          <p className="text-sm opacity-75">{participant.churchName}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-center">
          <p className="text-sm opacity-75">Rank</p>
          <p className="text-3xl font-bold">{participant.rank}</p>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-75">Gender</p>
          <p className="text-xl">{participant.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;
