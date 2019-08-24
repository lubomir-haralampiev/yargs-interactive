#!/usr/bin/env node

/*
 * Usage 1:
 * 1) Open a terminal.
 * 2) Enter: node ./examples/basic.js --name='John'
 * Result: Outputs John as name and the default value of likesPizza (false).
 *
 * Usage 2:
 * 1) Open a terminal.
 * 2) Enter: node ./examples/basic.js --name='John' --likesPizza
 *    Result: Outputs John as name and likesPizza set to true
 *
 * Usage 3:
 * 1) Open a terminal.
 * 2) Enter: node ./examples/basic.js
 *    Result: Output should have the default values in all properties.
 *
 * Usage 4:
 * 1) Open a terminal.
 * 2) Enter: node ./examples/basic.js --interactive
 *    Result: the tool will prompt all questions and will output the user answers.
 */

const yargsInteractive = require('../src');

const options = {
  name: {
    type: 'input',
    default: 'A robot',
    prompt: 'if-no-arg',
    describe: 'Enter your name'
  },
  likesPizza: {
    type: 'confirm',
    default: false,
    prompt: 'if-no-arg',
    describe: 'Do you like pizza?'
  }
};

yargsInteractive()
    .usage('$0 <command> [args]')
    .interactive(options)
    .then((result) => {
      console.log(`\nResult is:\n` + `- Name: ${result.name}\n` + `- Likes pizza: ${result.likesPizza}\n`);
    });
