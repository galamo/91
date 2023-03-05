
const aircraft = { type: "f22", speed: "2000km/h" , color: "black", pilot: "Tomer F" }
const aircraft2 = aircraft;
const aircraft3 = aircraft;

// aircraft ==>>  { type: "f22", speed: "2000km/h" , color: "black", pilot: "Tomer F" }
// aircraft2 ==>>  { type: "f22", speed: "2000km/h" , color: "black", pilot: "Tomer F" }
// aircraft3 ==>>  { type: "f22", speed: "2000km/h" , color: "black", pilot: "Tomer F" }
 
aircraft.type = "f16"
// aircraft2 ===> { type: "f16", speed: "2000km/h" , color: "black", pilot: "Tomer F" }
// aircraft3 ===> { type: "f16", speed: "2000km/h" , color: "black", pilot: "Tomer F" }
console.log(aircraft2,aircraft3)

function changeColor(ac){
    ac.color = "yellow"
}

changeColor(aircraft2)

let color = "black"
let color2 = color;
color2 = "white"
function changeColor2(c){
    c = "white"
}
changeColor2(color)
console.log(color)



let isTomerFullStack = false;
function iWantToBeFullStack(fs){
    console.log(fs)
    fs  = true;
    console.log(fs)
}
iWantToBeFullStack(isTomerFullStack)
console.log(isTomerFullStack)



let isTomerFullStackObj = { wannaBe: true, actual: false }
function iWantToBeFullStackObj(fs){
    console.log(fs)
    fs.actual  = true;
    console.log(fs)
}
iWantToBeFullStackObj(isTomerFullStackObj)
console.log(isTomerFullStackObj)



let isTomerFullStackObjCopy = { wannaBe: true, actual: false } //=>>aaaXXX1020298043
function iWantToBeFullStackObjCopy(fs){
    console.log(fs)
    fs.actual  = true;
    console.log(fs)
}
iWantToBeFullStackObjCopy({...isTomerFullStackObjCopy}) //=>>aaaXXX1020298049
console.log(isTomerFullStackObjCopy)







