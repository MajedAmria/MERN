 class User{

    constructor(firstName,lastName,password,phoneNumber,email){
        this._id=User.instances;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.phoneNumber=phoneNumber;
        this.email=email;
        User.instances++;
        
    }
    static instances = 0;
}

module.exports= User;