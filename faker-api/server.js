const express = require('express')
const faker = require("faker");
const app = express();
const port = 8000;


const createUser = ()=>({
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
    })


const createCompany = () =>({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address:{
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country()
    }
})

    
app.get("/api/users", (req,res)=>{
    const users = createUser();
    res.json(users);
})

app.get("/api/companies", (req,res)=>{
    const companies = createCompany();
    res.json(companies);
})

app.get("/api/user/company",(req,res)=>{
    const users = createUser();
    const companies = createCompany();
    const userOBJ={
        user: users,
        company: companies
    }
    res.json(userOBJ)
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );