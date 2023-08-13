// import the club model
// const clubModel = require("../clubModel/clubModel")
const {readAll, readOne, newClub, updateClub,} = require("../clubModel/clubModel")

//business logic to get all clubs

const getAllClub = async (req, res) => {
    try{
        const clubs = await readAll();
        if( clubs.length === 0){
            res.writeHead(200, { "content-Type" : "application/json"})
            res.end("There is no registered club")
        } else{
            res.writeHead(200, {"content-Type" : "application/json"} );
            res.end(`List of ELP club: \n ${JSON.stringify(clubs)} \n total number of clubs: ${clubs.length} `);
        }  
    }
    catch(e){
        res.writeHead(404, {"content-Type" : "application/json"} );
        res.end(e.message)
    }
}

const getOneClub = async (req, res, id) => {
    try{
        const club = await readOne(id);
   
        if(!club) {
            res.writeHead(404, {"content-Type": "application/json"})
            res.end(`club with id: ${id} does not exist.`)
        }else{
            res.writeHead(200, {"content-Type": "application/json"})
            res.end(JSON.stringify(club));  
            
        }
    } catch (e) {
        res.writeHead(200, {"content-Type": "application/json"})
        res.end(e.message)
    }
}

//business logic  to create new club
const createNewClub = async (req, res) => {
    try {
        let body = " "
       req.on('data', (chunk) => {
         body += chunk.toString()
       }
       )
        req.on( 'end', async () => {
            const { competition, clubName, manager, teamNumber, jersyColor, stadium, nickName } = JSON.parse(body);

            const newData = {
                competition,
                 clubName,
                  manager, 
                  teamNumber, 
                  jersyColor, 
                  stadium,
                   nickName,
            }

            const oneNewClub = await newClub( newData);
            console.log(oneNewClub)
              if ( !oneNewClub ) {
                res.writeHead (400, {"content-Type" : "application/json"});
                res.end("Error trying to new club");
              }else{
                res.writeHead (201, {"content-Type" : "application/json"});
                res.end(JSON.stringify(oneNewClub));
              }
        })
    } catch (error) {
      console.error(error);
    }
}
// console.log(createNewClub())

//update a new club
const updateAnExistingClub = async(req, res, id) => {
    try {
        const club = await readOne(id);
        console.log(club)
        if(!club){
            res.writeHead (400, {"content-Type" : "application/json"})
            res.end(`club with id: ${id} does not exist`)  
        }else{
            let body = ""
            req.on('data', (chunk) => {
                body += chunk.toString();
            })
            req.on( 'end', async () => {
                const {competition, clubName, manager, teamNumber, jersyColor, stadium, nickName, } = JSON.parse(body);
                const newData = {
                    competition: competition || club.competition,
                    clubName: clubName || club.clubName,
                    manager: manager || club.manager,
                    jersyColor: jersyColor || club.jersyColor,
                    stadium: stadium || club.stadium,
                    teamNumber: teamNumber || club.teamNumber,
                    nickName: nickName || club.nickName,
                }

                const updatedClub = await updateClub (id, newData);
                if( !updatedClub) {
                    res.writeHead (400, {"content-Type" : "application/json"})
                    res.end("Error trying to new club")
                }else{
                    res.writeHead (400, {"content-Type" : "application/json"})
                    res.end(JSON.stringify(updatedClub))  
                }
            })
        }
    } catch (error) {
        res.writeHead (400, {"content-Type" : "application/json"})
        res.end(e.message)
    }
}

module.exports = {
    getAllClub,
    getOneClub,
    createNewClub,
    updateAnExistingClub,
}