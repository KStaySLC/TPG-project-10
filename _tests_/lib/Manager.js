class Manager extends Employee{
    constructor(name, id, email, offceNumber)
    {
        super(name, id, email);
        this.offceNumber = officeNumber;
    }
    get officeNumber(){
        return this.officeNumber;
    }
    get role(){
        return 'Manager';
    }
}