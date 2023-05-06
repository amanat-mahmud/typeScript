interface IPerson {
  name: string;
  age: number;
  email: string;
}

const findPerson = (persons:IPerson[],key:string): IPerson | null => {
    const found = persons.find(person=>{
        return person.email === key
    })
    if(found){
        return found;
    }
    else
        return null;
};

const Persons: IPerson[] = [
  {
    name: "Amanat",
    age: 20,
    email: "amanat@gmail.com",
  },
  {
    name: "Ullah",
    age: 22,
    email: "ullah@gmail.com",
  },
  {
    name: "Mahmud",
    age: 23,
    email: "mahmud@gmail.com",
  },
];

console.log(findPerson(Persons,"mahmud@gmail.com"))