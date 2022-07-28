const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');

router.get('/animals', (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/animals/:id', (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/animals', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = animals.length.toString();

  if (!validateAnimal(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
  } else {
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }
});

module.exports = router;




[{"title":"Dentist appointment","text":"Go to the dentist for teeth cleaning","id":"9e888242-97cd-4d25-9262-22a139c50fe0"},{"title":"Grocery shopping","text":"Buy fruits, eggs, bread, granola bars and wine.\n","id":"bed3f993-8c7b-4a99-9f7c-110d9cc74642"},{"title":"Run 6 miles","text":"Make up this week run.","id":"4d89e357-c247-4375-8b4e-9ad073dbc1e3"},{"title":"Finish homework","text":"Finish lesson 11 homework","id":"098c36e2-a391-4fef-a94c-e478bc5207fb"},{"title":"Cancel park reservation","text":"Can't go tomorrow, so don't forget to cancel the reservation.","id":"656de8eb-f03e-49b0-bee6-8496766892f0"},{"title":"Finish reading","text":"Finish reading book \"Breath Again\"","id":"7524210d-aff9-41dc-83fa-906f251adee3"}]
