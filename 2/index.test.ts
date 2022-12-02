import { readFile } from "@util/readFile";
import { Match1Outcome, Match2Outcome, run } from "./index";

describe("2", () => {
  let list: string[][];
  let testList: string[][];

  beforeEach(async () => {
    list = (await readFile("./2/input.txt")).map((row) => row.split(" "));
    testList = (await readFile("./2/test.txt")).map((row) => row.split(" "));
  });

  describe("first", () => {
    describe("test", () => {
      it("A Y", async () => {
        expect.assertions(1);

        const result = await run([["A", "Y"]], Match1Outcome);
        expect(result).toEqual(8);
      });
      it("B X", async () => {
        expect.assertions(1);

        const result = await run([["B", "X"]], Match1Outcome);
        expect(result).toEqual(1);
      });
      it("C Z", async () => {
        expect.assertions(1);

        const result = await run([["C", "Z"]], Match1Outcome);
        expect(result).toEqual(6);
      });
      it("test run", async () => {
        expect.assertions(1);

        const result = await run(testList, Match1Outcome);
        expect(result).toEqual(15);
      });
    });

    it("run", async () => {
      expect.assertions(1);
      const result = await run(list, Match1Outcome);
      expect(result).toEqual(11150);
    });
  });

  describe("second", () => {
    describe("test", () => {
      it("A Y", async () => {
        expect.assertions(1);

        const result = await run([["A", "Y"]], Match2Outcome);
        expect(result).toEqual(4);
      });

      it("B X", async () => {
        expect.assertions(1);

        const result = await run([["B", "X"]], Match2Outcome);
        expect(result).toEqual(1);
      });

      it("C Z", async () => {
        expect.assertions(1);

        const result = await run([["C", "Z"]], Match2Outcome);
        expect(result).toEqual(7);
      });
      
      it("test run", async () => {
        expect.assertions(1);
        const result = await run(testList, Match2Outcome);
        expect(result).toEqual(12);
      });
    });

    it("run", async () => {
      expect.assertions(1);
      const result = await run(list, Match2Outcome);
      expect(result).toEqual(8295);
    });
  });
});
