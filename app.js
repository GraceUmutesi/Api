const express=require('express');

// Set up the express app
const app = express();


app.use(express.json())
const userData=
[{
    name:'Grace Umutesi',
    email:'tesi@gmail.com',
    pass:'2324444'
},
{
    name:'Bisa Jelka',
    email:'jelka@gmail.com',
    pass:'3445532'
},
{
    name:'Bisa Toni',
    email:'toni@gmail.com',
    pass:'6654445'
}];
// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
   userData
  })
});












//
app.post('/api/v1/todos', (req, res) => {
    res.send(req.body)
  });



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});