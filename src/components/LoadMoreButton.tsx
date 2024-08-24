import React from 'react';

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <div className="text-center mt-8">
      <button
        onClick={onClick}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
