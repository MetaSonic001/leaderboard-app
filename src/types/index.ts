export interface RawParticipantData {
    'ROLL NO': string;
    'Full Name': string;
    'Gender': string;
    'Marks': number;
    'churchName': string;
    'Proper Ranks': number;
    [key: string]: string | number; // This allows for other properties in the raw data
  }
  
  export interface Participant {
    id: number;
    rollNumber: string;
    name: string;
    gender: string;
    rank: number;
    marks: number;
    churchName:string;
    avatar: string;
  }
  
  export interface CategoryData {
    categoryName: string;
    participants: Participant[];
  }