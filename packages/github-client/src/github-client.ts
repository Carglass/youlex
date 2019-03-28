import { config } from "dotenv";
const env = config();
import { readFileSync } from "fs";

const App = require("@octokit/app");
const Octokit = require("@octokit/rest");

// code usefule to find an installation id
// reading a file is unnecessary though
// const privateKey = readFileSync(
//   "./lib/youlex-github.2019-03-28.private-key (2).pem"
// );
// console.log(privateKey);
// const app = new App({
//   id: process.env.APP_ID,
//   privateKey: privateKey
// });
// const token = app.getSignedJsonWebToken();
// console.log(token);
// const octokit = new Octokit({
//   auth() {
//     return `bearer ${token}`;
//   }
// });

// octokit.apps.listInstallations().then(result => {
//   console.log(result);
// });

const app = new App({
  id: process.env.APP_ID,
  privateKey: process.env.PRIVATE_KEY
});
const octokit = new Octokit({
  async auth() {
    const installationAccessToken = await app.getInstallationAccessToken({
      installationId: process.env.INSTALLATION_ID
    });
    return `token ${installationAccessToken}`;
  }
});

octokit.repos.listForOrg({ org: "youlex-repos" }).then(result => {
  console.log(result);
});

export function githubClient() {
  // code here
}
