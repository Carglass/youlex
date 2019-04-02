"use strict";

const githubClient = require("..");

console.log(githubClient);

describe("CRUD on the repos/laws works", () => {
  test("The repos are found correctly", async () => {
    expect.assertions(1);
    const { data } = await githubClient.githubClient();
    expect(data).toBeTruthy();
  });
});
