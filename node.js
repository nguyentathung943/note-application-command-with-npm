const fs = require('fs')
const chalk= require('chalk');



////////////Add
const addNote =(title,body)=>{
    const notes=loadNotes() // read from file
    const duplicateNotes = notes.filter((note) => note.title===title) //file same title
    const duplicateNote =notes.find((note)=>note.title===title)

    debugger
    if(!duplicateNote) // check title
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes) //save the note to file
        console.log(chalk.inverse.green('New note added!'))
    }
    else{
        console.log(chalk.inverse.red('Note title taken!'))
    }
}
/////////////Remove
const removeNote=(title)=>{
    const notes = loadNotes() //read from file
    const notetokeep = notes.filter((note)=> note.title!==title) // find all note to keep

    if(notetokeep.length===notes.length)
    {
        console.log(chalk.inverse.red('Title not found!'))
    }
    else
    {
        saveNotes(notetokeep)
        console.log(chalk.inverse.green('Note deleted!'))
    }
}
//////List
const listNotes=()=>
{
    const notes=loadNotes()
    console.log(chalk.inverse('Your notes title: '))
    notes.forEach(note => {
        console.log(note.title)
    });
}
/////Read a note
const readNotes=(title)=>
{
    const notes=loadNotes()
    const readnote = notes.find((note)=> note.title===title) //find by title
    if(!readnote)
    {
    
        console.log(chalk.inverse.red('Notes not found!'))
    }
    else
    {
        console.log(chalk.inverse(readnote.title))
        console.log(readnote.body)
    }
}





const saveNotes =(notes)=>{
    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =()=>{   //load an array
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return[]
    }
}

module.exports={
    addNote: addNote,
    removeNote: removeNote, 
    listNotes: listNotes,
    readNotes: readNotes,
}