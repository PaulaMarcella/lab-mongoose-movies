const mongoose = require('mongoose')
const Celebrity = require('./../models/celebrity');

mongoose
  .connect('mongodb://localhost/seed', {useNewUrlParser: true})
  .then(x => {
    console.log("Data added successfully")
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


 const array = [
        {name: 'Beyonce', occupation: 'Singer', catchPhrase: 'bla bla beyonce' },
        {name: 'Frank Sinatra', occupation: 'Actor', catchPhrase: 'moon river' },
        {name: 'Ai Wei Wei', occupation: 'Artist', catchPhrase: 'no no no' }
        ];

Celebrity.create(array)
    .then(()=>{
        console.log('Feedback Here')
    })
    .catch(error=>{
        console.log('tehre was an error with an array');
    })



/*create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
Call the Celebrity model's create method with the array as argument.
In the create method's callback, display feedback.
Run the seed file with node to seed your database.
Check the database with the mongo command to confirm that your data was saved.
*/