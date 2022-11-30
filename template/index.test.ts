import { run } from "./";

describe("1", () => {
  it("should be true", async () => {
    await run();
    expect(true).toBeTruthy();
  });
});
