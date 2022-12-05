export const split = (lines: string[]) => {
  let stacks: string[] = [];
  let instructions: string[] = [];

  let isStacksDone = false;

  for (const i in lines) {
    if (lines[i] === "") {
      isStacksDone = true;
      continue;
    }
    if (isStacksDone) {
      instructions.push(lines[i]);
      continue;
    }
    stacks.push(lines[i]);
  }

  return { stacks, instructions };
};

export const parseStack = (lines: string[]): string[][] => {
  let { stacks: tempStacks } = split(lines);

  const stacks: string[][] = [];

  tempStacks = tempStacks.reverse();

  for (const i in tempStacks[0].split("")) {
    const column = parseInt(tempStacks[0][i]) - 1;
    if (isNaN(column)) {
      continue;
    }

    stacks[column] = [];

    tempStacks.slice(1).forEach((temp) => {
      if (temp[i] == " ") {
        return;
      }
      stacks[column].push(temp[i]);
    });
  }

  return stacks;
};

export const move = (
  stacksOrg: string[][],
  instructions: string[],
  all = false
): string[][] => {
  const stacks = JSON.parse(JSON.stringify(stacksOrg));

  // console.log(stacks);

  instructions.forEach((instruction) => {
    // console.log(instruction);
    // console.log(
    //   instruction.match(/(?<count>\d+)[\w\s]+(?<from>\d+)[\w\s]+(?<to>\d+)/)
    // );
    // const [_, count, from, to] = instruction.match(
    const result = instruction.match(
      /(?<count>\d+)[\w\s]+(?<from>\d+)[\w\s]+(?<to>\d+)/
    );
    const { count, from, to } = result?.groups as any;
    // console.log(count, from, to);
    if (all) {
      const length = stacks[from - 1].length;
      stacks[to - 1].push(...stacks[from - 1].splice(length - count));
      return;
    }

    for (let i = 1; i <= count; i++) {
      stacks[to - 1].push(stacks[from - 1].pop());
    }
  });

  return stacks;
};
