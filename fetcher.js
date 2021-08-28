const userInput = process.argv.slice(2);
const request = require('request');
const fs=require('fs')

request(userInput[0],(error,response,body)=>{
  fs.writeFile(userInput[1],response+'above response, below body \n'+body,function(err){
    if (err) throw err;
    console.log(`Downloaded and saved to ${userInput[1]}`)
  })
})

console.log(userInput)