import { readFile } from "@util/readFile";
import { stringToNumber } from "@util/stringToNumber";
import { sum } from "@util/sum";
import { parseOutput, findFolders, calcSizes } from "./index";

describe("7", () => {
  let testList: string[];
  let list: string[];

  beforeEach(async () => {
    testList = await readFile("./7/test.txt");
    list = await readFile("./7/input.txt");
  });

  describe("test", () => {
    it("create file", async () => {
      expect.assertions(1);
      const result = await parseOutput(["$ ls", "14848514 b.txt"]);
      expect(result).toMatchSnapshot();
    });
    it("create dir", async () => {
      expect.assertions(1);
      const result = await parseOutput(["$ ls", "dir a"]);
      expect(result).toMatchSnapshot();
    });
    it("create dir with file in", async () => {
      expect.assertions(1);
      const result = await parseOutput([
        "$ ls",
        "dir a",
        "$ cd a",
        "$ ls",
        "14848515 b.txt",
      ]);
      expect(result).toMatchSnapshot();
    });
    it("find folders", async () => {
      expect.assertions(1);
      const result = await findFolders(
        parseOutput(["$ ls", "dir a", "$ cd a", "$ ls", "1337 b.txt"])
      );
      expect(result).toMatchSnapshot();
    });
    it("calcSizes", async () => {
      expect.assertions(1);
      const root = await parseOutput([
        "$ ls",
        "dir a",
        "$ cd a",
        "$ ls",
        "1337 b.txt",
      ]);

      const size = calcSizes(root);
      expect(root.size).toBe(1337);
    });
  });

  describe("first", () => {
    it("structure", async () => {
      expect.assertions(1);
      const result = await parseOutput(testList);
      expect(result).toMatchSnapshot();
    });
    it("folders", async () => {
      expect.assertions(1);
      const result = await findFolders(parseOutput(testList));
      expect(result.length).toEqual(4);
    });
    it("size of folder e", async () => {
      expect.assertions(1);
      const root = parseOutput(testList);
      calcSizes(root);
      const dirs = findFolders(root).filter((a) => a.name == "e");
      expect(dirs[0].size).toEqual(584);
    });
    it("size of folder a", async () => {
      expect.assertions(1);
      const root = parseOutput(testList);
      calcSizes(root);
      const dirs = findFolders(root).filter((a) => a.name == "a");
      expect(dirs[0].size).toEqual(94853);
    });
    it("size of root", async () => {
      expect.assertions(1);
      const root = parseOutput(testList);
      calcSizes(root);
      const dirs = findFolders(root).filter((a) => a.name == "/");
      expect(dirs[0].size).toEqual(48381165);
    });

    it("test", async () => {
      expect.assertions(1);
      const root = parseOutput(testList);
      calcSizes(root);
      const dirSum = findFolders(root)
        .filter((a) => a.size <= 100000)
        .map((a) => a.size)
        .reduce(sum, 0);
      expect(dirSum).toEqual(95437);
    });

    it("answer", async () => {
      expect.assertions(1);
      const root = parseOutput(list);
      calcSizes(root);
      const dirSum = findFolders(root)
        .filter((a) => a.size <= 100000)
        .map((a) => a.size)
        .reduce(sum, 0);
      expect(dirSum).toEqual(1581595);
    });
  });

  describe("second", () => {
    it("test", async () => {
      expect.assertions(1);
      const root = parseOutput(testList);
      calcSizes(root);
      const min = Math.abs(70000000 - 30000000 - root.size);
      const dir = findFolders(root)
        .sort((a, b) => a.size - b.size)
        .find((a) => a.size > min);
      expect(dir?.size).toEqual(24933642);
    });
    it("answer", async () => {
      expect.assertions(1);
      const root = parseOutput(list);
      calcSizes(root);
      const min = Math.abs(70000000 - 30000000 - root.size);
      const dir = findFolders(root)
        .sort((a, b) => a.size - b.size)
        .find((a) => a.size > min);

      expect(dir?.size).toEqual(1544176);
    });
  });
});
