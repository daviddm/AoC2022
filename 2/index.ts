type Outcome = { [key: string]: number };

export const PlayValue: Outcome = {
  A: 1, // Sten
  B: 2, // Påse
  C: 3, // Sax
  X: 1, // Sten
  Y: 2, // Påse
  Z: 3, // Sax
};

export const Match1Outcome: Outcome = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
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

export const run = async (
  rounds: string[][],
  { playValue, outcome }: { playValue?: Outcome; outcome: Outcome }
) => {
  return rounds
    .map(([a, b]) => {
      let play = 0;
      if (playValue) {
        play = playValue[b];
      }
      return play + outcome[`${a}${b}`];
    })
    .reduce((prev, curr) => prev + curr, 0);
};
