import { CategoryData, Participant, RawParticipantData } from '../types';

// Import your JSON data
import rawDataA from '../../public/Youth Advisors Marks.json';
import rawDataB from '../../public/Youth Marks.json';

function processRawData(rawData: RawParticipantData[]): Participant[] {
  return rawData.map((item, index) => ({
    id: index + 1,
    rollNumber: item['ROLL NO'],
    name: item['Full Name'],
    gender: item['Gender'],
    rank: item['Proper Ranks'],
    marks: item['Marks'],
    churchName: String(item['churchName']), // Ensure churchName is a string
    avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
  }));
}

export const categoryAData: CategoryData = {
  categoryName: 'Youth Advisors Marks',
  participants: processRawData(rawDataA as RawParticipantData[]),
};

export const categoryBData: CategoryData = {
  categoryName: 'Youth Marks',
  participants: processRawData(rawDataB as RawParticipantData[]),
};
