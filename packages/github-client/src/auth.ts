// TODO: remove as useless since octokit provide a simple interface to auth

import { sign } from "jsonwebtoken";

// format of the payload expected for Github JWT auth
export interface jwtPayload {
  iat: number;
  exp: number;
  iss: string;
}

// the maximum expiration time is ten minutes
//
const createPayload = function(): jwtPayload {
  const now: Date = new Date();
  return {
    iat: now.getSeconds(),
    exp: now.getSeconds() + 599,
    iss: "youlex-github"
  };
};

export const createToken = function() {
  const payload: jwtPayload = createPayload();
  return sign(payload, process.env.PEM);
};

export const logToken = function() {
  console.log(createToken());
};
