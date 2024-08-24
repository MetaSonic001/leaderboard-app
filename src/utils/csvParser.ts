import csv from 'csv-parser';
import fs from 'fs';
import { CategoryData, Participant } from '../types';

export function parseCSV(filePath: string): Promise<CategoryData[]> {
  return new Promise((resolve, reject) => {
    const results: Participant[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        results.push({
          id: parseInt(data.id),
          rollNumber: data.rollNumber,
          name: data.name,
          gender: data.gender,
          marks: parseInt(data.marks),
          rank: parseInt(data.rank),
          avatar: data.avatar || `https://i.pravatar.cc/150?img=${data.id}`,
        });
      })
      .on('end', () => {
        const categoryA = results.filter(p => p.rollNumber.startsWith('A'));
        const categoryB = results.filter(p => p.rollNumber.startsWith('B'));

        const categoryData: CategoryData[] = [
          { categoryName: 'A', participants: categoryA },
          { categoryName: 'B', participants: categoryB },
        ];

        resolve(categoryData);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}