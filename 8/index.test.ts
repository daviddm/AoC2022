import { readFile } from "@util/readFile";
import {
  getScenicScore,
  isVisible,
  maxScenicScore,
  visibleTrees,
} from "./index";

describe("8", () => {
  let list: string[][];
  let testList: string[][];

  beforeEach(async () => {
    list = (await readFile("./8/input.txt")).map((a) => a.split(""));
    testList = (await readFile("./8/test.txt")).map((a) => a.split(""));
  });

  describe("test", () => {
    it("visibleTrees", async () => {
      expect.assertions(1);
      const result = await visibleTrees(testList);
      expect(result).toEqual(21);
    });
    it("isVisible", async () => {
      expect.assertions(1);
      const result = await isVisible(testList, { y: 1, x: 1 });
      expect(result).toBeTruthy();
    });
    it("isVisible", async () => {
      expect.assertions(1);
      const result = await isVisible(testList, { y: 1, x: 3 });
      expect(result).toBeFalsy();
    });
    it("isVisible", async () => {
      expect.assertions(1);
      const result = await isVisible(testList, { y: 2, x: 1 });
      expect(result).toBeTruthy();
    });
    it("isVisible", async () => {
      expect.assertions(1);
      const result = await isVisible(testList, { y: 2, x: 2 });
      expect(result).toBeFalsy();
    });
    it("isVisible", async () => {
      expect.assertions(1);
      const result = await isVisible(testList, { y: 3, x: 1 });
      expect(result).toBeFalsy();
    });
    it("isVisible", async () => {
      expect.assertions(1);
      const result = await isVisible(testList, { y: 3, x: 2 });
      expect(result).toBeTruthy();
    });
    it("isVisible", async () => {
      expect.assertions(1);
      const result = await isVisible(testList, { y: 3, x: 3 });
      expect(result).toBeFalsy();
    });
    it("isVisible", async () => {
      expect.assertions(1);
      const result = await isVisible(testList, { y: 0, x: 0 });
      expect(result).toBeTruthy();
    });
    it("getScenicScore", async () => {
      expect.assertions(1);
      const result = await getScenicScore(testList, { y: 1, x: 2 });
      expect(result).toBe(4);
    });
    it("getScenicScore", async () => {
      expect.assertions(1);
      const result = await getScenicScore(testList, { y: 3, x: 2 });
      expect(result).toBe(8);
    });
    it("maxScenicScore", async () => {
      expect.assertions(1);
      const result = maxScenicScore(testList);
      expect(result).toBe(8);
    });
  });

  describe("first", () => {
    it("visibleTrees", async () => {
      expect.assertions(1);
      const result = await visibleTrees(list);
      expect(result).toEqual(1676);
    });
  });

  describe("second", () => {
    it("getScenicScore", async () => {
      expect.assertions(1);
      const result = await maxScenicScore(list);
      expect(result).toEqual(313200);
    });
  });
});
