//----------Classes----------
//Parent
class Vehicle {
  constructor(data) {
    this.wheels = data.wheels;
    this.doors = data.doors;
    this.color = data.color;
  }

  descriptionMethod() {
    return `This vehicle has ${this.wheels} wheels, ${this.doors} doors, and a nice ${this.color} color!`;
  }
}

//Child 1
class Car extends Vehicle {
  constructor(carData) {
    super(carData);
    this.topSpeed = carData.topSpeed;
  }
  getTopSpeed() {
    return `This car has a top speed of ${this.topSpeed}, its quite fast.`;
  }
}

//Child 2
class Truck extends Vehicle {
  constructor(truckData) {
    super(truckData);
    this.maxLoadWeight = truckData.maxLoadWeight;
  }
  getMaxLoadWeight() {
    return `This truck have a legal maxload of ${this.maxLoadWeight}`;
  }
}

// Vehicle Factory will create Vehicles of different types
class VehicleFactory {
  constructor(type) {
    this.type = type;
  }
  create(data) {
    switch (this.type) {
      case "Car":
        return new Car(data);
      case "Truck":
        return new Truck(data);
    }
  }
}

//----------Car Implementation----------

//Create JSON string object from schema
const json_car = '{"wheels":"4","doors":"4","color":"white"}';

//Convert JSON object to JS Object
const js_car = JSON.parse(json_car);

//Add topSpeed to the JS Obj
js_car.topSpeed = "200 km/t";

//Create CarFactory and a Car
const carFactory = new VehicleFactory("Car");
const aNewCar = carFactory.create(js_car);

console.log("TASK 6.1: MY CAR FACTORY:");
console.log("TASK 6.1: " + aNewCar.descriptionMethod());
console.log("TASK 6.1: " + aNewCar.getTopSpeed());

//----------Truck Implementation----------

// //Create JSON string object from schema
const json_truck = '{"wheels":"18","doors":"2","color":"yellow"}'; ///////////////////

// //Convert JSON object to JS Object
const js_truck = JSON.parse(json_truck); 

// //Add maxLoadWeight to the JS Obj
js_truck.maxLoadWeight = "5000 kg's";

// //Create TruckFactory and a Truck
const truckFactory = new VehicleFactory("Truck");
const aNewTruck = truckFactory.create(js_truck);

console.log("TASK 6.2: MY TRUCK FACTORY:");
console.log("TASK 6.2: " + aNewTruck.descriptionMethod());
console.log("TASK 6.2: " + aNewTruck.getMaxLoadWeight());
