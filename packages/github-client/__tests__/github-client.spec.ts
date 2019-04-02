"use strict";

const githubClient = require("..");

describe("Environment is correctly setup", () => {
  test("environment is correctly setup", () => {
    expect(process.env.APP_ID).toBe(27814);
  });
});

describe("CRUD on the repos/laws works", () => {
  test("The repos are found correctly", async () => {
    expect.assertions(1);
    const { data } = await githubClient.githubClient();
    expect(data).toBeTruthy();
  });
});
