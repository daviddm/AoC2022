import { readFile } from "@util/readFile";

export const run = async (list: number[]) => {
  const elvesCalories: number[] = [];
  let elvesIndex = 0;

  list.forEach((calories) => {
    if (Number.isNaN(calories)) {
      elvesIndex++;
      return;
    }
    if (elvesCalories[elvesIndex]) {
      elvesCalories[elvesIndex] += calories;
      return;
    }
    elvesCalories[elvesIndex] = calories;
  });

  return elvesCalories.sort((a, b) => {
    return b - a;
  });
};
