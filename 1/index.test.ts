import { readFile } from "@util/readFile";
import { stringToNumber } from "@util/stringToNumber";
import { sum } from '@util/sum';
import { run } from "./index";

describe("1", () => {
  let list: number[];
  let testList: number[];

  beforeEach(async () => {
    list = stringToNumber(await readFile("./1/input.txt"));
    testList = stringToNumber(await readFile("./1/test.txt"));
  });

  describe('test', () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run(testList);
      expect(result).toEqual([24000, 11000, 10000, 6000, 4000]);
    });
  })

  describe("first", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run(list);
      expect(result[0]).toEqual(69693);
    });
  });

  describe("second", () => {
    it("run", async () => {
      expect.assertions(1);
      const calories = await run(list);
      const result = calories.slice(0, 3).reduce(sum, 0);
      expect(result).toEqual(200945);
    });
  });
});
