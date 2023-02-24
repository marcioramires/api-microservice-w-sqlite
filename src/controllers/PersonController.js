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
      const { name, price, description, category } = request.body;
      const id = request.params.id;
      const person = await Person.findOne({ where: { id } });

      if (!person) {
        return response.status(400).json("Product not found");
      }
      person.name = name;
      person.price = price;
      person.description = description;
      person.category = category;

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