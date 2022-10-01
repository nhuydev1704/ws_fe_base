#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.log("🚀 ~ file: cli.js ~ line 9 ~ runCommand ~ e", e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/nhuydev1704/ws_fe_base.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(`clonsing repo... ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`cloning repo... ${repoName}`);

const installed = runCommand(installDepsCommand);

if (!installed) process.exit(-1);

console.log(`cloning repo... ${repoName}`);

console.log(`cd ${repoName} && yarn install`);
