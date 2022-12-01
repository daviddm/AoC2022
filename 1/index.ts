export const run = async (list: number[]) => {
  return list
    .reduce(
      (elvesCalories, inventory) => {
        const lastIndex = elvesCalories.length - 1;
        if (Number.isNaN(inventory)) {
          elvesCalories[lastIndex + 1] = 0;
          return elvesCalories;
        }
        elvesCalories[lastIndex] += inventory;
        return elvesCalories;
      },
      [0]
    )
    .sort((a, b) => {
      return b - a;
    });
};
