class  Student{
    constructor(public name:string,public id:string,public semester:number){}
    public printInfo(){
        console.log(`${this.name}. ID - ${this.id}. Semester - ${this.semester}`)
    }
}
const amanat = new Student('Amanat',"C201055",6);
amanat.printInfo()