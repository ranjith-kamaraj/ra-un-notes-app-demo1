const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>{
    return "Your Notes!"
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(chalk.greenBright("Your note: " + element.title))
    });
};

const readNotes = (title) => {
    const notes = loadNotes();
    const validNote = notes.find(ele => ele.title === title);

    if(validNote){
        console.log(chalk.greenBright("Note:  " + JSON.stringify(validNote)));
    }
    else{
        console.log(chalk.red("Note not found for: " + title));
    }
};

const addNotes = (title, body) => {
    const notes = loadNotes();

    debugger;
    //Will iterate all records
    // const duplicateNotes = notes.filter((note) => { return note.title === title });

    // if (duplicateNotes.length === 0) {
    //     notes.push({
    //         title,
    //         body
    //     });

    //     saveNotes(notes);
    //     console.log('New note added with: ' + title);
    // }
    // else {
    //     console.log('Already note taken for: ' + title);
    // }

    //Will stop once find the first record with given criteria. Default it will return as undefined
    const duplicateNote = notes.find((note) => { return note.title === title });
    if (!duplicateNote) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        console.log('New note added with: ' + title);
    }
    else {
        console.log('Already note taken for: ' + title);
    }
};

const removeNotes = (title) => {
    const notes = loadNotes();
    const finalNotes = notes.filter((note) => { return note.title !== title });

    if(notes.length > finalNotes.length){
        saveNotes(finalNotes);
        console.log(chalk.green('Note removed successfully!'));
    }
    else{
        console.log(chalk.red('No note found!'));
    }
};

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}


module.exports = {
    getNotes,
    readNotes,
    addNotes,
    removeNotes,
    listNotes
};