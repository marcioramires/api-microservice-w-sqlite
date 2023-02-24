const Person = require("../models/Person.js");

module.exports = {
  async all(request, response) {
    try {
      const persons = await Person.findAll();
      response.status(200).json(persons);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      await Person.create(request.body);
      response.status(200).json("person created");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async one(request, response) {
    try {
      const id = request.params.id;
      const person = await Person.findOne({ where: { id } });
      if (!person) {
        return response.status(400).json("Person not found");
      }
      response.status(200).json(person);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { 
        gender, 
        nameSet, 
        title, 
        giveName,
        middleInitial,
        surname,
        streetAddress,
        city,
        state,
        stateFull,
        username,
        birthday,
        browserUserAgent,
        kilograms,
        centimeters,
        latitude,
        longitude,
        bloodType,
        vehicle,
        domain,
        occupation
      } = request.body;
      const id = request.params.id;
      const person = await Person.findOne({ where: { id } });

      if (!person) {
        return response.status(400).json("Product not found");
      }
      person.gender = gender;
      person.nameSet = nameSet;
      person.title = title;
      person.giveName = giveName;
      person.middleInitial = middleInitial;
      person.surname = surname;
      person.streetAddress = streetAddress;
      person.city = city;
      person.state = state;
      person.stateFull = stateFull;
      person.username = username;
      person.birthday = birthday;
      person.browserUserAgent = browserUserAgent;
      person.kilograms = kilograms;
      person.centimeters = centimeters;
      person.latitude = latitude;
      person.longitude = longitude;
      person.bloodType = bloodType;
      person.vehicle = vehicle;
      person.domain = domain;
      person.occupation = occupation;

      await person.save();
      response.status(200).json("person uptated");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async delete(request,response){
    try {
      const id = request.params.id;
      const person = await Person.destroy({ where: { id } });
      if (!person) {
        return response.status(400).json("Person not found");
      }
      response.status(200).json("person removed");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  }
};