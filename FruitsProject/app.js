
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDb", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please fill this."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const mango = new Fruit({
    name: "Mango",
    rating: 10,
    review: "Best Fruit"
});
//
// mango.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = new mongoose.model("Person", personSchema);

// Person.deleteMany({name: "John"}, function(err){
//     if(err){
//       console.log(err);
//     }else {
//       console.log("Deleted Successfully.");
//     }
// });

const person = new Person({
    name: "John",
    age: 49
});
//
// person.save();

Person.updateOne({name: "John"},{favouriteFruit: mango}, function(err){
    if(err){
      console.log(err);
    }
    else {
      console.log("Successfully Udated");
    }
});

const orange = new Fruit({
    name: "Orange",
    rating: 9,
    review: "Awesome!"
});

const watmelon = new Fruit({
    name: "Watermelon",
    rating: 9,
    review: "Best Fruit"
});

// Fruit.insertMany([orange, watmelon], function(err){
//     if(err){
//       console.log(err);
//     }
//     else {
//       console.log("Successfully save all fruits to fruitsDb.");
//     }
// });

Fruit.find(function(err, fruits){
    if(err)
    {
      console.log(err);
    }
    else {
      mongoose.connection.close();
      // fruits.forEach(function(fruit){
      //   console.log(fruit.name);
      // });
    }
});
