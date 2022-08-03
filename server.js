const { json, request } = require('express');
const express = require('express')
const faker = require('faker')
const app = express() //Save the instance of express() to a const
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

class User {
    constructor() {
        this._id = faker.unique(faker.random.number)
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};


class Company {
    constructor() {
        this._id = faker.unique(faker.random.number)
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (requestObj, responseObj) => {
    const newUser = new User();
    responseObj.json(newUser)
    responseObj.send("sending api")
})

app.get("/api/companies/new", (requestObj, responseObj) => {
    const newCompany = new Company();
    responseObj.json(newCompany)
    responseObj.send("api sending")
})

app.get("/api/user/company", (requestObj, responseObj) => {
    const newUser = new User();
    const newCompany = new Company();
    responseObj.json({ newCompany: newCompany, newUser: newUser })
    responseObj.send("sending api")
})






// ALWAYA AT THE END OF THE FILE
app.listen(port, () => console.log(`server started on port ${port} and is listening for REQuest to RESponed to`))