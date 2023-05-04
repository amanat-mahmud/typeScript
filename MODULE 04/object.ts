class  Student1{
    constructor(public name:string,public id:string,public semester:number){}
    public printInfo(){
        console.log(`${this.name}. ID - ${this.id}. Semester - ${this.semester}`)
    }
}
const amanat55 = new Student1('Amanat',"C201055",6);
amanat55.printInfo();