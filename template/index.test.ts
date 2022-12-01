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
      await run();
      expect(true).toBeTruthy();
    });
  });
  describe.skip("first", () => {});
  describe.skip("second", () => {});
});
