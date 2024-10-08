import React from "react";
import { Participant } from "../types";
import ParticipantCard from "./ParticipantCard";

interface Top20ListProps {
  participants: Participant[];
}

const Top20List: React.FC<Top20ListProps> = ({ participants }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-white shadow-text">
        TOP 20
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {participants.map((participant, index) => (
          <ParticipantCard
            key={participant.id}
            participant={participant}
            isTop20={index < 20} // Set isTop20 to true for the top 20 participants
          />
        ))}
      </div>
    </div>
  );
};

export default Top20List;
