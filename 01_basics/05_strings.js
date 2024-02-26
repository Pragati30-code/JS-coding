const name = "khushi"
const repoCount = 60

//console.log(name + repoCount + "value"); //don't use this type of string making

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //use this for string making


const gameName = new String('Pragati-pp')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase()); //it will not change the original value

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-9,4)
//console.log(anotherString);

const newStringOne = "    pragati     "
//console.log(newStringOne);
//console.log(newStringOne.trim());

console.log(gameName.split('-'));

