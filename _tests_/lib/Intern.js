class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    get school(){
        return this.school;
    }
    get role(){
        return 'Intern';
    }

}