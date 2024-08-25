import React from "react";
import { CategoryData } from "../types";
import ParticipantList from "./ParticipantList";
import TopWinners from "./TopWinners";

interface CategoryLeaderboardProps {
  categoryData: CategoryData;
}

const CategoryLeaderboard: React.FC<CategoryLeaderboardProps> = ({
  categoryData,
}) => {
  const topWinners = categoryData.participants.slice(0, 20);
  const otherParticipants = categoryData.participants.slice(3);

  return (
    <div className="mb-16">
      {/* <h2 className="text-5xl font-bold mb-12 text-center text-white shadow-text">
        {categoryData.categoryName} Leaderboard
      </h2> */}
      <TopWinners winners={topWinners} />
      <ParticipantList participants={otherParticipants} />
    </div>
  );
};

export default CategoryLeaderboard;
