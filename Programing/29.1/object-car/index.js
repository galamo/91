const car = {
  lp: "741514512",
  km: 0,
  year: 2022,
  numOfWheels: 4,
  numOfDoors: 5,
  is4X4: true,
  hp: 190,
  model: {
    manufacturer: "skoda",
    subModel: "kodiaq",
    finish: "l&k",
  },
  features: ["multimedia", "carplayAccess", "remoteKey"],
  sunRoof: true,

  startEngine: function () {
    console.log("The car is On", this.lp);
  },

  drive: function (addKm) {
    // this is keyword which refers to the code that running it
    this.km = this.km + addKm;
    console.log("The car is driving", addKm);
  },
  horn: function () {
    console.log("Bippppp");
  },
};

car.features.push("matrixLight");
car.gear = "automatic";
car.startEngine();
car.drive(20);
car.drive(30);
car.drive(1500);
