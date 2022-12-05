import { readFile } from "@util/readFile";
import { sum } from "@util/sum";
import { findBadges, half, inBoth, priority } from "./index";

describe("3", () => {
  let list: string[];
  let testList: string[];

  beforeEach(async () => {
    list = await readFile("./3/input.txt");
    testList = await readFile("./3/test.txt");
  });

  describe("test", () => {
    it("half", async () => {
      expect.assertions(1);
      const result = half("vJrwpWtwJgWrhcsFMMfFFhFp");
      expect(result).toEqual(["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
    });
    it("inBoth", async () => {
      expect.assertions(1);
      const result = inBoth(["vJrwpWtwJgWr", "hcsFMMfFFhFp"]);
      expect(result).toEqual(["p"]);
    });
    it("inBoth", async () => {
      expect.assertions(1);
      const result = inBoth(["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"]);
      expect(result).toEqual(["L"]);
    });
    it("inBoth", async () => {
      expect.assertions(1);
      const result = inBoth(["PmmdzqPrV", "vPwwTWBwg"]);
      expect(result).toEqual(["P"]);
    });
    it("inBoth", async () => {
      expect.assertions(1);
      const result = inBoth(half("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"));
      expect(result).toEqual(["v"]);
    });
    it("inBoth", async () => {
      expect.assertions(1);
      const result = inBoth(half("ttgJtRGJQctTZtZT"));
      expect(result).toEqual(["t"]);
    });
    it("inBoth", async () => {
      expect.assertions(1);
      // const result = inBoth(half("CrZsJsPPZsGzwwsLwLmpwMDw"));
      const result = [half("CrZsJsPPZsGzwwsLwLmpwMDw")].map(inBoth);
      expect(result).toEqual([["s"]]);
    });
    it("priority", async () => {
      expect.assertions(1);
      const result = priority("p");
      expect(result).toEqual(16);
    });
    it("priority a", async () => {
      expect.assertions(1);
      const result = priority("a");
      expect(result).toEqual(1);
    });
    it("priority A", async () => {
      expect.assertions(1);
      const result = priority("A");
      expect(result).toEqual(27);
    });
    it("priority L", async () => {
      expect.assertions(1);
      const result = priority("L");
      expect(result).toEqual(38);
    });

    it("run", async () => {
      expect.assertions(1);
      const result = testList
        .map(half)
        .map(inBoth)
        .map((sack) =>
          sack.map(priority).reduce(sum, 0)
        )
        .reduce(sum, 0);
      expect(result).toEqual(157);
    });
  });

  describe("first", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = list
        .map(half)
        .map(inBoth)
        .map((sack) =>
          sack.map(priority).reduce(sum, 0)
        )
        .reduce(sum, 0);
      expect(result).toEqual(7863);
    });
  });

  describe("second", () => {
    it("1", async () => {
      expect.assertions(1);
      const result = findBadges([
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
      ]);
      expect(result).toEqual([["r"]]);
    });
    it("2", async () => {
      expect.assertions(1);
      const result = findBadges([
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw",
      ]);
      expect(result).toEqual([["Z"]]);
    });
    it("2 test", async () => {
      expect.assertions(1);
      const result = findBadges(testList)
        .map((a) => a.map(priority).reduce(sum, 0))
        .reduce(sum, 0);
      expect(result).toEqual(70);
    });
    it("2", async () => {
      expect.assertions(1);
      const result = findBadges(list)
        .map((a) => a.map(priority).reduce(sum, 0))
        .reduce(sum, 0);
      expect(result).toEqual(2488);
    });
  });
});
