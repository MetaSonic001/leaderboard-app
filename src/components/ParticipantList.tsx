import React, { useState } from "react";
import { Participant } from "../types";
import LoadMoreButton from "./LoadMoreButton";
import ParticipantCard from "./ParticipantCard";

interface ParticipantListProps {
  participants: Participant[];
}

const ParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  const [displayCount, setDisplayCount] = useState(20);

  const displayedParticipants = participants.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 10, participants.length));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {displayedParticipants.map((participant) => (
          <ParticipantCard key={participant.id} participant={participant} />
        ))}
      </div>
      {displayCount < participants.length && (
        <div className="flex justify-center mt-8">
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
};

export default ParticipantList;