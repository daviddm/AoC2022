import { cloneDeep } from "lodash";

const EMPTY_PLOT = "-";

export const visibleTrees = async (trees: Trees) => {
  let temp = cloneDeep(trees);
  temp = temp.map((row, i, arrI) => {
    if (i === 0 || i === arrI.length - 1) {
      return row;
    }
    return row.map((col, j, arrJ) => {
      if (j === 0 || j === arrJ.length - 1) {
        return col;
      }
      if (!isVisible(trees, { y: i, x: j })) {
        return EMPTY_PLOT;
      }
      return col;
    });
  });

  return temp.reduce((totalRow, row) => {
    return (
      totalRow +
      row.reduce((totalCol, col) => {
        return totalCol + (col === EMPTY_PLOT ? 0 : 1);
      }, 0)
    );
  }, 0);
};

type Trees = string[][];
type Position = {
  x: number;
  y: number;
};

export const isVisible = (trees: Trees, pos: Position): boolean => {
  return (
    isVisibleHorizontal(trees, pos, 0, pos.x) ||
    isVisibleHorizontal(trees, pos, pos.x + 1, trees[0].length) ||
    isVisibleVertical(trees, pos, 0, pos.y) ||
    isVisibleVertical(trees, pos, pos.y + 1, trees.length)
  );
};

const isVisibleHorizontal = (
  trees: Trees,
  pos: Position,
  start: number,
  end: number
): boolean => {
  for (let i = start; i < end; i++) {
    if (trees[pos.y][i] >= trees[pos.y][pos.x]) {
      return false;
    }
  }
  return true;
};

const isVisibleVertical = (
  trees: Trees,
  pos: Position,
  start: number,
  end: number
): boolean => {
  for (let i = start; i < end; i++) {
    if (trees[i][pos.x] >= trees[pos.y][pos.x]) {
      return false;
    }
  }
  return true;
};

export const getScenicScore = (trees: Trees, pos: Position) => {
  const currentTreeHeight = trees[pos.y][pos.x];
  const scenicMultiplier = [0, 0, 0, 0];
  for (let i = pos.y - 1; i >= 0; i--) {
    // Up
    scenicMultiplier[0]++;
    if (trees[i][pos.x] >= currentTreeHeight) {
      break;
    }
  }
  for (let i = pos.x - 1; i >= 0; i--) {
    // Left
    scenicMultiplier[1]++;
    if (trees[pos.y][i] >= currentTreeHeight) {
      break;
    }
  }
  for (let i = pos.x + 1; i < trees[0].length; i++) {
    // Right
    scenicMultiplier[2]++;
    if (trees[pos.y][i] >= currentTreeHeight) {
      break;
    }
  }
  for (let i = pos.y + 1; i < trees[0].length; i++) {
    // Down
    scenicMultiplier[3]++;
    if (trees[i][pos.x] >= currentTreeHeight) {
      break;
    }
  }

  return scenicMultiplier.reduce((a, b) => a * b, 1);
};

export const maxScenicScore = (trees: Trees): number => {
  return trees.reduce((maxRow, row, i) => {
    return Math.max(
      maxRow,
      row.reduce((maxCol, col, j) => {
        return Math.max(maxCol, getScenicScore(trees, { y: i, x: j }));
      }, 0)
    );
  }, 0);
};
