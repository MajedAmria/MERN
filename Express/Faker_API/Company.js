class Company{

    constructor(nameCompany,address){
        this._id=Company.instances;
        this.nameCompany=nameCompany;
        this.address=address;
        Company.instances++;
    }
    static instances = 0;
}
module.exports=Company;