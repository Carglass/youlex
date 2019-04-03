import { config } from "dotenv";
const env = config();

const App = require("@octokit/app");
const Octokit = require("@octokit/rest");

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

export function githubClient() {
  return octokit.repos.listForOrg({ org: "youlex-repos" });
}
