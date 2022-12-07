import { sum } from "@util/sum";

type Directory = {
  name: string;
  files: File[];
  directories: Directory[];
  parent: Directory;
  size: number;
};

type File = {
  name: string;
  size: number;
};

export const parseOutput = (lines: string[]): Directory => {
  const root: Directory = {
    name: "/",
    files: [],
    directories: [],
    size: 0,
    parent: null as any,
  };
  root.parent = root;

  let currentDir = root;

  lines.forEach((line) => {
    if (line.match(/^\d+/)) {
      const [size, name] = line.split(" ");
      currentDir.files.push({ name, size: +size });
      return;
    }

    if (line.match(/^dir/)) {
      const [_, name] = line.split(" ");
      currentDir.directories.push({
        name,
        files: [],
        directories: [],
        size: 0,
        parent: currentDir,
      });
      return;
    }

    if (line.match(/^\$ cd/)) {
      const [_1, _2, newDirectory] = line.split(" ");
      if (newDirectory === "/") {
        currentDir = root;
        return;
      }
      if (newDirectory === "..") {
        currentDir = currentDir.parent;
        return;
      }
      const cdDir = currentDir.directories.find(
        (directory) => directory.name === newDirectory
      );
      if (!cdDir) {
        throw Error(`cd into undefined ${newDirectory}`);
      }
      currentDir = cdDir;
      return;
    }
  });

  return root;
};

export const findFolders = (
  dir: Directory,
  sizeLimit: number = 0
): Directory[] => {
  if (!dir.directories.length) {
    return [dir];
  }
  return [dir, ...dir.directories.map((a) => findFolders(a, sizeLimit)).flat()];
};

export const calcSizes = (dir: Directory): number => {
  if (dir.size > 0) {
    return dir.size;
  }
  const dirSize = dir.directories.map(calcSizes).reduce(sum, 0);
  const fileSize = dir.files.map((f) => f.size).reduce(sum, 0);

  dir.size = dirSize + fileSize;

  return dir.size;
};
