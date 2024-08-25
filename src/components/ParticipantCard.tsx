import Image from "next/image";
import React from "react";
import { Participant } from "../types"; // Importing the Participant type

interface ParticipantCardProps {
  participant: Participant;
  isTopWinner?: boolean;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({
  participant,
  isTopWinner = false,
}) => {
  const cardClass = isTopWinner
    ? "bg-gradient-to-br from-custom-pink-light to-custom-pink-dark text-white"
    : "bg-white";

  // Updated function to accept rank as a number
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
      className={`rounded-lg shadow-lg p-4 ${cardClass} transform hover:scale-105 transition-transform duration-200`}
    >
      <div className="flex items-center mb-4">
        <Image
          src={getImageSrc(participant.rank)} // Corrected to pass rank as a number
          alt={participant.name}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-bold">{participant.name}</h3>
          <p className="text-sm">{participant.rollNumber}</p>
          <p className="text-sm">{participant.churchName}</p>{" "}
          {/* Displaying church name */}
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
