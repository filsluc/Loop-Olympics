// Silver medal -----------------------------------------------
console.log("Silver Medal")

const peopleArray = [
    {
      name: "Tom Brady",
      occupation: "NFL Player"
    },
    {
      name: "Drake",
      occupation: "Rapper"
    },
    {
      name: "Jim Carrey",
      occupation: "Comedian"
    },
    {
      name: "Steve Harvey",
      occupation: "Entertainer"
    }
  ]

  // For loop to print out the names of people in the peopleArray
  for (var i = 0; i < peopleArray.length; i++){
   console.log(peopleArray[i].name)
}

// for loop that pushes names into names array and occupations into occupations array
let names = []
let occupations = []

for (var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
 }

console.log(names);
console.log(occupations);

let everyOtherName = []
let everyOtherOccupation = []

for (var i = 0; i < peopleArray.length; i++){
    if(i % 2 == 0){
        everyOtherName.push(peopleArray[i].name)
    }
    if(i % 2 != 0){
        everyOtherOccupation.push(peopleArray[i].occupation)
    }
 }

 console.log(everyOtherName)
 console.log(everyOtherOccupation)