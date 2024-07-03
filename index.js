const express = require('express');
const app = express(); //give object of express module

app.use(express.json());

// Sample data
let courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

// Get all courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// Get a course by ID
app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(course => course.id === id);

    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
});


// Add a new course
app.post('/courses', (req, res) => {
    console.log(req.body);
    let singleCourse = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(singleCourse);
    res.json(singleCourse);
});

// Update a course
app.put('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.id === id);

    if (courseIndex === -1) {
        return res.status(404).json({ message: 'Course not found' });
    }

    courses[courseIndex].name = req.body.name;
    res.json(courses[courseIndex]);
});

app.delete('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.id === id);

    if (courseIndex === -1) {
        return res.status(404).json({ message: 'Course not found' });
    }

    const deletedCourse = courses.splice(courseIndex, 1);
    res.json(deletedCourse);
});


// Listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
