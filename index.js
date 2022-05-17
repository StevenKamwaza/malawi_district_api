const express = require('express');
 // validation
const Joi = require('joi');
const app = express();

app.use(express.json());
 
const districts = [
    {
        id : 1,
        name: 'Balaka',
        code: 'BA',
        region:'Southern',
        area : 2193,
    
    },
    {
        id: 2,
        name: 'Blantrye',
        code: 'BL',
        region:'Southern',
        area : 2012,
    },
]
 
/** Request Handlers */
app.get('/', (req, res) => {
    res.send('Malawi District Api /n developed by chesteve');
});
 
//get request 
app.get('/api/districts', (req,res)=> {
    res.send(districts);
});
 
app.get('/api/districts/:id', (req, res) => {
    const district = districts.find(item => item.id === parseInt(req.params.id));
 
    if (!district) res.status(404).send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'
        );
    res.send(district);
});
 
//CREATE Request 
app.post('/api/districts', (req, res)=> {
 /* Destructuring the object returned from the function `validateDistrict` and assigning it to a variable
 `error`. */
 
    const { error } = validateDistrict(req.body);
    if (error){
        res.status(400).send(error.details[0].message)
        return;
    }
    const district = {
        id: districts.length + 1,
        name: req.body.name,
        code: req.body.code,
        region: req.body.region,
        area: req.body.area,
    };
    districts.push(district);
    res.send(district);
});
 
//UPDATE Request 
app.put('/api/districts/:id', (req, res) => {
    const district = districts.find(item=> item.id === parseInt(req.params.id));
    if (!district) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
    
    const { error } = validateDistrict(req.body);
    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }
    
    district.name = req.body.name;
    res.send(district);
});
 
//DELETE Request 
app.delete('/api/districts/:id', (req, res) => {
 
    const district = districts.find( item=> item.id === parseInt(req.params.id));
    if(!district) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
    
    const index = districts.indexOf(district);
    districts.splice(index,1);
    
    res.send(district);
});
 
function validateDistrict(district) {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        code: Joi.string().min(2).required(),
        region: Joi.string().min(2).required(),
        area: Joi.number().required()
    });
    return schema.validate(district);
    
}
 
//PORT ENVIRONMENT SETUP
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port... ${port}..`));