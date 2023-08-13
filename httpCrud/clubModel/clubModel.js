//import the database
const clubBD = require("../clubDB/clubDB.json")
const {v4: uuidv4} = require('uuid')
const fs = require('fs');
const { error } = require("console");
// const { resolve } = require("path");

//read database

const readAll = () => {
    return new Promise ( (resolve, reject) => {
        resolve(clubBD)
    })
}

const readOne = (id) => {
        return new Promise ( ( resolve, reject) => {
        const club = clubBD.find( (item) => item.id === id)
        resolve(club);
    })
}
// console.log(readOne())

//create a new club
const newClub = (newlyCreatedClub) => {
    return new Promise( (resolve, reject) => {
        //create a new club  wit auto-generated id
        const newClub = {id: uuidv4(), ...newlyCreatedClub};

        //save the new created club in the database
        clubBD.push(newClub);
        //write to the existing file (clubDB.json)
        fs.writeFileSync('./clubDB/clubDB.json', JSON.stringify(clubBD), 'utf8');
        if (error) {
            console.log(error)
        }else{
            console.log("club created sucessfully.");
        }
        resolve(newClub)
    });
}

//update an existing club model
const updateClub = (id, updatedExistingClub) => {
    return new Promise( (resolve, reject) => {
        clubBD[clubIndex] = {id, ...updatedExistingClub};
        clubBD.push( clubBD[clubIndex] );
        fs.writeFileSync('./clubDB/clubDB.json', JSON.stringify(clubBD), 'utf8', (error) => {
            if (error){
                console.log(error);
            }else{
                console.log("club created sucessful")
            }
        })
        resolve( clubBD[clubIndex]);
    })
}

module.exports = {
    readAll,
    readOne,
    newClub,
    updateClub
}