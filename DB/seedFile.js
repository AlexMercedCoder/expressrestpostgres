//////////////////////////////////
// Seed Data
/////////////////////////////////

//Import your model
const Rat = require("../models/ratModel");

//import data to seed
const NewRat = { name: "Test Rat", age: 3 };

//Put your seed login in the seed function!

const seed = async () => {
  try {
    await Rat.create(NewRat);
    console.log(await Rat.all());
  } catch (err) {
    console.error(err);
  }
};

seed();
