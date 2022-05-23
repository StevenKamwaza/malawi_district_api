const express = require('express');
 // validation
const Joi = require('joi');
const app = express();

app.use(express.json());
 
const districts = {
    "global" :{
        name : "Malawi",
        countryCode: "MW",
        fullName:"The Republic of Malawi",
        oldName:"Nyasalanda",
        nickName:"The Warm Heart of Africa",
        location: "Southeastern Africa",
        borderedCountries: ["Zambia","Tanzania","Mozambique"],
        area:118484,
        coordinates:{
            lat:  -15.786111,
            long: 35.005833
        },
        cities: ["Lilongwe", "Mzuzu", "Blantyre","Zomba"],
        ethnicGroups:[
            {
                id: 1,
                name: "Chewa",
                languanges: "Chichewa",
            },
            {
                id: 2,
                name: "Tumbuka",
                languanges:"Chitumbuka",

            },
            {
                id: 3,
                name: "Yao",
                languanges: "Chiyao",
            },
            {
                id: 4,
                name: "Lomwe",
                languanges:"Malawian Lomwe"
            },
            {
                id: 5,
                name: "Sena",
                languanges:"Malawian Sena"
            },
            {
                id: 6,
                name: "Tonga",
                languanges: "Tonga",
            },
            {
                id: 7,
                name: "Ngoni",
                languanges: "Chizulu",
            }
            ,
            {
                id: 8,
                name: "Ngonde",
                languanges: "Nyakyusa-Mgonde",
            }
        ],
        languanges: ["Chichewa","Chinyanja","Chiyao","Chitumbuka","Lomwe","Kokola","Lambya","Ndali","Nyakyusa-Ngonde","Sena","Tonga"]
    },  
    "towns": [
        {
            id : 1,
            name: 'Balaka',
            code: 'BA',
            region:'Southern',
            area : 2193,
            city :false
        },
        {
            id: 2,
            name: 'Blantrye',
            code: 'BL',
            city: true,
            cityType: 'Economic',
            region:'Southern',
            area : 2012,
        },

        {
            id :3,
            name : "Chikwawa",
            code : "CK",
            region: "Southern",
            area : 4755
        },
        {
            id :4,
            name : "Chiradzulu",
            code : "CK",
            region: "Southern",
            area : 767
        },
        {
            id :5,
            name : "Chitipa",
            code : "CT",
            region: "Northern",
            area : 4288
        },
        {
            id :6,
            name : "Dedza",
            code : "DE",
            region: "Central",
            area : 2624
        },
        {
            id :7,
            name : "Dowa",
            code : "DO",
            region: "Central",
            area : 3041,
            town :["Dowa", "Mponela"]
        },
        {
            id :8,
            name : "Karonga",
            code : "KR",
            region: "Northern",
            area : 3355
        },
        {
            id :9,
            name : "Kasungu",
            code : "KS",
            region: "Central",
            area : 7878
        },
        {
            id :10,
            name : "Likoma",
            code : "LK",
            region: "Southern",
            area : 20,
            town : ["Likoma", "Mbamba"]
        },
        {
            id :11,
            name : "Lilongwe",
            code : "LK",
            region: "Central",
            cityType: "Capital City",
            area : 6159,
            
        },
        {
            id :12,
            name : "Machinga",
            code : "MH",
            region: "Southern",
            area : 3771
        },
        {
            id :13,
            name : "Mangochi",
            code : "MG",
            region: "Southern",
            area : 6273
        },
        {
            id :14,
            name : "Mchinji",
            code : "MC",
            region: "Central",
            area : 3356
        },
        {
            id :15,
            name : "Mulanje",
            code : "MU",
            region: "Southern",
            area : 2056
        },
        {
            id :16,
            name : "Mwanza",
            code : "MW",
            region: "Southern",
            area : 2259
        },
        {
            id :17,
            name : "Mzimba",
            code : "MZ",
            region: "Northern",
            area : 10430
        },
        {
            id :18,
            name : "Neno",
            code : "NE",
            region: "Southern",
            area : 1469
        },
        {
            id :19,
            name : "Nkhata Bay",
            code : "NB",
            region: "Northern",
            area : 4071
        },
        {
            id :20,
            name : "Nkhotakota",
            code : "NK",
            region: "Central",
            area : 4259
        },
        {
            id :21,
            name : "Nsanje",
            code : "NS",
            region: "Southern",
            area : 1942
        },
        {
            id :22,
            name : "Ntcheu",
            code : "NU",
            region: "Central",
            area : 3771
        },
        {
            id :23,
            name : "Ntchisi",
            code : "NI",
            region: "Central",
            area : 1655
        },
        {
            id :24,
            name : "Phalombe",
            code : "PH",
            region: "Southern",
            area : 1394
        },
        {
            id :25,
            name : "Rumphi",
            code : "RU",
            region: "Northern",
            area : 4769
        },
        {
            id :26,
            name : "Salima",
            code : "SA",
            region: "Central",
            area : 2196
        },
        {
            id :27,
            name : "Thyolo",
            code : "TH",
            region: "Southern",
            area : 1715
        },
        {
            id :28,
            name : "Zomba",
            code : "ZO",
            region: "Southern",
            city: true,
            cityType: "Old Capital City",
            area : 2363
        }
    ]

    
}
 
/** Request Handlers */
app.get('/', (req, res) => {
    res.send(
        
        `<html>
            <body>
                
                <center>
                    <h1>Malawi Districts Api</h1>
                    <hr>
                    <h5>To access apis data add <link><code>/api/districts </code></link> to the URL </h5>
                    <hr>
                    <code>developed by Steven Kamwaza</code>
                    <hr>
                    <code>Email: stevenkamwaza@gmail.com </code>
                    <hr>
                </center>
                
            </body>
        </html>`
    );
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