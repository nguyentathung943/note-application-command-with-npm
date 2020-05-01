const notes = require('./node.js');
const chalk= require('chalk');
const yargs=require('yargs') 



const command = process.argv[2];

console.log(process.argv);
//add

yargs.command({
    command: 'add',
    describe: 'Add a new node',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true, //must have title 
            type: 'string' // title require
        }, 
        body:{
            describe:'Node body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a node',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//list
yargs.command({
    command: 'listNotes',
    describe: 'List your nodes',
    handler(){
        notes.listNotes()
    }
})
//read
yargs.command({
    command: 'read',
    describe: 'Read a node!',
    builder:{
        title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse();
//console.log(yargs.argv);