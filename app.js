const express = require('express');
const app = express();

let { people } = require('./data');

const PORT = 6969;

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/api/people', (req, res) => {
    let jsonToReturn = {
        success: true,
        data: people
    }
    res.status(200).json(jsonToReturn);
});

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (name) { } else {
        return res.status(400).json({
            success: false,
            msg: "Please provide the name value."
        });
    }
    res.status(201).json({
        success: true,
        person: name
    });
});

app.put('/api/people/:guid', (req, res) => {
    const { guid } = req.params;
    const { name } = req.body;
    
    if (!people.find((person) => {person.id === Number(id);})) {
        return res.status(400).json({
            success: false,
            msg: `no person with id "${guid}" found.`
        });
    }
    
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person;
    });

    res.status(200).json({
        success: true,
        data: newPeople
    });
});

app.listen(PORT, () => {

});