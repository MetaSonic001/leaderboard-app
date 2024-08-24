import { CategoryData } from '../types';

export const dummyData: CategoryData[] = [
  {
    categoryName: 'A',
    participants: [
      { id: 1, rollNumber: 'A001', name: 'John Doe', gender: 'Male', marks: 95, rank: 1, avatar: 'https://i.pravatar.cc/150?img=1' },
      { id: 2, rollNumber: 'A002', name: 'Jane Smith', gender: 'Female', marks: 93, rank: 2, avatar: 'https://i.pravatar.cc/150?img=2' },
      { id: 3, rollNumber: 'A003', name: 'Bob Johnson', gender: 'Male', marks: 91, rank: 3, avatar: 'https://i.pravatar.cc/150?img=3' },
      { id: 4, rollNumber: 'A004', name: 'Alice Brown', gender: 'Female', marks: 89, rank: 4, avatar: 'https://i.pravatar.cc/150?img=4' },
      { id: 5, rollNumber: 'A005', name: 'Charlie Lee', gender: 'Male', marks: 87, rank: 5, avatar: 'https://i.pravatar.cc/150?img=5' },
    ],
  },
  {
    categoryName: 'B',
    participants: [
      { id: 6, rollNumber: 'B001', name: 'Eva Garcia', gender: 'Female', marks: 98, rank: 1, avatar: 'https://i.pravatar.cc/150?img=6' },
      { id: 7, rollNumber: 'B002', name: 'David Kim', gender: 'Male', marks: 96, rank: 2, avatar: 'https://i.pravatar.cc/150?img=7' },
      { id: 8, rollNumber: 'B003', name: 'Sophia Chen', gender: 'Female', marks: 94, rank: 3, avatar: 'https://i.pravatar.cc/150?img=8' },
      { id: 9, rollNumber: 'B004', name: 'Michael Wang', gender: 'Male', marks: 92, rank: 4, avatar: 'https://i.pravatar.cc/150?img=9' },
      { id: 10, rollNumber: 'B005', name: 'Olivia Taylor', gender: 'Female', marks: 90, rank: 5, avatar: 'https://i.pravatar.cc/150?img=10' },
    ],
  },
];