

const express = require("express");
const faker = require("faker");
const User =require("./User");
const Company =require("./Company");
const Address =require("./Address");
const app = express();
const port = 8000;


const createUsers=()=>{
   const user= new User(faker.name.firstName(),faker.name.lastName(),faker.internet.password(),faker.phone.phoneNumber(),faker.internet.email());
    return user;
}
const createAddress=()=>{
    const address= new Address(faker.address.streetName(),faker.address.city(),faker.address.state(),faker.address.zipCode(),faker.address.country());
    return address;
}
const createCompanies=()=>{
    const company= new Company(faker.company.companyName(),createAddress());
     return company;
 }
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



app.get("/api/users/new", (req, res) => {
    res.json(createUsers());
});
app.get("/api/companies/new", (req, res) => {
    res.json(createCompanies());
});
app.get("/api/user/company", (req, res) => {
    res.json({company:createCompanies(),
             user:createUsers()});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );