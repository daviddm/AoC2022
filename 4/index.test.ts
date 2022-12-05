import { readFile } from "@util/readFile";
import { assignmentOverlap, assignmentOverlapAll, makeRanges, makeRanges2 } from "./index";

describe("4", () => {
  let list: string[];
  let testList: string[];

  beforeEach(async () => {
    list = await readFile("./4/input.txt");
    testList = await readFile("./4/test.txt");
  });

  describe("test", () => {
    it("makeRanges", async () => {
      expect.assertions(1);
      const result = await makeRanges(["2-4,6-8"]);
      expect(result).toEqual([
        [
          [2, 3, 4],
          [6, 7, 8],
        ],
      ]);
    });
    it("makeRanges", async () => {
      expect.assertions(1);
      const result = await makeRanges(["2-3,4-5"]);
      expect(result).toEqual([
        [
          [2, 3],
          [4, 5],
        ],
      ]);
    });
    it("makeRanges", async () => {
      expect.assertions(1);
      const result = await makeRanges(["6-6,4-6"]);
      expect(result).toEqual([[[6], [4, 5, 6]]]);
    });

    it("assignmentOverlap", async () => {
      expect.assertions(1);
      const result = await assignmentOverlapAll([[6], [4, 5, 6]]);
      expect(result).toBeTruthy();
    });
    it("assignmentOverlap", async () => {
      expect.assertions(1);
      const result = await assignmentOverlapAll([
        [2, 3],
        [4, 5],
      ]);
      expect(result).toBeFalsy();
    });

    it("run", async () => {
      expect.assertions(1);
      const result = await makeRanges(testList).filter((a) =>
        assignmentOverlapAll(a as any)
      );
      expect(result.length).toEqual(2);
    });
  });

  describe("first", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await makeRanges(list).filter((a) =>
        assignmentOverlapAll(a as any)
      );
      expect(result.length).toEqual(602);
    });
  });

  describe("second", () => {
    it("test", async () => {
      expect.assertions(1);
      const result = await makeRanges2(testList).filter((a) =>
      assignmentOverlap(a as any)
      );
      expect(result.length).toEqual(4);
    });
    it("run", async () => {
      expect.assertions(1);
      const result = await makeRanges2(list).filter((a) =>
      assignmentOverlap(a as any)
      );
      expect(result.length).toEqual(891);
    });
  });
});
