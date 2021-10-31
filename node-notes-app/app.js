//const fs = require('fs');
const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require('./notes');


// fs.writeFileSync('notes.txt', 'Hi everyone!');
//fs.appendFileSync('notes.txt', 'Enjoy the life!');

//-----
//require('./utils');

// console.log(notes());

// const validator = require('validator');

// console.log(validator.isEmail('test@gmail.com'));
// console.log(validator.isURL('http//lead.io'));

// const chalk = require('chalk');

// console.log(chalk.green('Hello world!'));
// console.log(chalk.blue.bold('Hi Everyone!'));
// console.log(chalk.red.bold('Good Bye!'));

//------
//node app.js hello test
// console.log(process.argv);
// console.log(process.argv[2]);


//-----

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        const { title, body } = argv;
        notes.addNotes(title, body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    title: {
        describe: 'Title',
        demandOption: true,
        type: 'string'
    },
    handler: (argv) => {
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List Notes',

    handler: (argv) => {
        notes.listNotes();
    }
});

yargs.command({
    command: "read",
    describe: "Reading notes",
    // builder: {
        title: {
            describe: "Title",
            demandOption: true,
            type: "string"
        },
    // },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
})


yargs.parse();

// console.log(yargs.argv);


