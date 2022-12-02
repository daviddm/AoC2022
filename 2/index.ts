type Outcome = { [key: string]: number };

export const Match1Outcome: Outcome = {
  AX: 4,
  AY: 8,
  AZ: 3,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 7,
  CY: 2,
  CZ: 6,
};
export const Match2Outcome: Outcome = {
  AX: 3,
  AY: 4,
  AZ: 8,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 2,
  CY: 6,
  CZ: 7,
};

export const run = async (rounds: string[][], outcome: Outcome) => {
  return rounds
    .map(([a, b]) => {
      return outcome[`${a}${b}`];
    })
    .reduce((prev, curr) => prev + curr, 0);
};
