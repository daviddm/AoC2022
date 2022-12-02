import { readFile } from "@util/readFile";
import { Match1Outcome, Match2Outcome, PlayValue, run } from "./index";

describe("2", () => {
  let list: string[][];
  let testList: string[][];

  let props: Parameters<typeof run>[1];

  beforeEach(async () => {
    list = (await readFile("./2/input.txt")).map((row) => row.split(" "));
    testList = (await readFile("./2/test.txt")).map((row) => row.split(" "));
  });

  describe("first", () => {
    beforeEach(async () => {
      props = {
        outcome: Match1Outcome,
        playValue: PlayValue
      }
    })

    describe("test", () => {
      it("A Y", async () => {
        expect.assertions(1);

        const result = await run([["A", "Y"]], props);
        expect(result).toEqual(8);
      });
      it("B X", async () => {
        expect.assertions(1);

        const result = await run([["B", "X"]], props);
        expect(result).toEqual(1);
      });
      it("C Z", async () => {
        expect.assertions(1);

        const result = await run([["C", "Z"]], props);
        expect(result).toEqual(6);
      });
      it("test run", async () => {
        expect.assertions(1);

        const result = await run(testList, props);
        expect(result).toEqual(15);
      });
    });

    it("run", async () => {
      expect.assertions(1);
      const result = await run(list, props);
      expect(result).toEqual(11150);
    });
  });

  describe("second", () => {
    beforeEach(async () => {
      props = {
        outcome: Match2Outcome,
        // playValue: PlayValue
      }
    })

    describe("test", () => {
      it("A Y", async () => {
        expect.assertions(1);

        const result = await run([["A", "Y"]], props);
        expect(result).toEqual(4);
      });

      it("B X", async () => {
        expect.assertions(1);

        const result = await run([["B", "X"]], props);
        expect(result).toEqual(1);
      });

      it("C Z", async () => {
        expect.assertions(1);

        const result = await run([["C", "Z"]], props);
        expect(result).toEqual(7);
      });

      it("test run", async () => {
        expect.assertions(1);
        const result = await run(testList, props);
        expect(result).toEqual(12);
      });
    });

    it("run", async () => {
      expect.assertions(1);
      const result = await run(list, props);
      expect(result).toEqual(8295);
    });
  });
});
