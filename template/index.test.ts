import { readFile } from "@util/readFile";
import { stringToNumber } from "@util/stringToNumber";
import { run } from "./";

describe("1", () => {
  let list: number[];
  let testList: number[];

  beforeEach(async () => {
    list = stringToNumber(await readFile("./1/input.txt"));
    testList = stringToNumber(await readFile("./1/test.txt"));
  });

  describe("test", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run(testList);
      expect(result).toEqual(undefined);
    });
  });

  describe.skip("first", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run(list);
      expect(result).toEqual(undefined);
    });
  });

  describe.skip("second", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run(list);
      expect(result).toEqual(undefined);
    });
  });
});
