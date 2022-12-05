export const half = (full: string): [string, string] => {
  const half = full.length / 2;
  return [full.slice(0, half), full.slice(half, full.length)];
};

export const inBoth = (arg: [string, string]): string[] => {
  const [a, b] = arg;
  const chars = a.split("");
  const all = b.split("").filter((char) => chars.includes(char));

  return all.filter((a, i, arr) => arr.indexOf(a) === i);
};

export const priority = (a: string): number => {
  const i = a.toLocaleLowerCase().charCodeAt(0) - 96;

  if (a === a.toUpperCase()) {
    return i + 26;
  }
  return i;
};

export const findBadges = (full: string[]): string[][] => {
  const badges = [];
  for (let index = 0; index < full.length; index += 3) {
    badges.push(
      findBadge(
        full[index].split(""),
        full[index + 1].split(""),
        full[index + 2].split("")
      )
    );
  }
  return badges;
};

const findBadge = (A: string[], B: string[], C: string[]): string[] => {
  return A.filter((a, i, arr) => B.includes(a) && C.includes(a) && arr.indexOf(a) === i);
};
