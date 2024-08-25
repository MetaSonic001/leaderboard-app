"use client";

import React, { useState } from "react";
import { Participant } from "../types";
import LoadMoreButton from "./LoadMoreButton";
import ParticipantCard from "./ParticipantCard";
import SearchBar from "./SearchBar";

interface ParticipantListProps {
  participants: Participant[];
}

const ParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useState(10);

  const filteredParticipants = participants.filter(
    (participant) =>
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedParticipants = filteredParticipants;

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {displayedParticipants.map((participant) => (
          <ParticipantCard key={participant.id} participant={participant} />
        ))}
      </div>
      {displayCount < filteredParticipants.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default ParticipantList;
