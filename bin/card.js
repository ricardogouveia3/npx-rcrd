#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Import our modules using ESM syntax
import chalk from 'chalk';
import boxen from 'boxen';

// Define options for Boxen (box style)
const options = {
  padding: 1,
  borderStyle: 'round'
};

// Text + chalk definitions (content of the card)
const data = {
  emoji: chalk('👨💻'),
  name: chalk.bold.cyan.underline('Ricardo Gouveia'),
  work: chalk.white('Front-end developer'),
  at: chalk.white('@'),
  company: chalk.cyan.bold('Thoughtworks'),
  bluesky: chalk.cyan('https://bsky.app/profile/rcrd.dev'),
  github: chalk.cyan('https://github.com/ricardogouveia3'),
  portfolio: chalk.cyan('https://rcrd.dev'),
  npx: chalk.cyan('npx rcrd'),
  labelWork: chalk.white.bold('Work:'),
  labelBluesky: chalk.white.bold('BlueSky:'),
  labelGitHub: chalk.white.bold('GitHub:'),
  labelPortfolio: chalk.white.bold('Portfolio:'),
  labelCard: chalk.white.bold('Card:')
};

// Actual strings we're going to output (formatted output)
const newline = '\n';

const emoji = `${data.emoji}`;
const heading = `${data.name}`;
const working = `${data.labelWork} ${data.work} ${data.at} ${data.company}`;

const bluesky = `> ${data.labelBluesky}   ${data.bluesky}`;
const github = `> ${data.labelGitHub}    ${data.github}`;
const portfolio = `> ${data.labelPortfolio} ${data.portfolio}`;
const carding = `${data.labelCard} ${data.npx}`;

// Putting all output together into a single variable
const output = emoji + newline + heading + newline + newline + working + newline + newline + portfolio + newline + github + newline + bluesky + newline + newline + carding;

// Outputting the final boxed card to the console
console.log(chalk.cyan(boxen(output, options)));
