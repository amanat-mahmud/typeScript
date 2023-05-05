//blocking type -> type guard

//keyof guard
type Alphanumeric = string | number;
// keyof guard
function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 == "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add("1", "2");
add(1, 2);

//in guard
type NormalUserType = {
    name: string;
  };
  
  type AdminUserType = {
    name: string;
    role: "admin";
  };
  
  function getUser(user: NormalUserType | AdminUserType): string {
    if ("role" in user) {
      return `I am an admin and my role is ${user.role}`;
    } else {
      return `I am a normal user`;
    }
  }
  
  const normalUser1: NormalUserType = { name: "Mr.X" };
  const adminUser1: AdminUserType = { name: "Mr.Y", role: "admin" };
  
  console.log(getUser(normalUser1));
  console.log(getUser(adminUser1));

// instance of guard
class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(" I am barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow() {
    console.log("I am Meowing");
  }
}
//here didn't return bool so that TS can understand animal is instance of dog or not 
function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
//if(animal instanceof Dog)
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German", "dog"); // instance -> Dog
const animal2 = new Cat("Persian", "cat"); // instance -> Cat

getAnimal(animal2);
