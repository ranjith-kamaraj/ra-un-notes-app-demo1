const fs = require("fs");

// const movie = {
//     title: 'Doctor',
//     director: 'Nelson'
// };

//Converting the object into json (string format)
// const movieJSON = JSON.stringify(movie);
// console.log(movieJSON);
// console.log(movieJSON.title);
// fs.writeFileSync('1-json.json', movieJSON);


// //Converting the json into object format
// const parsedData = JSON.parse(movieJSON);
// console.log(parsedData);
// console.log(parsedData.title);


//Reading the file
//Data will come in the buffer format, needs to convert into string format and parse it (to get the object)
const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
let finalData = JSON.parse(dataJSON);
console.log(finalData, finalData.title);

finalData.title = "Remo";
finalData.director = "Arun Raja";

const finalJSON = JSON.stringify(finalData);
fs.writeFileSync("1-json.json", finalJSON);



