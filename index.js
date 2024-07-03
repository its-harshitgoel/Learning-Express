const express = require('express');
const app = express(); //give object of express module

//create a get call
let courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

//callback, resolved when we get a request from the client 
app.get('/courses', (req, res)=>{
    res.json(courses);
})

//why just the file just run and do nothing because we need to listen to the port 
//port is the endpoint where the client can connect to the server


app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})
//Cannot GET / because we have not defined the route for the root of the application