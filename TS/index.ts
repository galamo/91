function getUser(userId:string):number{
    return 1;
}

const user : string = "rafiGarden@gmail.com"
const age: number = 34
const isfemale:boolean = true;

interface ICar {
    lp: string | number,
    color: "RED" | "BLUE",
    manufacturer: string,
    year: string,
    owner?:string
}


const car: ICar = { lp: "12345", color:"BLUE", manufacturer: "blbla", year: "2022", owner:"Lea Balet" }

console.log(car.color)