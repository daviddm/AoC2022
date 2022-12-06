import { readFile } from "@util/readFile";
import { stringToNumber } from "@util/stringToNumber";
import { run } from "./index";

describe("5", () => {
  let list: string[];

  beforeEach(async () => {
    list = await readFile("./6/input.txt");
  });

  describe("test", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run("mjqjpqm".split(""));
      expect(result).toEqual(7);
    });
    it("run", async () => {
      expect.assertions(1);
      const result = await run("mjqjpqmgbljsphdztnvjfqwrcgsmlb".split(""));
      expect(result).toEqual(7);
    });
    it("run", async () => {
      expect.assertions(1);
      const result = await run("bvwbjplbgvbhsrlpgdmjqwftvncz".split(""));
      expect(result).toEqual(5);
    });
    it("run", async () => {
      expect.assertions(1);
      const result = await run("nppdvjthqldpwncqszvftbrmjlhg".split(""));
      expect(result).toEqual(6);
    });
    it("run", async () => {
      expect.assertions(1);
      const result = await run("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg".split(""));
      expect(result).toEqual(10);
    });
    it("run", async () => {
      expect.assertions(1);
      const result = await run("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw".split(""));
      expect(result).toEqual(11);
    });
  });
  
  describe("first", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run(list[0].split(""));
      expect(result).toEqual(1356);
    });
  });
  
  describe("second", () => {
    it("run", async () => {
      expect.assertions(1);
      const result = await run("mjqjpqmgbljsphdztnvjfqwrcgsmlb".split(""), 14);
      expect(result).toEqual(19);
    });
    it("run", async () => {
      expect.assertions(1);
      const result = await run(list[0].split(""), 14);
      expect(result).toEqual(2564);
    });
  });
});
