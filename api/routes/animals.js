const express = require('express');
const router = express.Router();

const pets = [
  {
  "name": "PNut",
  "age": 3,
  },

  {
  "name": "Bashi",
  "age": 5,
  },

  {
  "name": "Bruno",
  "age": 1,
  },

  {
  "name": "Tiger",
  "age": 7,
  },

  {
  "name": "max",
  "age": 2,
  },
  ]
  
exports.pets = async (req, res) => {
    try { 
      if (req.query.sort == "ASC") {
        pets.sort((a, b) => a.age - b.age);
      } else
      if (req.query.sort == "DESC") {
        pets.sort((a, b) => b.age - a.age);
      }
      res.status(200).json({
          pets
        })
      }
     catch (error) {
      console.log(error)
    }
  }

  