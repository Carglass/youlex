"use strict";

const githubClient = require("..");

console.log(githubClient);

test("the data is peanut butter", async () => {
  expect.assertions(1);
  const { data } = await githubClient.githubClient();
  expect(data).toBeTruthy();
});
