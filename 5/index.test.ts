import { readFile } from "@util/readFile";
import { stringToNumber } from "@util/stringToNumber";
import { move, parseStack, split } from "./index";

describe("1", () => {
  let list: string[];
  let testList: string[];

  beforeEach(async () => {
    list = await readFile("./5/input.txt");
    testList = await readFile("./5/test.txt");
  });

  describe("test", () => {
    it("parseStack", async () => {
      expect.assertions(1);
      const result = parseStack(testList);
      expect(result[0]).toEqual(["Z", "N"]);
    });
    it("parseStack", async () => {
      expect.assertions(1);
      const result = parseStack(testList);
      expect(result[1]).toEqual(["M", "C", "D"]);
    });
    it("parseStack", async () => {
      expect.assertions(1);
      const result = parseStack(testList);
      expect(result[2]).toEqual(["P"]);
    });
  });
  describe("move", () => {
    let stacks: string[][];
    let instructions: string[];
    beforeEach(async () => {
      stacks = parseStack(testList);
      const { instructions: temp } = split(testList);
      instructions = temp;
    });

    it("description", async () => {
      expect.assertions(2);
      const result = move(stacks, ["move 1 from 1 to 3"]);
      expect(result[0]).toEqual(["Z"]);
      expect(result[2]).toEqual(["P", "N"]);
    });
    it("description", async () => {
      expect.assertions(2);
      const result = move(stacks, ["move 2 from 1 to 3"]);
      expect(result[0]).toEqual([]);
      expect(result[2]).toEqual(["P", "N", "Z"]);
    });
    it("description", async () => {
      expect.assertions(3);
      const result = move(stacks, ["move 1 from 2 to 1", "move 3 from 1 to 3"]);
      expect(result[0]).toEqual([]);
      expect(result[1]).toEqual(["M","C"]);
      expect(result[2]).toEqual(["P","D", "N", "Z"]);
    });
  });

  describe("first", () => {
    it("test", async () => {
      expect.assertions(1);
      const { instructions, stacks: org } = split(testList);
      
      const stacks = await parseStack(org);

      const result = move(stacks, instructions);

      expect(result.map((a) => a.pop()).join("")).toEqual("CMZ");
    });
    it("run", async () => {
      expect.assertions(1);
      const { instructions, stacks: org } = split(list);
      const stacks = await parseStack(org);

      const result = move(stacks, instructions)

      expect(result.map(a => a.pop()).join("")).toEqual("CWMTGHBDW");
    });
    it("run", async () => {
      expect.assertions(1);
      const { instructions, stacks: org } = split(list);
      const stacks = await parseStack(org);

      const result = move(stacks, instructions)
      expect(result.map(a => a.pop()).join("")).not.toEqual("GMGWMCVCL");
    });
  });

  describe("second", () => {
    it("test", async () => {
      expect.assertions(1);
      const { instructions, stacks: org } = split(testList);
      
      const stacks = await parseStack(org);

      const result = move(stacks, instructions, true);

      expect(result.map((a) => a.pop()).join("")).toEqual("MCD");
    });
    it("run", async () => {
      expect.assertions(1);
      const { instructions, stacks: org } = split(list);
      const stacks = await parseStack(org);

      const result = move(stacks, instructions, true)

      expect(result.map(a => a.pop()).join("")).toEqual("SSCGWJCRB");
    });
  });
});
