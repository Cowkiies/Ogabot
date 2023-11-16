import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

// Simple bruh command
const BRUH_COMMAND = {
  name: 'bruh',
  description: 'Bruh ASCII',
  type: 1,
};

const DISPO_COMMAND = {
  name: 'dispo',
  description: 'dispo',
  type: 1,
};

const ROLE_COMMAND = {
  name: 'role',
  description: 'role',
  type: 1,
};

// Command containing options
// const CHALLENGE_COMMAND = {
//   name: 'challenge',
//   description: 'Challenge to a match of rock paper scissors',
//   options: [
//     {
//       type: 3,
//       name: 'object',
//       description: 'Pick your object',
//       required: true,
//       choices: createCommandChoices(),
//     },
//   ],
//   type: 1,
// };

const ALL_COMMANDS = [TEST_COMMAND, BRUH_COMMAND, DISPO_COMMAND, ROLE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);