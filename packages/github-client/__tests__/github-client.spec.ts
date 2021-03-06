"use strict";

const githubClient = require("./../src/github-client");

describe("Environment is correctly setup", () => {
  test("environment is correctly setup", () => {
    expect(process.env.APP_ID).toBe("27814");
  });
});

describe("CRUD on the repos/laws works", () => {
  test("The repos are found correctly", async () => {
    expect.assertions(1);
    const { data } = await githubClient.lawRepo.get();
    expect(data).toBeTruthy();
  });

  // test("creating a repo works", async () => {
  //   expect.assertions(1);
  //   const requestResult = await githubClient.lawRepo.create("Test Law", "M.Burlat");
  //   const {data} = await githubClient.lawRepo.get();
  //   expect(data.)
  // })
});
