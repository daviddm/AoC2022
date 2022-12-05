export const makeRanges = (assignments: string[]): number[][][] => {
  return assignments.map((assignment) => {
    const [_, aLow, aHigh, bLow, bHigh] = assignment.match(
      /(?<aLow>\d+)\-(?<aHight>\d+),(?<bLow>\d+)\-(?<bHight>\d+)/
    ) as any;
    return [range(+aLow, +aHigh), range(+bLow, +bHigh)];
  });
};

export const makeRanges2 = (assignments: string[]): number[][][] => {
  return assignments.map((assignment) => {
    const [_, aLow, aHigh, bLow, bHigh] = assignment.match(
      /(?<aLow>\d+)\-(?<aHight>\d+),(?<bLow>\d+)\-(?<bHight>\d+)/
    ) as any;
    return [
      [+aLow, +aHigh],
      [+bLow, +bHigh],
    ];
  });
};

const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export const assignmentOverlapAll = (arg: [number[], number[]]): boolean => {
  const [A, B] = arg;
  return A.every((a) => B.includes(a)) || B.every((b) => A.includes(b));
};

export const assignmentOverlap = (
  arg: [[number, number], [number, number]]
): boolean => {
  const [A, B] = arg[0];
  const [C, D] = arg[1];

  
  return A <= C && B >= C || C <= A && D >= A;
};
