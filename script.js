let Data = "secret college data"

class User {
    constructor(name, email){
        this.name= name;
        this.email = email;
    }

    viewData(){
        console.log(Data);
    }
};

//Q2

class Admin extends User{
    constructor(name, email){
        super(name, email)
    }
    editData(){
        Data = "new data value"
    }
}

let admin1 = new Admin("admin", "admin@mail.com")

let student1 = new User("Aman", "aman@mail.com");
let student2 = new User("Raj", "raj@mail.com");
let student3 = new User("Adi", "adi@mail.com");

